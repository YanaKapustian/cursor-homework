const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            inject: true,
            template: path.resolve(__dirname, "src/index.html"), 
            filename: "index.html",
        }),
    ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: "file-loader",
                  },
                ],
              },
            {
              test: /\.css$/,
              exclude: /node_modules/,
              use: [
                  {
                      loader: 'style-loader',
                  },
                  {
                      loader: 'css-loader',
                      options: {
                          sourceMap: true,
                          importLoaders: 2,
                      },
                  },
              ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
}