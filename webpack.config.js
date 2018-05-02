const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/app/index.js',
  output: {
    path: path.resolve('public'),
    publicPath: path.resolve(__dirname, '/public/'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader?modules&camelCase&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]' }
        ]
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
  ]
};
