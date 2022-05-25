const express = require('express');

const router = express.Router();

const roomCtrl = require('../controllers/room');

router.post('/', roomCtrl.createClient);
router.put('/:id', roomCtrl.modifyClient);
router.delete('/:id', roomCtrl.deleteClient);
router.get('/:id', roomCtrl.getOneClient);
router.get('/', roomCtrl.getAllClient);

module.exports = router;
