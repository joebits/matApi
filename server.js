const express	= require('express');
const webpack	= require('webpack');
const http		= require('http');
const path		= require('path');
const config = require('./webpack.config');
const bodyParser = require('body-parser');
const request = require('request');

const app		= express();
const server	= http.Server(app);
const compiler	= webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	hot: true,
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler, {
	log: console.log,
	path: '/__webpack_hmr',
	heartbeat: 10 * 1000
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.post('/', function (req, res, next) {
	var name = req.body;
	var url = 'http://matapi.se/foodstuff'
	var fullUrl = url + name;
	request({
    uri: fullUrl
  }).pipe(res);
});

app.use('/api', router);

app.use('/', express.static(path.join(__dirname + '/dist')));

server.listen(8080, () => console.log('Server running on port ' + server.address().port));