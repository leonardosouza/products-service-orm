const { Sequelize } = require("sequelize");
const { HOST_DB, PORT_DB, USER_DB, PASS_DB, DATABASE, DIALECT } =
  require("dotenv").config().parsed;

// const sequelize = new Sequelize(
//   `${DIALECT}://${USER_DB}:${PASS_DB}@${HOST_DB}:${PORT_DB}/${DATABASE}`
// );

const sequelize = new Sequelize({
  dialect: DIALECT,
  database: DATABASE,
  host: HOST_DB,
  username: USER_DB,
  password: PASS_DB,
  port: PORT_DB,
  define: {
    timestamps: false,
  },
});

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((error) => console.error("Unable to connect to the database:", error));

module.exports = sequelize;
