/**
 * 函数的功能是折叠token 将#和/ 之间的tokens能够整合起来 
 */
export default function nestTokens(tokens) {
    // 结果数组
    var nestedTokens = []
    // 栈结构 存放小tokens 栈顶(靠近端口的，最新进入的)tokens数组
    // 中当前操作的这个tokens小数组
    var sections = []
    console.log(tokens)
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        console.log(9999, token)
        switch (token[1]) {
            case '#':
                sections.push(token)
                console.log(token[1] + '入栈了')
                break;
            case '/':
                let section = sections.pop()
                console.log(section[1] + '出栈了')
                break;
            default:
        }
    }
    return nestedTokens
}