import _ from 'lodash';
import '../scss/css.css';

const index = {
    list: [23, 4, 'hello world', 'dog233'],
    data: {
        name: '小明',
        age: 23,
        enName:'simple111',
    },
    init() {
        const _this = this;

        _this.changeList();
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