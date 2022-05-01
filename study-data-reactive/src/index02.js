
// getter/setter 需要变量周转才能工作

let obj = {};
let temp;
Object.defineProperty(obj, 'a', {
    // getter
    get () {
        console.log('你试图访问obj的a属性');
        return temp;
    },
    // setter
    set (newValue) {
        console.log('你试图改变obj的a属性', newValue);
        temp = newValue;
    }
})
Object.defineProperty(obj, 'b', {
    value: 4
})
Object.defineProperty(obj, 'c', {
    value: 5
})
console.log(obj.a)
obj.a = 9;
obj.a++;
console.log(obj.a); // 10
