const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // webpack-dev-server 配置
    devServer: {
        // 静态文件根目录
        contentBase: path.join(__dirname, 'www'),
        // 不压缩
        compress: false,
        // 端口
        port: 9000,
        // 虚拟打包路径 
        publicPath: "/xuni/"
    }
}