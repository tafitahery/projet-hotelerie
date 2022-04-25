const expess = require('express');
const clientCtrl = require('../controller/client');

const router = expess.Router();

router.post('/', clientCtrl.createClient);
router.put('/:id', clientCtrl.modifyClient);
router.delete('/:id', clientCtrl.deleteClient);
router.get('/:id', clientCtrl.getOneClient);
router.get('/', clientCtrl.getAllClient);

module.exports = router;
