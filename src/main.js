import App from './App.html';
import wrap from './wrap.js';

const app = new App({
	target: document.body,
	data: {
		name: 'world'
	}
});

const wrapper = wrap( app );

wrapper.name = 'everybody';
window.wrapper = wrapper;