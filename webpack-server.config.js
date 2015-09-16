module.exports = {
  context: __dirname + "/app",
  entry: {
    server:"./server.js"
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    library: "MyApp",
    libraryTarget: "commonjs2"
  },

  externals: [
    {
      "koa": true ,
      "koa-router": true,
      "koa-static": true,
      "koa.io": true,
      "co-views": true,
      "material-ui": true
    }
  ],

  resolve: {
    extensions: ["", ".js", ".jsx"]
  },

  module: {
    preLoaders: [
      { 
        test: /\.json$/,
        loader: 'json-loader'
      },
    ],
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel?blacklist[]=regenerator'
    }]
  }
}

