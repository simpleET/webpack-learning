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
                filename: 'index.html', // 生成的文件名
                template: 'index.html', // 当前模板
                inject: true
            })
        ],
        devServer: {
            contentBase: path.join(__dirname, "dist"), //  将 dist 目录下的文件，作为可访问文件
            compress: true, // 是否压缩代码
            /*
            * 详细看webpack   https://www.webpackjs.com/configuration/dev-server/#devserver-publicpath-
            * 设置前：http://localhost:9000/login.js
            * 设置后：http://localhost:9000/dist/login.js
            * */
            // publicPath:'/dist/', // 设置访问路径,此路径下已被打包了的文件可在浏览器中访问,
            port: 9000,
            // open: true, //  启动时，在浏览器打开
            index: 'index.html', // 索引文件的文件名
            overlay: { //  当webpack编译出错时，出现一个全屏的报错信息,
                warnings: true,
                errors: true
            },
            proxy: {// 代理
                '/api': {
                    target: 'http://192.168.20.161:8788',
                    changeOrigin: true,
                    pathRewrite: {// 重写路径，不传/api 过去
                        '^/api': ''
                    }
                },
            },
          /*  proxy: [{
                context: ["/auth", "/api"], // 代理多个特定的路径到同一个目标,
                target: "http://localhost:3000",
            }],*/
            // noInfo:true,//  启动时和每次保存之后，那些显示的 webpack 包(bundle)信息」的消息将被隐藏。错误和警告仍然会显示。
            // hot:true, // 启用 webpack 的模块热替换特性 --不会自动刷新浏览器, 需要配合该插件使用 webpack-dev-middleware  类似 vue
            /* headers: { // 在所有响应中添加首部内容 -- 没发现能用得上的地方
                 "X-Custom-Foo": "simple"
             }*/
        }
    };
    return config;
}
