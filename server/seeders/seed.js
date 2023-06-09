const db = require('../config/connection');
const { User, Profile } = require('../models');
const userSeeds = require('./userSeeds.json');
//const profileSeeds = require('./profileSeeds.json')

db.once('open', async () => {
    try {
      await User.deleteMany({});
      //await Profile.deleteMany({});

      await User.create(userSeeds);

      /*for (let i = 0; i < profileSeeds.length; i++) {
        const { _id, profileAuthor } = await Profile.create(profileSeeds[i]);
        const user = await User.findOneAndUpdate(
          { username: profileAuthor },
          {
            $addToSet: {
              profile: _id,
            },
          }
        );
      }*/
  
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  
    console.log('all done!');
    process.exit(0);
  });
  