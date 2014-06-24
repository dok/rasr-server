'use strict';

// var mongoose = require('mongoose'),
var passport = require('passport');

module.exports = {

  /**
   * Logout
   */

  logout: function (req, res) {
    req.logout();
    res.send(200);
  },

  /**
   * Login
   */

  login: function (req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      var error = err || info;
      if (error) return res.json(401, error);

      req.logIn(user, function(err) {
        if (err) return res.send(err);
        console.log(req.user.userInfo, user);
        res.json(req.user.userInfo);
      });
    })(req, res, next);
  }
};
