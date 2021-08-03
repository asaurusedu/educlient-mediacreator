const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    pushmateri: "./src/page/push-materi/main.js",
  },

  devServer: {
    port: 8080,
    writeToDisk: false,
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
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
};
