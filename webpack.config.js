import webpack from 'webpack';

export default {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    debug: true,
    devtool: 'eval-source-map',
    entry: [
        './src/index.js'
    ],
    target: 'web',
    output: {
        path: __dirname + 'dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
    ],
    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
            {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file'},
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]'},
            {test: /\.ico$/, loader: 'file?name=[name].[ext]'},
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    }
};
