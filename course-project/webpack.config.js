const path = require("node:path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyPlugin = require("copy-webpack-plugin");
const {
  BundleAnalyzerPlugin: BundleAnalyzer,
} = require("webpack-bundle-analyzer");

module.exports = {
  entry: {
    index: "./src/index.js",
    courses: "./src/pages/courses.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    static: "./dist",
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      chunks: ["index"],
      inject: true,
      filename: "index.html",
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "src/pages/courses.html"),
      chunks: ["courses"],
      inject: true,
      filename: "pages/courses.html",
    }),
    new copyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images"),
          to: path.resolve(__dirname, "dist/assets/images"),
        },
      ],
    }),
    // new BundleAnalyzer(),
  ],
};
