'use strict';

// Rollup plugins
/*import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import uglify from "rollup-plugin-uglify";
import eslint from "rollup-plugin-eslint";

const env = process.env.NODE_ENV || 'development';
let uglifyScript = {};
let ext = '';

if (env === 'production') {
    uglifyScript = uglify({
        compress: true
    });

    ext = '.min';
}

module.exports = {
    input: 'js/src/index.js',
    output: {
        name: 'Workwell',
        file: 'dist/js/workwell' + ext + '.js',
        format: 'umd',
        sourcemap: true
    },
    plugins: [
        uglifyScript,
        postcss({
            extensions: ['.css'],
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true,
        }),
        eslint({}),
        commonjs(),
        babel({
            exclude: '/node_modules/**',
        })
    ]
};*/

import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import filesize from "rollup-plugin-filesize";

const env = process.env.NODE_ENV;
const pkg = require("./package.json");

export default {
    input: "js/src/index.js",
    output: {
        file: {
            es: pkg.module,
            cjs: pkg.main
        }[env],
        format: env
    },
    plugins: [
        postcss({
            extensions: ['.css'],
        }),
        resolve(),
        babel({
            exclude: "node_modules/**",
            plugins: ["external-helpers"],
            // if external helpers true then use global babel object
            externalHelpers: true
        }),
        commonjs(),
        filesize()
    ]
};