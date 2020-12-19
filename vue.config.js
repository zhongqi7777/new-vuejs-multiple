const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
const titles = require("./title.js");
const glob = require("glob");
const pages = {};

glob.sync("./src/pages/**/app.js").forEach((path) => {
  const chunk = path.split("./src/pages/")[1].split("/app.js")[0];
  pages[chunk] = {
    entry: path,
    template: "public/index.html",
    title: titles[chunk],
    chunks: ["chunk-vendors", "chunk-common", chunk],
  };
});

const port = process.env.port || process.env.npm_config_port || 9527; // dev port
module.exports = {
  //publicPath: '/',
  publicPath: "./",
  // outputDir: 'dist',
  outputDir: "docs",
  pages,
  chainWebpack: (config) => config.plugins.delete("named-chunks"),
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // before: require("./mock/mock-server.js"),
     before: require("./server/mock-server.js"),
  },

  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
};
