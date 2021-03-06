const path = require("path");
const base = require("./webpack.config");
const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(base, {
  mode: "production",
  output: {
    filename: "bundle.min.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 1500000,
    maxAssetSize: 1500000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
});
