const path = require('path');

module.exports = {
  pwa: {
    name: 'AS Portfolio',
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,

  css: {
    sourceMap: true,
  },

  devServer: {
    host: '0.0.0.0',
    port: 2812, // CHANGE YOUR PORT HERE!
    https: false,
    hotOnly: false,
  },

  chainWebpack: config => {
    const inlineLimit = 10000;
    const assetsPath = 'src/assets';
    const stylesPath = 'src/styles';

    config.module
      .rule('fonts')
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
      .use('url-loader')
      .loader('url-loader')
      .options({
        limit: inlineLimit,
        name: path.join(assetsPath, 'fonts/[name].[hash:8].[ext]'),
      });
    config.merge({ devtool: 'source-map' });
    config.optimization.splitChunks({
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    });
    config.plugin('preload').tap(options => {
      options[0].as = entry => {
        if (/\.css$/.test(entry)) return 'style';
        if (/\.woff$/.test(entry)) return 'font';
        if (/\.png$/.test(entry)) return 'image';
        return 'script';
      };
      options[0].include = 'allAssets';
      // options[0].fileWhitelist: [/\.files/, /\.to/, /\.include/]
      // options[0].fileBlacklist: [/\.files/, /\.to/, /\.exclude/]
      return options;
    });
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: [
            path.join(stylesPath, 'shared.scss'),
            /* 'node_modules/bootstrap/scss/_variables.scss', */
          ],
        })
        .end();
    });
  },
};
