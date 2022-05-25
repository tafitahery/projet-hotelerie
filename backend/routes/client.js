const express = require('express');

const router = express.Router();

const clientCtrl = require('../controllers/client');

router.post('/', clientCtrl.createClient);
router.put('/:id', clientCtrl.modifyClient);
router.delete('/:id', clientCtrl.deleteClient);
router.get('/:id', clientCtrl.getOneClient);
router.get('/', clientCtrl.getAllClient);

module.exports = router;
