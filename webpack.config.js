const path = require('path');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isProd = process.env.MODE === 'production';
const isIE = process.env.IE;
const isDevServer = process.env.SERVE;

const plugins = [
	new CaseSensitivePathsPlugin(),
	new BrowserSyncPlugin(
		{
			host: 'localhost',
			port: 3000,
			proxy: 'http://localhost:3100/',
            files: ['./app/**/*.pug'],
			browser: isIE ? 'iexplore' : 'chrome',
		},
		{
			reload: false,
		}
	),
	new HTMLWebpackPlugin({
		filename: 'index.html',
		template: 'views/pages/home.pug',
		chunks: ['main'],
		favicon: 'img/favicon.ico',
	}),
	new HTMLWebpackPlugin({
		filename: 'about.html',
		template: 'views/pages/about.pug',
		chunks: ['about'],
		favicon: 'img/favicon.ico',
	}),
	new HTMLWebpackPlugin({
		filename: 'services.html',
		template: 'views/pages/services.pug',
		chunks: ['services'],
		favicon: 'img/favicon.ico',
	}),
	new MiniCssExtractPlugin({
		filename: isProd ? 'css/[name].[contenthash].css' : 'css/[name].css',
	}),
	new CleanWebpackPlugin(),
];

if (!isProd) {
	plugins.push(new webpack.HotModuleReplacementPlugin());
}

const supportIE = {
	test: /\.m?js$/i,
	exclude: /(node_modules|bower_components)/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: [
				[
					'@babel/preset-env', {
						debug: !isProd,
						corejs: 3,
						useBuiltIns: 'usage',
					}
				]
			]
		}
	}
};

module.exports = {
	mode: isProd ? 'production' : 'development',
	devtool: isProd ? false : 'eval-source-map',
	target: isProd ? 'browserslist' : 'web',
	context: path.resolve(__dirname, 'app'),
	entry: {
		main: ['./js/home.js', './js/common.js'],
		about: ['./js/about.js', './js/common.js'],
		services: ['./js/services.js', './js/common.js'],
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'app/'),
			'@js': path.resolve(__dirname, 'app/js/'),
			'@css': path.resolve(__dirname, 'app/css/'),
			'@img': path.resolve(__dirname, 'app/img/'),
		},
	},
	output: {
		filename: 'js/[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: isDevServer ? '/' : './',
	},
	devServer: {
		port: 3100,
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	plugins,
	module: {
		rules: [
			isIE ? supportIE : {},
			{
				test: /\.html$/,
				use: [
					'html-loader',
				],
			},
			{
				test: /\.pug$/,
				use: [
					{
						loader: 'pug-loader',
						options: {
							root: path.resolve(__dirname, 'app/views/')
						}
					},
				],
			},
			{
				test: /\.(svg|png|jp(e?)g|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'img',
					}
				},
			},
			{
				test: /\.(ttf|eot|woff(2?))(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'fonts',
					}
				},
			},
			{
				test: /\.s(a|c)ss$/i,
				use: [
					isProd ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.css$/i,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: (resourcePath, context) => `${path.relative(path.dirname(resourcePath), context)}/`,
						},
					},
					'css-loader',
					'postcss-loader',
				],
			},
		],
	},
};
