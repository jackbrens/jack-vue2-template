const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
function commonStyleLoader(...args) {
  return [
    "style-loaders",
    "css-loaders",
    {
      loader: "postcss-loaders",
      options: {
        postcssOptions: {
          plugins: [
            [
              'postcss-preset-env'
            ]
          ]
        }
      }
    },
    ...args
  ].filter(Boolean)
}

module.exports = {
  entry: './src/main.js',
  output: {
    // path: path.join(__dirname, '../dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    assetModuleFilename: 'assets/[hash:10][ext][query]',
  },
  module: {
    rules: [
      // 处理 css / postcss-loaders（处理css样式的兼容性）
      {
        test: /\.css$/i,
        use: commonStyleLoader()
      },
      // 处理 less
      {
        test: /\.less$/i,
        use: commonStyleLoader("less-loaders")
      },
      // 处理 sass/scss
      {
        test: /\.s[ac]ss$/i,
        use: commonStyleLoader("sass-loaders")
      },
      // 处理 stylus
      {
        test: /\.styl$/i,
        use: commonStyleLoader("stylus-loaders")
      },
      // 处理 图片
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            // 大于 10kb的图片转成 base64
            maxSize: 10 * 1024 // 10kb
          }
        }
      },
      // 处理其他资源
      {
        test: /\.(woff2?|ttf)$/i,
        type: 'asset/resource',

      },
      // 处理 js / babel
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loaders',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true, // 开启babel缓存
            cacheCompression: false // 关闭缓存的压缩
          }
        }
      },
      // 处理 vue-loaders
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      }
    ]
  },
  optimization: {
    // 代码分割多个chunk
    splitChunks: {
      chunks: "all"
    },
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}.js`
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new ESLintPlugin({
      context: path.join(__dirname, '../src')
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../public/index.html')
    })
  ],
  mode: 'development',
  // 自动补全文件拓展名
  resolve: {
    extensions: [".vue", ".js", ".json"]
  },
  devServer: {
    host: 'localhost',
    port: 8080,

    // 解决 history 模式下刷新 404 问题
    historyApiFallback: {
      index: '/index.html'
    }
  },
  devtool: 'cheap-source-map',
}