const { Router } = require('express');
const helpers = require('../controllers/helpers');
const { renderMainPage } = require('../controllers/blogControllers');

const router = Router();

router.get('/', helpers.catchErrors(renderMainPage));

module.exports = router;
