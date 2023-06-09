const path = require('path')
// HMR和打包的进度条美化
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// 将文件复制到另一个文件中
const CopyPlugin = require('copy-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

function commonStyleLoader(...args) {
	return [
		isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
		'css-loader',
		{
			loader: 'postcss-loader',
			options: {
				postcssOptions: {
					plugins: [['postcss-preset-env']],
				},
			},
		},
		...args,
	].filter(Boolean)
}

module.exports = {
	entry: './src/main.js',
	output: {
		path: isProduction ? path.join(__dirname, '../dist') : undefined,
		filename: 'static/js/[name].js',
		chunkFilename: 'static/js/[name].chunk.js',
		assetModuleFilename: 'assets/[hash:10][ext][query]',
		clean: true,
	},
	module: {
		rules: [
			// 处理 css / postcss-loaders（处理css样式的兼容性）
			{
				test: /\.css$/i,
				use: commonStyleLoader(),
			},
			// 处理 less
			{
				test: /\.less$/i,
				use: commonStyleLoader('less-loader'),
			},
			// 处理 sass/scss
			{
				test: /\.s[ac]ss$/i,
				use: commonStyleLoader('sass-loader'),
			},
			// 处理 stylus
			{
				test: /\.styl$/i,
				use: commonStyleLoader('stylus-loader'),
			},
			// 处理 图片
			{
				test: /\.(png|jpe?g|gif|svg|webp)$/i,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						// 大于 10kb的图片转成 base64
						maxSize: 10 * 1024, // 10kb
					},
				},
			},
			// 处理其他资源
			{
				test: /\.(woff2?|ttf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.js$/,
				loader: './loaders/clear-log-loader',
			},
			// 处理 js / babel
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						cacheDirectory: true, // 开启babel缓存
						cacheCompression: false, // 关闭缓存的压缩
					},
				},
			},
			// 处理 vue-loaders
			{
				test: /\.vue$/,
				use: ['vue-loader'],
			},
		],
	},
	optimization: {
		// 代码分割多个chunk
		splitChunks: {
			chunks: 'all',
		},
		runtimeChunk: {
			name: (entrypoint) => `runtime-${entrypoint.name}.js`,
		},
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
	plugins: [
		new VueLoaderPlugin(),
		new ESLintPlugin({
			context: path.join(__dirname, '../src'),
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '../public/index.html'),
		}),
		isProduction &&
			new MiniCssExtractPlugin({
				filename: 'static/css/[name].css',
			}),
		isProduction &&
			new CopyPlugin({
				patterns: [
					{
						from: path.join(__dirname, '../public'),
						to: path.join(__dirname, '../dist'),
						globOptions: {
							// 忽略 index.html 文件
							ignore: ['**/index.html'],
						},
					},
				],
			}),
		new WebpackBar(),
	].filter(Boolean),
	mode: isProduction ? 'production' : 'development',
	// 自动补全文件拓展名
	resolve: {
		extensions: ['.vue', '.js', '.json'],
		// 路径别名
		alias: {
			'@': path.join(__dirname, '../src'),
		},
	},
	devServer: {
		host: 'localhost',
		port: 8080,
		// 解决 history 模式下刷新 404 问题
		historyApiFallback: {
			index: '/index.html',
		},
	},
	devtool: isProduction ? 'source-map' : 'cheap-source-map',
}
