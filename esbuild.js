const esbuild = require('esbuild');

const isWatch = process.argv.includes('--watch');
const isProduction = process.argv.includes('--production');

esbuild.build({
  entryPoints: ['./src/extension.ts'],
  bundle: true,
  outfile: './out/extension.js',
  platform: 'node',
  sourcemap: !isProduction,
  //watch: isWatch,
  external: ['vscode'],
  format: 'cjs',
  target: ['es2020'],
}).then(() => {
  console.log('Build complete.');
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
