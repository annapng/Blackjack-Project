const { AuthenticationError } = require('apollo-server-express');
const { User, Profile } = require('../models');
const { countDocuments } = require('../models/Profile');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find().populate('profile');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('profile');
      }
    },
  

Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addProfileText: async (parent, { profileText }, context) => {
      if (context.user) {
        const profile = await Profile.create({
          profileText,
          profileAuthor: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },          
          {$addToSet: { profile: profile._id }}
        );
        return profile;
      }
    },
    createGame: async (parent, {_id, gamesPlayed }) => {
      const game = await Profile.findOneAndUpdate(
        { _id },
        { $inc: { [gamesPlayed]: 1 } },
        { new: true }
      );
      return game;
    },
    createWin: async (parent, {_id, wins }) => {
      const winsWon = await Profile.findOneAndUpdate(
        { _id },
        { $inc: { [wins]: 1 } },
        { new: true }
      );
      return winsWon;
    },
    createLoss: async (parent, {_id, losses }) => {
      const loss = await Profile.findOneAndUpdate(
        { _id },
        { $inc: { [losses]: 1 } },
        { new: true }
      );
      return loss;
    },
},
};

module.exports = resolvers;
