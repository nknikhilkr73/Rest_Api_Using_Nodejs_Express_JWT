const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://nknikhilkr73:lTimO8ISQVSlN4Jq@cluster0.zoeey6c.mongodb.net/MyD",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );

    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
