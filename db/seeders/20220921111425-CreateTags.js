module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [
      { tagName: 'Best', createdAt: new Date(), updatedAt: new Date() },
      { tagName: 'Worst', createdAt: new Date(), updatedAt: new Date() },
      { tagName: 'Funny', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
