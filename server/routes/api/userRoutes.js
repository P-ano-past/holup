const router = require("express").Router();
const {
  findAll,
  createUser,
  remove,
} = require("../../controllers/userController");

router.route("/").get(findAll).post(createUser).delete(remove);

module.exports = router;
