const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controllers');

router.post('/addMahasiswa', userController.addMahasiswa);
router.get('/getMahasiswa', userController.getMahasiswa);
router.put('/updateMahasiswa/:id', userController.updateMahasiswa);
router.delete('/deleteMahasiswa/:id', userController.deleteMahasiswa);

module.exports = router;