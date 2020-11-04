import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		startBADateInMs: Date.parse('2020-03-01'),
		endBADate: false
	}
});

export default app;