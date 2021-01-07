import path from path;
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {
  output: {
    path: path.join(__dirname, 'dist', 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exlude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [new MiniCssExtractPlugin.loader, 'css-loader'],
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
}