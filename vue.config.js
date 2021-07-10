const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
//匹配此 {RegExp} 的资源
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 修改webpack的入口为: examples/main.js
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
                    @import "@/assets/styles/global/_index.scss";
                `
      }
    }
  },
  productionSourceMap: false,
  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'dev') {
      config.plugins.push(
        //去掉打包之后的打印
        new TerserPlugin({
          terserOptions: {
            ecma: undefined,
            warnings: false,
            parse: {},
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log'] // 移除console
            }
          }
        })
      )
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path][base].gz', //目标资源名称
          test: productionGzipExtensions, //匹配文件名
          algorithm: 'gzip',
          minRatio: 0.8, //只有压缩率比这个值小的资源才会被处理
          threshold: 10240, //对超过10k的数据压缩
          deleteOriginalAssets: false //不删除源文件
        })
      )
    }
  },
  chainWebpack: (config) => {
    // 配置别名
    config.resolve.alias.set('@', resolve('src'))

    config.module
      .rule('js')
      .include.add('/packages/')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => {
        // 修改它的选项...
        return options
      })
  }
}
