const path = require('path');

module.exports = {
  entry: ['./client/src/Index.js'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client/dist'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules|packages/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    contentBase: './client/dist',
    host: 'localhost',
    historyApiFallback: true,
    // respond to 404s with index.html
    inline: true,
  },
};
