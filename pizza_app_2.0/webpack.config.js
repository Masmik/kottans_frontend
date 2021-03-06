const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const isProduction = process.env.NODE_ENV === 'production';

const SRC_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'public');

const getEntry = () => {
    return SRC_DIR + '/app.js';
};

const getOutput = () => {
    return {
        path: BUILD_DIR,
        filename: 'app.bundle.js',
        pathinfo: true
        // publicPath: 'public'
    }
};

const getModule = () => {
    const RULES = [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: {
                    loader: 'css-loader',
                    options: {
                        minimize: false
                    }
                }
            })
        },
        {
            test: /\.(sass|scss)$/,
            loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        },
        {
            test: /\.(png|gif|jpe?g|svg)$/,
            loader: 'file-loader?name=./../images/[name].[ext]'
        },
        // {
        //     test: /\.(eot|ttf|woff2|woff?)(\?.*$|$)/,
        //     loader: 'file-loader?name=/fonts/[name].[ext]'
        // },
        {
            test: /\.js/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: [['env', {
                            "targets": {
                                "browsers": ["last 2 versions", "ie >= 11"]
                            }
                        }]],
                        // plugins: ['lodash', 'syntax-dynamic-import']
                    }
                }
            ]
        }
    ];

    return {
        rules: RULES
    };

};

const watchOptions = () => {
    return {
        ignored: /node_modules/,
        poll: true
    };
};

const getResolve = () => {
    return {
        extensions: [".js", ".json", ".css"],
        alias: {
            app: SRC_DIR + '/app',
            fonts: SRC_DIR + '/fonts',
            img: SRC_DIR + '/images',
            libs: SRC_DIR + '/libs',
            svg: SRC_DIR + '/svg'
        }
    }
};

const getPlugins = () => {
    return [
        // new webpack.optimize.UglifyJsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: 'css/app.css',
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: true,
            template: SRC_DIR + '/index.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]

};


module.exports = {
    entry: getEntry(),
    output: getOutput(),
    module: getModule(),
    watchOptions: watchOptions(),
    devtool: 'source-map',
    resolve: getResolve(),
    plugins: getPlugins()
};
