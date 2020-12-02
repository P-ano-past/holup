const router = require("express").Router();
const {
  findAll,
  createUser,
  remove,
  update,
  findById,
  login,
  usernameCheck,
} = require("../../controllers/userController");

router.route("/").get(findAll).post(createUser);
router.route("/:id").delete(remove).put(update).get(findById);
router.route("/username").post(usernameCheck);
router.route("/login").post(login);

module.exports = router;
