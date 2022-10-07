const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EntryTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EntryTag.init({
    EntryId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'EntryTag',
  });
  return EntryTag;
};
