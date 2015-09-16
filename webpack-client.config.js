module.exports = {
  context: __dirname + "/app",
  entry: {
    client: "./client.js"
  },

  output: {
    path: __dirname + "/public/js",
    filename: "[name].js"
  },

  externals: [
    {
      "socket.io": true
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
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass?sourceMap'
    }]
  }
}

