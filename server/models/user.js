'use strict';
const {
  Model
} = require('sequelize');

const { hashPassword } = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      
      User.hasMany(models.FavoriteRecipe)
    }
  };
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    themeImageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });


  User.beforeCreate( async user => {
    user.password = hashPassword(user.password)
    
    user.email = user.email.toLowerCase()

  })

  User.beforeUpdate( async user => {
    const hash = hashPassword(user.password)
    
    user.password = hash

    user.email = user.email.toLowerCase()
    
  })

  // buat seeding
  User.beforeBulkCreate(users => {

    users.map(user => {
      user.password = hashPassword(user.password);
  
      user.email = user.email.toLowerCase()
    })

  })

  User.beforeFind( options => {

    options.where.email = options.where.email.toLowerCase()

  })
  return User;
};