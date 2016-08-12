module.exports = {
  entry: {
    app: './src/app.js',
  },

  output: {
    filename: '/bin/[name].js',
    library: '[name]',
    path: __dirname,
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style!css',
      },
    ],
  },

  devtool: 'source-map',
};
