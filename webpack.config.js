/**
 * @Author: Eric
 * @Date:   2018-02-11T10:40:21+08:00
 * @Last modified by:   Eric
 * @Last modified time: 2018-02-11T10:54:22+08:00
 */


var webpack = require('webpack');
var config = {
    entry: {
        'index': ['./src/page/index/index.js'],
        'login': ['./src/page/login/index.js'],
    },
    output: {
        path: './dist',
        filename: 'js/[name].js'
    },
    externals: {
        'jquery': 'window.jQuery'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            filename: 'js/base.js'
        })
    ]
};

module.exports = config;