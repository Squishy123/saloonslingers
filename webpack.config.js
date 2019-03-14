const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const htmlWebpack = new HTMLWebpackPlugin({
    template: path.join(__dirname, "src/game/index.html"),
    filename: "./index.html"
});

module.exports = {
    entry: path.join(__dirname, "src/game/index.js"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
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