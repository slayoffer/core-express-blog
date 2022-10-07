const renderTemplate = require('./renderTemplate');
const Main = require('../views/Main');
const Entries = require('../views/Entries');
const EditEntry = require('../views/EditEntry');
const { Entry, Tag, EntryTag } = require('../../db/models');

const renderMainPage = (req, res) => {
  renderTemplate(Main, null, res);
};

const getEntries = async (req, res) => {
  const tags = await Tag.findAll({ raw: true });
  const entries = await Entry.findAll(
    {
      raw: true,
      include: {
        model: Tag,
      },
      order: [['id', 'ASC']],
    },
  );
  renderTemplate(Entries, { entries, tags }, res);
};

const addEntry = async (req, res) => {
  const { title, body, tagName } = req.body;
  const newEntry = await Entry.create({ title, body });
  const tag = await Tag.findOne({ raw: true, where: { tagName } });
  await EntryTag.create({ EntryId: newEntry.id, TagId: tag.id });
  res.json(newEntry);
};

const editEntry = async (req, res) => {
  const { id } = req.params;
  const tags = await Tag.findAll({ raw: true });
  const entry = await Entry.findOne({
    raw: true,
    where: { id },
    include: {
      model: Tag,
      attributes: ['tagName', 'id'],
    },
  });
  renderTemplate(EditEntry, { entry, tags }, res);
};

const postEntryEdits = async (req, res) => {
  const { id } = req.params;
  const { title, body, tagName } = req.body;
  const tag = await Tag.findOne({ raw: true, where: { tagName } });
  await EntryTag.update({ TagId: tag.id }, { where: { EntryId: id } });
  await Entry.update({ title, body }, { where: { id } });
  res.redirect('/entries');
};

const deleteEntry = async (req, res) => {
  const { id } = req.params;
  await EntryTag.destroy({ where: { EntryId: id } });
  await Entry.destroy({ where: { id } });
  res.sendStatus(200);
};

const searchEntry = async (req, res) => {
  const searchResult = await Entry.findAll({
    raw: true,
    include: {
      model: Tag,
    },
  });
  res.json(searchResult);
};

module.exports = {
  renderMainPage,
  getEntries,
  addEntry,
  editEntry,
  postEntryEdits,
  deleteEntry,
  searchEntry,
};
