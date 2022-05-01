import Scanner from "./Scanner";
import NestTokens from './nestTokens';

export default function parseTemplateToToken(templateStr) {
        // console.log('render函数被调用了，我们要命令Scanner工作');
        // 实例化一个扫描器，构造时候提供一个参数，这个参数就是模板字符串、
        // 也就是说这个扫描器就是针对这个模板字符串工作的
        let tokens = [];
        // 创建扫描器
        let scanner = new Scanner(templateStr);
        console.log(scanner.pos);
        let words;
        // 让扫描器工作
        while (!scanner.eos()) {
            // 收集开始标记出现之前的文字
            words = scanner.scanUtil('{{');
            if (words != '') {
                 // 存起来
                tokens.push(['text', words])
            }
            // 过双大括号
            scanner.scan('{{');
            // 收集开始标记出现之前的文字
            words = scanner.scanUtil('}}')
            if (words != '') {
                // 存起来
               tokens.push(['name', words])
            }
            // 过双大括号
            scanner.scan('}}')
        }
        return NestTokens(tokens)
}