var webpack = require('webpack');
var pkg = require('./package.json');

var uglifyOptions = {
    compress: { warnings: false },
    comments: false
};

var isProduction = process.env.NODE_ENV === 'prod';

var config = {
    entry: './scripts/index.js',

    output: {
        filename: './build/script.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
}

if (isProduction) {
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin(uglifyOptions),
        new webpack.BannerPlugin(pkg.name + ' - ' + new Date())
    ]
} else {
        config.devtool = 'eval-source-map'
}

module.exports = config;