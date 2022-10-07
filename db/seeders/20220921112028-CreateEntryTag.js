module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('EntryTags', [
      {
        EntryId: 1,
        TagId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        EntryId: 2,
        TagId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        EntryId: 3,
        TagId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        EntryId: 4,
        TagId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        EntryId: 5,
        TagId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('EntryTags', null, {});
  },
};
