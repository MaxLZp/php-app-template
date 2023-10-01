const path = require('path');

var config = {
    entry: {
        'main': './resources/js/main.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public/js')
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
    ]
};

module.exports = (env, argv) => {

    if ('production' === argv.mode) {
    } 

    if('development' === argv.mode) {
        config.devtool = 'inline-source-map';
    };

    return config;

}

