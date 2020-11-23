const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log("Esta es la ruta: ", path.resolve(__dirname, 'build'))
module.exports = {
    mode: 'production',
    entry: './src/app/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        port: 7094,
        open: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',

        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
}