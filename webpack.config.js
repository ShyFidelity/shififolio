

  const config = {
    entry: './src/index.js',


    test: /\.(png|jpe?g|gif|svg)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  
  };

  
  module.exports = config;