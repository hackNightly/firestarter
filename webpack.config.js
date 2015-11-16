var precss = require('precss');

module.exports = {
  entry: `${__dirname}/client/index.js`,
  output: {
    path: `${__dirname}/client`
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
        }
      }
    ]
  },
  postcss: function() {
    return [precss];
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};
