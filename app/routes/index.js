'use strict';

var path = process.cwd();

module.exports = function (app) {
	app.enable('trust proxy');
		app.route('/')
		.get(function (req, res) {
			var ip = req.ip;
			var lang = req.acceptsLanguages()[0];
			var userAgent = req.headers['user-agent'].split('(')[1].split(')')[0];
			res.send("{\"ipaddress\": \""+ ip + "\", \"language\": \"" + lang + "\", \"software\": \"" + userAgent+"\"}");
		});
};
