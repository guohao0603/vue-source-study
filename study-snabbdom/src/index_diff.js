import { init } from 'snabbdom/init'
import { classModule } from 'snabbdom/modules/class'
import { propsModule } from 'snabbdom/modules/props'
import { styleModule } from 'snabbdom/modules/style'
import { eventListenersModule } from 'snabbdom/modules/eventlisteners'
import { h } from 'snabbdom/h' // helper function for creating vnodes

// 创建出patch函数
const patch = init([classModule, propsModule, styleModule, eventListenersModule])
const container = document.getElementById('container');
const btn = document.getElementById('btn');
// // 创建虚拟节点
// const vnode1 = h('ul', {}, [
//   h('li', {key: 'A'}, 'A'),
//   h('li', {key: 'B'}, 'B'),
//   h('li', {key: 'C'}, 'C'),
//   h('li', {key: 'D'}, 'D')
// ]);
// // 让虚拟节点上树
// patch(container, vnode1);

// const vnode2 = h('ol', {}, [
//   h('li', {key: 'E'}, 'E'),
//   h('li', {key: 'A'}, 'A'),
//   h('li', {key: 'B'}, 'B'),
//   h('li', {key: 'C'}, 'C'),
//   h('li', {key: 'D'}, 'D')
// ]);
// // 点击按钮时，将vnode1变为vnode2
// btn.onclick = function () {
//   patch(vnode1, vnode2);
// }

const vnode1 = h('div', {}, [
  h('p', {key: 'A'}, 'A'),
  h('p', {key: 'B'}, 'B'),
  h('p', {key: 'C'}, 'C'),
  h('p', {key: 'D'}, 'D')
]);
// 让虚拟节点上树
patch(container, vnode1);

const vnode2 = h('div', {},h('section',{},[
  h('p', {key: 'A'}, 'A'),
  h('p', {key: 'B'}, 'B'),
  h('p', {key: 'C'}, 'C'),
  h('p', {key: 'D'}, 'D')
]));

btn.onclick = function () {
  patch(vnode1, vnode2)
}

// diff 算法心得
/**
 * 1、实现最小量更新，当然key很重要，key是这个节点的唯一标识，告诉diff
 * 算法，在更改前后它们是同一个节点
 * 2、只有是同一个虚拟节点(eg：父节点ul换成ol 就不是同一个虚拟节点了)，
 * 才进行精细化比较，否则就是暴力删除旧，插入新的。
 * 如何定义是同一个虚拟节点?答：选择器相同且key相同
 * 3、只进行同层比较，不会进行跨层比较。即使是同一片虚拟节点，但是跨层了，
 * 对不起，精细化比较不diff你，而是暴力删除旧的，然后插入新的
 * 4、diff并不是那么的无微不至，真的影响效率吗?
 * 答：上面的2、3操作在实际的vue开发中基本不会遇见，所以这是合理的优化机制。
 */