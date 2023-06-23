const mongoose=require('mongoose');

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;














// const mongoose = require("mongoose");
// const colors = require("colors");

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
     
//     });

//     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
//   } catch (error) {
//     console.log(`Error: ${error.message}`.red.bold);
//     process.exit();
//   }
// };

// module.exports = connectDB;
