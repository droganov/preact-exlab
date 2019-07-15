const merge = require('webpack-merge');

const resolve = {
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
};

module.exports = {
  webpack: config => merge(config, resolve),
};
