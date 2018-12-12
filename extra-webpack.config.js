console.log(__dirname + '/src/app/elm');

module.exports = {
  module: {
    rules: [{
      test: /\.elm$/,
      exclude: [/elm-stuff/, /node_modules/],
      loader: 'elm-webpack-loader',
      options: {
        cwd: __dirname + '/src/app/elm'
      },
    }]
  },
  resolve: {
    extensions: ['.elm']
  },
};