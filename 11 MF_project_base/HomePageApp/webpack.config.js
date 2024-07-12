const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const {
  container: { ModuleFederationPlugin },
} = require("webpack");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true,
    port: 3000,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "home",
      filename: "remoteEntry.js",
      exposes: {
        "./HomePage": "./src/components/HomeContent/HomeContent.jsx",
      },
      shared: ["react-dom", "react"],
      remotes: {
        movie: "movie@http://localhost:9000/remoteEntry.js",
        component: "components@http://localhost:3002/remoteEntry.js",
      },
    }),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: path.resolve(__dirname, "node_modules"),
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "async",
    },
  },
};
