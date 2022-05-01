import h from './mysnabbdom/h.js';
import patch from './mysnabbdom/patch.js';

const container = document.getElementById('container');
const btn = document.getElementById('btn');
const myVnode1 = h('section', {}, [
  h('li', {key: 'A'} ,'A'),
  h('li', {key: 'B'} ,'B'),
  h('li', {key: 'C'} ,'C'),
  h('li', {key: 'D'} ,'D'),
]);
console.log(myVnode1)

patch(container, myVnode1);
// 如果全部都不加key 然后全会命中①  然后旧节点全部下树 新节点上树，所以想实现最小量更新必须加key
const myVnode2 = h('section', {},[
  h('li', {key: 'Q'} ,'Q'),
  h('li', {key: 'C'} ,'C'),
  h('li', {key: 'A'} ,'A'),
  h('li', {key: 'F'} ,'F'),
  h('li', {key: 'D'} ,'D'),
  h('li', {key: 'B'} ,'B'),
])

btn.onclick = function () {
  patch(myVnode1, myVnode2);
}
