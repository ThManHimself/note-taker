const router = require('express').Router();
const notesAPI = require('./notesRoutes');

router.use(notesAPI);

module.exports = router;