const db = require('./connection');
const {  User } = require('../models');

db.once('open', async () => {
  
    await User.create({
        username: 'ADMIN',
        email: 'ADMIN@ADMIN.COM',
        password: 'ADMIN123',
        isAdmin: true
    });
  
    console.log('users have been seeded');

    // stop seeding
    process.exit();
});
