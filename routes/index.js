const express = require('express');
const router = express.Router();

const movieController = require('../controllers/movieController');
const upload = require('../config/upload');

/* GET home page. */
router.get('/', movieController.index);
router.post('/', upload.any(), movieController.store);
router.post('/watched', movieController.watched);

router.delete('/delete/:id', movieController.destroy);
router.post('/restore/:id', movieController.restore);

module.exports = router;
