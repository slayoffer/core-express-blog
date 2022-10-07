const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    static associate({ Tag }) {
      this.belongsToMany(Tag, { through: 'EntryTag' }, { foreignKey: 'EntryId' });
    }
  }
  Entry.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Entry',
  });
  return Entry;
};
