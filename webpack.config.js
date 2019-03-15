const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const htmlWebpack = new HTMLWebpackPlugin({
    template: path.join(__dirname, "/game/main.html"),
    filename: "./index.html"
});

module.exports = {
    entry: {
        main: path.join(__dirname, "/game/")
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: 'node',
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: [/node_modules/, /server/]
            }
        ]
    },
    plugins: [htmlWebpack],
    resolve: {
        extensions: ["js"]
    },
    devServer: {
        port: 3000
    }
}