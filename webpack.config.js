const path = require('path');

module.exports = (env, argv) => {
  const config = {
    entry: [argv.mode === 'development' ? './demo/index' : './src/index'],
    output: {
      library: 'antdIconClassifier',
      libraryExport: 'default',
      libraryTarget: 'umd',
    },
    resolve: {
      alias: {
        '@ali/antd-icon-classifier': path.resolve(__dirname, 'src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },
  };

  return config;
};
