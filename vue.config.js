module.exports = {
  runtimeCompiler: true, 
  devServer: {
    proxy: 'http://localhost:3030'
    // {
    //   '/api': {
    //     target: 'http://localhost:3030',
    //     changeOrigin: true,
    //   },
    //   '/auth': {
    //     target: 'http://localhost:3030',
    //     changeOrigin: true,
    //   }
    // }
  }
}