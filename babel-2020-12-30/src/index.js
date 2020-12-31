import _ from 'lodash';
import '../scss/css.css'; // 修改css.css 会自动刷新浏览器，并改变样式
import login from './login';



if (module.hot) {
    // console.log(import.meta.webpackHot) // webpack 5的写法
    // console.log(module.hot) // webpack 4
    module.hot.accept('./login.js', function () {
        console.log('依赖login.js 变化了');
        // login.init();
    });
}
const index = {
    list: [23, 4, 'hello world', 'dog233'],
    data: {
        name: '小明111',
        age: 23,
        enName: 'simple222',
    },
    init() {
        const _this = this;
        login();
        let env = process.env.NODE_ENV;
        console.log("当前的运行环境是： " + env)
        document.body.append('<p>333</p>')
        _this.changeList();

        var btn_alert = document.createElement('button');
        btn_alert.innerHTML = "点击我";
        document.body.appendChild(btn_alert)
        btn_alert.onclick = () => {
            import(/* webpackChunkName:"click-me" */ './click-me').then(module=>{
                console.log(module)
                module.default();
            })
        }


    },

    // changeList: function() {
    changeList() {
        const _this = this;
        console.log('begin：', _this.list);
        let arr = [];

        arr = _this.list.find(item => {
            return item > 10;
        });

        console.log('end', arr);
        // console.log('是否包含23:', _this.list.includes(23));
        let data = _.assign(_this.data, {gender: '男'});
        // console.log(data);
    },
};
index.init();