const path = require("node:path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const { glob } = require("glob");
const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");

const purgePlugin = {
  src: path.resolve(__dirname, "src"),
};

module.exports = merge(webpackCommon, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync(`${purgePlugin.src}/**/*`, { nodir: true }),
    }),
  ],
});
