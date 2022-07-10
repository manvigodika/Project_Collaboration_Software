const User = require("../models/User");
const jwt = require("jsonwebtoken");

const getUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "mysecret", async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

const getUsers = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, "mysecret", async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let userObj = await User.findById(decodedToken.id);
        const users = await User.find({});
        users.sort((a, b) => {
          let fa = a.firstName.toLowerCase(),
            fb = b.firstName.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
        const filteredUsers = users.filter((user) => {
          return user.email != userObj.email;
        });
        res.locals.users = filteredUsers;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports = {
  getUser,
  getUsers,
};
