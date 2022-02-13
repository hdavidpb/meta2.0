const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
require("dotenv").config({
  path: "./.env.local ",
});

const tsRules = {
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      sourceMap: false,
    },
  },
};

const cssRules = {
  test: /\.(css)$/,
  use: [
    {
      loader:
        process.env.NODE_ENV !== "production"
          ? "style-loader"
          : MiniCssExtractPlugin.loader,
    },
    {
      loader: "css-loader",
      options: {
        sourceMap: false,
        importLoaders: 2,
      },
    },
  ],
};

const htmlRules = {
  test: /\.(html)$/,
  exclude: /node_modules/,
  use: {
    loader: "html-loader",
    options: { minimize: true },
  },
};

const jsRules = {
  test: /\.js$/,
  enforce: "pre",
  use: ["source-map-loader"],
};

const imgRules = {
  test: /\.(jpg|png|gif|woff|eot|ttf|svg|mp4|webm)$/,
  use: {
    loader: "url-loader",
    options: {
      limit: 90000,
    },
  },
};

const svgRules = {
  test: /\.svg$/,
  use: [
    {
      loader: "react-svg-loader",
      options: {
        jsx: true,
      },
    },
  ],
};

module.exports = {
  entry: "./src/index",
  target: "web",
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "auto",
    filename: "bundle.[hash].js",
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  devtool: "source-map",
  module: {
    rules: [tsRules, cssRules, htmlRules, jsRules, imgRules, svgRules],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new Dotenv(),
    new ModuleFederationPlugin({
      name: "Meta",
      filename: "remoteEntry.js",
      exposes: {
        "./Meta": "./src/App",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        "react-redux": {
          singleton: true,
        },
      },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    historyApiFallback: true,
    port: 8006,
    inline: true,
    hot: false,
    open: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
};
