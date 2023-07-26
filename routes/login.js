const express = require('express');
const router = express.Router();
const logincontroller=require('../controllers/login');

router.get('/GetUser', logincontroller.getUser);
router.post('/AddUser', logincontroller.addUser);

module.exports=router;