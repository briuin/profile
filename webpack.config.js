const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = env => ({
  entry: path.resolve(__dirname, "src/profile"),
  output: {
    filename: "app.js",
    libraryTarget: "system",
    path: path.resolve(__dirname, "docs")
  },
  devtool: "sourcemap",
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      }
    ]
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    disableHostCheck: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: "src/index.ejs",
      templateParameters: {
        isLocal: env && env.isLocal === "true"
      }
    }),
    new CopyPlugin([{ from: "src/importmap.json", to: "importmap.json" }]),
    new CleanWebpackPlugin()
  ],
  externals: ["single-spa", "vue", "vue-router", /^@vue-mf\/.+$/]
});
