const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js',
	},
	output: {
		filename: '[name].js?t=[contenthash]',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.png/,
				type: 'asset/resource',    // file-loader
				/*generator:{
					filename: 'images/[hash][ext][query]',
				}*/
			},
			{
				test: /\.svg/,
				type: 'asset/inline',   // url-loader
			},
			{
				test: /\.txt/,
				type: 'asset/source',   //raw-loader
			},
		]
	},
	plugins: [
		// new CleanWebpackPlugin(), // 清空目标文件夹,dist
		/*new HtmlWebpackPlugin({
			// title: '模块热替换',
			filename: 'index.html', // 生成的文件名
			template: 'index.html', // 当前模板
			inject: true
		}),*/
	]
}