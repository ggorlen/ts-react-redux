const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  //stats: "errors-only",
  devServer: {
    //stats: "errors-only",
    static: { directory: path.join(__dirname, "dist") },
    compress: true,
    port: 5000,
    historyApiFallback: true,
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      //minify: {
      //  removeComments: true,
      //  collapseWhitespace: true,
      //  removeRedundantAttributes: true,
      //  useShortDoctype: true,
      //  removeEmptyAttributes: true,
      //  removeStyleLinkTypeAttributes: true,
      //  keepClosingSlash: true,
      //  minifyJS: true,
      //  minifyCSS: true,
      //  minifyURLs: true,
      //},
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
};
