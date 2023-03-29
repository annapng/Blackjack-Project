const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { countDocuments } = require('../models/Profile');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find();
      },
      user: async (parent, { username }) => {
        return User.findOne({ username });
      },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ username: context.user.username });
        }
        //throw new AuthenticationError('You need to be logged in!');
      },
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
    addProfileText: async (parent, { userId, profileText }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: userId },          
          {$set: { profileText: profileText}},
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    createGame: async (parent, {userId}, context) => {
      if (context.user) {
      return User.findOneAndUpdate(
        { _id: userId },
        { $inc: { gamesPlayed: 1 } },
        { new: true }
      );
      }
    },
    createWin: async (parent, {userId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
        { _id: userId },
        { $inc: { wins: 1 } },
        { new: true }
      );
        }
    },
    createLoss: async (parent, {userId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
        { _id: userId },
        { $inc: { losses: 1 } },
        { new: true }
      );
        }
    },
},
};

module.exports = resolvers;
