const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const buildPath = path.resolve(__dirname, "dist");

module.exports = {
  mode: "production",

  devtool: "source-map",

  entry: {
    pullformdata: "./src/assets/js/get-formdata.js",
    getmateri: "./src/assets/js/get-materi.js",
  },

  output: {
    filename: "[name].bundle.js",
    path: buildPath,
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource",
      },
      {
        resourceQuery: /raw/,
        type: "asset/source",
      },
      {
        resourceQuery: /template/,
        loader: "html-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Push Materi to Asaurus Edu",
      template: "src/page/push-materi/template.html",
      inject: true,
      chunks: ["push-materi"],
      filename: "push-materi.html",
    }),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),

      new CssMinimizerPlugin(),
    ],
  },
};
