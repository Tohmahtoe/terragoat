var db = require('../models');

module.exports.userSearch = function (req, res) {
	var sqlq1 = "SELECT name,id FROM Users WHERE login='" + req.body.login + "'";
  db.sequelize.query(sqlq1, {
		model: db.User
    }).then(user => {
		if (user.length) {
			var output = {
