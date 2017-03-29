import svelte from 'rollup-plugin-svelte';

export default {
	entry: 'src/main.js',
	dest: 'public/bundle.js',
	format: 'iife',
	plugins: [
		svelte()
	]
};