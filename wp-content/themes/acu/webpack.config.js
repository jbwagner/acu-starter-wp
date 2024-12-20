import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname =
    import.meta.dirname ?? dirname(fileURLToPath(import.meta.url));

const webpackConfig = {
    mode: 'development', // Use 'production' for optimized builds
    entry: './src/style.scss',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: false,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader, // Extracts CSS into separate files
                    'css-loader',               // Turns CSS into CommonJS
                    'sass-loader'               // Compiles Sass to CSS
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
    ],
    devtool: 'source-map', // Enables source maps for easier debugging
};

export default webpackConfig;