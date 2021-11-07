const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'renderer')
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      // 主进程入口
      mainProcessFile: 'main/index.js',
      mainProcessWatch: ['main/**/*.js'],
      // 渲染进场入口
      rendererProcessFile: 'renderer/index.js',
    }
  }
}