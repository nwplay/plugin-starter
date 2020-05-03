import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';

export default [{
    input: 'src/main.ts',
    output: {
        file: './dist/plugin.nwp',
        format: 'umd',
        name: 'nwplay-plugin-starter',
        sourcemap: false
    },
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            customResolveOptions: {
                moduleDirectory: 'node_modules',
            }
        }),
        typescript({
            typescript: require('typescript')
        }),
        commonjs()
    ],
    external: [
        '@nwplay/core'
    ]
}]
