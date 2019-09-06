const liveServer = require("live-server");

var params = {
	port: 8181,
	host: "0.0.0.0", 
	root: "./", 
	open: true, 
	ignore: 'package.json',
	wait: 500, 
	logLevel: 2,
	middleware: [function(req, res, next) { next(); }]
};
liveServer.start(params);