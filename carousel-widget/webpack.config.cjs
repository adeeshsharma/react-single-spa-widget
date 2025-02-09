const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'parcel.js',
    path: path.resolve(process.cwd(), 'dist'),
    library: 'parcel',
    libraryTarget: 'umd', // ✅ Must be "umd"
    globalObject: 'window',
    publicPath: '/',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Ensures both .js and .jsx files are processed
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
