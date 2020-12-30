 // 通过 Node.js API 实现模块热替换   https://www.webpackjs.com/guides/hot-module-replacement/#通过-node-js-api

 const webpackDevServer = require('webpack-dev-server');
 const webpack = require('webpack');
 const config = require('./webpack.config.js');

 const options = {
     contentBase: './dist',
     hot: true,
     host: 'localhost'
 };

 webpackDevServer.addDevServerEntrypoints(config, options);
 const compiler = webpack(config);
 const server = new webpackDevServer(compiler, options);

 server.listen(5000, 'localhost', () => {
     console.log('dev server listening on port 5000');
 });