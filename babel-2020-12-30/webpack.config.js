const path = require('path');
const glob = require('glob');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let entries = getEntry('./src/*.js');

function getEntry(globPath) {
    let files = glob.sync(globPath);
    let entries = {},
        entry, dirname, basename, pathname, extname;

    for (let i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        extname = path.extname(entry);
        basename = path.basename(entry, extname);
        pathname = path.join(dirname, basename);
        // console.log(dirname, extname, basename, pathname)
        entries[basename] = './' + entry;
    }
    return entries;
}


module.exports = (env, argv) => {

    let config = {
        entry: entries,
        output: {
            filename: '[name].js?t=[contenthash]',
            path: path.resolve(__dirname, 'dist'),
            publicPath:'/',
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
                title: 'webpack-dev-middleware'
            })
        ],
    };
    return config;
}
