const Sequelize = require("sequelize");
const sequelize = require("../config/dbConfig");
const Model = Sequelize.Model;
class Auth extends Model {}
Auth.init(
  {
    // attributes
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
   
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    discount_status: {
      type: Sequelize.BOOLEAN,
    }
  },
  {
    sequelize,
    modelName: "Auth",
    // options
    indexes: [
      {
        unique: true,
        fields: ["id", "email"]
      }
    ]
  }
);

module.exports = Auth;
