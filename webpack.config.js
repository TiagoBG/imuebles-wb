const path = require('path')
console.log("Esta es la ruta: ", path.resolve(__dirname, 'build'))
module.exports = {
    entry: './src/app/index.js',
    output: {
        filename: 'main.js'
        path: path.resolve(___dirname, 'build')
    }
}