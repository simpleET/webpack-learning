import _ from 'lodash';
import '../scss/css.css';
import login from './login';
console.log(module)
if (module.hot) {
    module.hot.accept('./login.js', function () {
        console.log('登录js 变化了');
        login.init();
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

        _this.changeList();
        _this.login();
    },
    login() {
        const _this = this;

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
        console.log('是否包含23:', _this.list.includes(23));
        let data = _.assign(_this.data, {gender: '男'});
        console.log(data);
    },
};
index.init();