module.exports = {
  entry: {
    app: './app/index.js',
  },
  output: {
    path: __dirname + '/public/',
    filename: '[name].js',
    publicPath: '/public/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
};
