var path = require('path');
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var $ = require('gulp-load-plugins')();

var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var prodConfig = require('./webpack.prod.config');
var devConfig = require('./webpack.dev.config');

var pathInfo = {
    vendor: path.join(__dirname, '/assets/vendor'),
    node: path.join(__dirname, '/node_modules'),
    core: path.join(__dirname, '/assets/core'),
    permission: path.join(__dirname, '/resources/assets/core/permission'),
    menu: path.join(__dirname, '/resources/assets/core/menu'),
    lang: path.join(__dirname, '/resources/assets/core/lang')
};

var target = !!$.util.env.production;

var common = {
    entry: {
        'assets/vendor/vendor': ['react', 'react-dom'],
        'assets/core/permission/permission': [
            pathInfo.permission + '/Permission.jsx',
            pathInfo.permission + '/PermissionExclude.jsx',
            pathInfo.permission + '/PermissionInclude.jsx',
            pathInfo.permission + '/PermissionRadioComp.jsx',
            pathInfo.permission + '/PermissionRenderer.jsx',
            pathInfo.permission + '/PermissionTag.jsx',
            pathInfo.permission + '/PermissionTagSuggestion.jsx',
            pathInfo.permission + '/SettingsPermission.jsx'
        ],
        'assets/core/menu/menu': [
            pathInfo.menu + '/MenuRenderer.js',
            pathInfo.menu + '/MenuEntity.js',
            pathInfo.menu + '/MenuItem.js',
            pathInfo.menu + '/TreeNode.js',
            pathInfo.menu + '/MenuSearchBar.js',
            pathInfo.menu + '/UITree.js',
            pathInfo.menu + '/MenuSearchBar.js',
            pathInfo.menu + '/MenuSearchSuggestion.js',
            pathInfo.menu + '/MenuTree.js'
        ],
        'assets/core/lang/langEditorBox': pathInfo.lang + '/LangEditorBox.js'
    },
    output: {
        path: path.resolve(__dirname, './'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'react',
            filename: 'assets/vendor/vendor.bundle.js'
        })
    ],
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    cacheDirectory: true
                }
            }
        ]
    },
    resolve: {
        alias: {
            vendor: pathInfo.vendor + '/vendor.bundle',
            react: pathInfo.node + '/react',
            'react-dom': pathInfo.node + '/react-dom'
        },
        extensions: ['', '.js', '.jsx']
    }
};

var config;

if(target) {
    config = webpackMerge(common, prodConfig)
} else {
    config = webpackMerge(common, devConfig)
}

module.exports = config;