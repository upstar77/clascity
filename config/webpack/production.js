// If NODE_ENV is undefined, eslint won't be able to find the config file
// And throw the following error:
// Resolve error: Cannot read property 'public_output_path' of undefined  import/extensions"
// ./node_modules/@rails/webpacker/package/config.js will look for confing[undefined]
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production';
}

const merge = require('webpack-merge');
const environment = require('./environment');
const customConfig = require('./custom');

module.exports = merge(environment.toWebpackConfig(), customConfig);
