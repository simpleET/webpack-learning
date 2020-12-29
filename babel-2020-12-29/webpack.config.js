const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');

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
    const mode = argv.mode;
    console.log('当前环境是：' + mode); // production | development

    let config = {
        entry: entries,
        output: {
            filename: '[name].js?t=[contenthash]',
            path: path.resolve(__dirname, 'dist'),
        },
        // devtool: (mode === 'production') ? false : 'source-map',
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
            new WebpackManifestPlugin({
                fileName: path.join(__dirname, './manifest.json'), //  生成打包清单
            }),
            new CleanWebpackPlugin(), // 清空目标文件夹,dist
            new HtmlWebpackPlugin({
                // title: '自动生成index.html并注入js、css',
                filename: 'lsk.html', // 生成的文件名
                template: 'index.html', // 当前模板
                inject: true
            })
        ],
    };
    return config;
}
