const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vu3-cli-api/'
    : '/',
  transpileDependencies: true
})
