const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config)).listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }

  console.log('Webpack dev server Listening at localhost:3000');
});
