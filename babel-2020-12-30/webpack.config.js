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
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(), // 清空目标文件夹,dist
        new HtmlWebpackPlugin({
            title: '模块热替换',
        }),
        // new webpack.NamedModulesPlugin(), // webpack 5已经被移除
        new webpack.HotModuleReplacementPlugin(),
       /* new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')   webpack 5 会根据 mode 判断 是 production 和development
        }),*/
    ],
    devServer: {
        contentBase: './dist',
        hot: true,
        port: 9000,
    }
}