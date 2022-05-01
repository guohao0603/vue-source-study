// 得到Array.prototype
import {def} from "../utils";

const arrayPrototype = Array.prototype;
// 以Array.prototype 为原型创建arrayMethods对象
export const arrayMethods = Object.create(arrayPrototype);


// 要被改写的7个数组方法
const methodsNeedChange = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]

methodsNeedChange.forEach(methodName => {
    // 备份原来的方法
    const original = arrayPrototype[methodName];
    // 定义新的方法
    def(arrayMethods, methodName, function () {
        // 恢复原来的功能
        const result = original.apply(this,arguments)
        console.log('array重写方法');
        // 把类数组对象变为数组
        const args = [...arguments];
        // 不能用箭头函数 箭头函数没有arguments
        // 把这个数组身上的__ob__取出来，__ob__已经被添加了，为什么已经被添加了？
        // 因为数组肯定不是最高层，比如obj.g属性是数组，obj不能是数组，第一次遍历obj这个对象
        // 的第一层的时候，已经给g属性(就是这个数组)添加了__ob__ 属性。
        const ob = this.__ob__;
        // 有三种方法push\unshift\splice 能够插入新项，现在要把插入的新项也要变为observe的
        let inserted = [];
        switch (methodName) {
            case 'push':
            case 'unshift':
                inserted = arguments;
                break;
            case 'splice':
                // splice格式是splice(下标，数量，插入的新项)
                inserted = args.slice(2);
                break;

        }
        // 判断有没有插入的新项，让新项也变为响应的
        if (inserted) {
            ob.observeArray(inserted);
        }
        // 数组中 发布订阅模式，通知dep
        ob.dep.notify();

        return result;
    }, false)
})
