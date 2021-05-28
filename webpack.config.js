const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    assetModuleFilename: "assets/images/[hash][ext][query]",
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    // new Dotenv({ path: path.resolve(__dirname, ".env") }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/img", to: "img" },
      ],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
  },
};
