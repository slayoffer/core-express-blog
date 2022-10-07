const { Router } = require('express');
const helpers = require('../controllers/helpers');
const {
  getEntries,
  addEntry,
  editEntry,
  postEntryEdits,
  deleteEntry,
  searchEntry,
} = require('../controllers/blogControllers');

const router = Router();

router.get('/entries', helpers.catchErrors(getEntries));
router.post('/add', helpers.catchErrors(addEntry));
router.get('/edit/:id', helpers.catchErrors(editEntry));
router.post('/edit/:id', helpers.catchErrors(postEntryEdits));
router.delete('/delete/:id', helpers.catchErrors(deleteEntry));
router.get('/search', helpers.catchErrors(searchEntry));

module.exports = router;
