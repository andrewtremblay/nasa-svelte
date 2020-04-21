import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		endpoint: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
	}
});

export default app;