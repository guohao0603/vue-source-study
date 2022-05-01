import observe from './reactive/observe'
import Watcher from "./reactive/Watcher";
let obj = {
    a: {
        m: {
            n: 9
        }
    },
    b: [1,2,3,4],
};



observe(obj)
new Watcher(obj, 'a.m.n', (val, oldValue) => {
    console.log('****', val,oldValue)
})
obj.a.m.n = [1,2,3,4,5];
console.log(obj)
