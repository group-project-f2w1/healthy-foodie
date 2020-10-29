'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FavoriteRecipe extends Model {

    static associate(models) {
      
      FavoriteRecipe.belongsTo(models.User)
    }
  };
  FavoriteRecipe.init({
    UserId: DataTypes.INTEGER,
    RecipeId: DataTypes.INTEGER,
    recipeName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FavoriteRecipe',
  });
  return FavoriteRecipe;
};