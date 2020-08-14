const router = require('express').Router();
const { findAll, createUser } = require('../../controllers/userController');


router.route('/')
.get(findAll)
.post(createUser)


module.exports = router;
