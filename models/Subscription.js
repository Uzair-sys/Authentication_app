const Sequelize = require("sequelize");
const sequelize = require("../config/dbConfig");
const Model = Sequelize.Model;
class Subscription extends Model {}
Subscription.init(
  {
    // attributes
    subscription_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
   
    user_id: {
        type: Sequelize.INTEGER,
        // primaryKey: true,
        allowNull:true
    //   validate: {
    //     : true
    //   }
    },
    services_id: {
        type: Sequelize.INTEGER,
        // primaryKey: true,
    },
    charges: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    exp_date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false
    },
    
  },
  
  {
    sequelize,
    modelName: "Subscription",
    // options
    // indexes: [
    //   {
    //     unique: true,
    //     fields: ["id"]
    //   }
    // ]
    
  }
);

module.exports = Subscription;
