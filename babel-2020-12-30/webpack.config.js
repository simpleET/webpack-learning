const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {

    let config = {
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
            new webpack.HotModuleReplacementPlugin()
        ],
        devServer: {
            contentBase: './dist',
            hot: true,
            port:9000,
        }
    };
    return config;
}
