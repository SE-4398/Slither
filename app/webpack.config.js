var path = require('path');
var pathToPhaser = path.join(__dirname, "/node_modules/phaser/");
var phaser = path.join(pathToPhaser, 'dist/phaser.js');

// const webpack = require('webpack');

module.exports = {
    //game root - path working
    entry: __dirname + '/static/scripts/game.ts',
    output: {
        //path folder containing bundle
        path: __dirname + '/static/dist',
        filename: 'bundle.js',
    },
    // special loaders for typescript and phaser so webpack knows to use them
    module: {
        rules: [
            {test: /\.ts$/, loader: 'ts-loader', exclude: '/node_modules'},
            {test: /phaser\.js$/, loader: 'expose-loader?Phaser'}
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            phaser: phaser
        }
    }
};