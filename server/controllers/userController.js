const db = require("../models/");

module.exports = {
  findAll: function (req, res) {
    db.User.find({})
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
    console.log("findbyID triggered");
  },
  createUser: function ({ body }, res) {
    console.log("body.username: ", body.username);

    // db.User.findOne({ username: body.username })
    //   .then((dbModel) => {
    //     console.log("dbmodel.username:", dbModel.username);

    //     // if ({ username: body.username } === dbModel.username) {
    //     //   console.log("Username already exists");
    //     // }
    //     // console.log("dbModel.username:", dbModel.username);
    //   })
    //   .catch((err) => res.status("Username error").json(err));

    // db.User.findOne(req.body.username);
    // const bcrypt = require("bcryptjs");
    // bcrypt.genSalt(10, function (err, salt) {
    //   bcrypt.hash(body.userPassword, salt, function (err, hash) {
    //     body.userPassword = hash;
    //     db.User.create(body).then((dbModel) => res.json(dbModel));
    //     //body.userPassword now posts encrypted password into mongo.
    //   });
    // });

    // db.User.findOne(body.username)
    //   .then((dbModel) => {
    //     console.log("dbmodel.username:", dbModel.username);

    //     // if ({ username: body.username } === dbModel.username) {
    //     //   console.log("Username already exists");
    //     // }
    //     // console.log("dbModel.username:", dbModel.username);
    //   })
    //   .catch((err) => res.status(422).json(err));
    //catch does not work.
    // console.log("body: ", body);
    // .then(dbModel => res.json(dbModel))
    // .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  usernameCheck: function (req, res) {
    db.User.findOne({ username: req.body.username }).then((dbModel) => {
      if ({ username: req.body.username } === dbModel.username) {
        console.log("hello there", dbModel.username);
      }
    });
  },
  login: function (req, res) {
    db.User.findOne({
      username: req.body.data.username,
      // userPassword: req.body.data.userPassword,
    })
      .then((dbModel) => {
        const bcrypt = require("bcryptjs");
        const hash = dbModel.userPassword;

        console.log("hash:", hash);
        bcrypt.compare(
          req.body.data.userPassword,
          hash,
          function (err, isMatch) {
            if (err) {
              throw err;
            } else if (!isMatch) {
              console.log("Password doesn't match!");
            } else {
              console.log("Password matches!");
            }
          }
        );

        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
};
