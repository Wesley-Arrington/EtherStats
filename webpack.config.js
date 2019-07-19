const path = require("path");

module.exports = {
    context: __dirname,
    entry: "./entry.js",
    output: {
        path: path.resolve(__dirname, 'javascript'),
        filename: "bundle.js"
    },
    // devtool: "inline-source-map",
    module: {
        rules: [
            {
                // test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    // query: {
                    //     presets: ['@babel/env', '@babel/react']
                    // }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }
}