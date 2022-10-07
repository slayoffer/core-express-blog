module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('EntryTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      EntryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Entries',
          key: 'id',
        },
      },
      TagId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tags',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('EntryTags');
  },
};
