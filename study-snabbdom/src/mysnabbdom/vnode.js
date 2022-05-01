/**
 *
 * @param {*} sel 'div'
 * @param {*} data '{}' 标签上的props
 * @param {*} children 'undefined'
 * @param {*} text '我是一个盒子'
 * @param {*} elm 'undefined'
 * @returns
 */
export default function (sel, data, children, text, elm) {
    const key = data === undefined ? undefined : data.key
    return {
        sel,
        data,
        children,
        text,
        elm,
        key
    }
}
