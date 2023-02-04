module.exports = {
  
  // ...
  module: {
    rules: [
      // ...
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          }
        ]
      }, {
        test: /\.mp4$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'videos'
            }
          }
        ]
      }
    ]
  }
};