'use strict';

const users = require('../data/users.json')

const { User } = require('../models')

users.forEach(user => {
  user.createdAt = new Date()
  user.updatedAt = new Date()
})

module.exports = {
  up: async (queryInterface, Sequelize) => {


   await User.bulkCreate(users)

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete("Users", null)

  }
};
