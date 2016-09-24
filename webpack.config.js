module.exports = {
    entry: './scripts/index.js',

    output: {
        filename: './build/script.js'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },

    devtool: 'eval-source-map'
}
