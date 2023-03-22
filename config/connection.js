const { connect, connection } = require('mongoose');
connection.set('strictQuery', false);

const connectionString =
  process.env.MONGODB_URI || 'mongodb+srv://ryandamron:asdf@cluster0.npikmfg.mongodb.net/SNDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
