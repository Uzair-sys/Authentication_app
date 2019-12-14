const Sequelize = require("sequelize");
const sequelize = require("../config/dbConfig");
const Model = Sequelize.Model;
class Services extends Model {}
Services.init(
  {
    // attributes
    service_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: Sequelize.INTEGER,
      // primaryKey: true,
      
      // autoIncrement: true
    },
   
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    //   validate: {
    //     : true
    //   }
    },
    description: {
      type: Sequelize.STRING,
    },
    original_price: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    discount_price: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true
      },
      deletedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true
      }
  },
  {
    sequelize,
    modelName: "Services",
    // options
    indexes: [
      {
        unique: true,
        fields: ["id"]
      }
    ]
  }
);

module.exports = Services;
