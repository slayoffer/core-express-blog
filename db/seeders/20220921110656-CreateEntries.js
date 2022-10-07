module.exports = {
  async up(queryInterface, Sequelize) {
    const entries = [];
    for (let i = 0; i < 5; i++) {
      entries.push({
        title: `Entry ${i + 1}`,
        body: `Text ${i + 1}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert('Entries', entries, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Entries', null, {});
  },
};
