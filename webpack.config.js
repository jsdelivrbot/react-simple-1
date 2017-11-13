const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'public/'),
    filename: 'bundle.js'
  },
  entry: [
    './src/index.js'
  ],
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
