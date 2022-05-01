// parse函数，主函数
export default function (templateString) {
    // 指针
    var index = 0;
    // 剩余部分
    var rest = '';
    // 开始标记
    var startRegExp = /^\<([a-z]+[1-6]?)\>/;
    // 结束标记
    var endRegExp = /^\<\/([a-z]+[1-6]?)\>/;

    while (index < templateString.length - 1) {
        rest = templateString.substring(index);
        // 识别遍历到的这个字符串，是不是一个开始标签
        if (startRegExp.test(rest)) {
            let tag = rest.match(startRegExp)[1];
            console.log('检测到开始标记', tag);
            // 指针移动标签的长度加2，为什么要加2呢?因为<>也占两位
            index += tag.length + 2;
        } else if (endRegExp.test(rest)) {
            let tag = rest.match(endRegExp)[1];
            // 识别遍历到这个字符，是不是一个结束标签
            // 指针移动标签的长度加3，因为</> 占3位
            console.log('检测到结束标记', tag);
            index += tag.length + 3;
        }
        else {
            index++;
        }

    }
}
