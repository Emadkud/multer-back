const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  const User= sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.TEXT,
    },
  });

   return User; 
};
