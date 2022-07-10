const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
}

module.exports = {
  mode: mode,

  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.hbs/,
        use: "handlebars-loader",
      },
      {
        test: /\.(html)$/,
        use: "html-loader",
      },
      {
        test: /\.(?:ico|png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: "asset/inline",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "./src/about.html",
    }),
  ],

  devtool: "source-map",

  devServer: {
    static: "./dist",
    hot: false,
  },
};
