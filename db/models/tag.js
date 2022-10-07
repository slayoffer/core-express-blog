const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate({ Entry }) {
      this.belongsToMany(Entry, { through: 'EntryTag' }, { foreignKey: 'TagId' });
    }
  }
  Tag.init({
    tagName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};
