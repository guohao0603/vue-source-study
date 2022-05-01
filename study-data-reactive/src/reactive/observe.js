import Observer from "./Observer";
// 创建observe函数，注意函数的名字没有r
export default function (value) {
    // 如果value不是对象，什么都不做
    if (typeof value != 'object') return;
    // 定义ob
    var ob;
    if (typeof value.__ob__ !== 'undefined') {
        ob = value.__ob__
    } else {
        ob = new Observer(value);
    }
    return ob;
}
