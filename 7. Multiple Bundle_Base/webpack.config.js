const path = require("node:path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    products: "./src/products.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: { directory: path.resolve(__dirname, "dist") },
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      chunks: ["index"],
      inject: true,
      filename: "index.html",
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src/products.html"),
      chunks: ["products"],
      inject: true,
      filename: "products.html",
    }),
  ],
};
