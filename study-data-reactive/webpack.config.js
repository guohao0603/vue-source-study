const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: 'xuni',
        filename: 'bundle.js',
    },
    devServer: {
        port: 9001,
        contentBase: 'www'
    }
};
