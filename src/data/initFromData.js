const db = require('./db');

const friends = require('../../data/friends.json');
const publications = require('../../data/publications');

db.Friend.insertMany(friends);
db.Publication.insertMany(publications);