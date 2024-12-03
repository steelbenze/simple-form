const mysql = require('mysql');

const connectDB = () => {
  const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  connection.connect((err) => {
    if (err) {
      console.error('MySQL connection failed:', err);
      process.exit(1);
    } else {
      console.log('MySQL connected');
    }
  });

  return connection;
};

module.exports = { connectDB };
