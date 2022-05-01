
let obj = {};
// 数据劫持/数据代理
Object.defineProperty(obj, 'a', {
    value: 3,
    // 是否可写
    writable: false,
    // 是否可以被枚举
    enumerable: true
})
Object.defineProperty(obj, 'b', {
    value: 4,
    // 是否可写
    writable: false,
    // 是否可以被枚举==> 能否用for in 遍历属性
    enumerable: false
})

console.log(obj)
obj.a++;
console.log(obj)
for (let a in obj) {
    console.log(a)
}
