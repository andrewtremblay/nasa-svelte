<script>
	import router, { curRoute } from './router.js';
	import Hero from './components/Hero.svelte'; 
	import Header from './components/Header.svelte'; 
	import Footer from './components/Footer.svelte'; 
	import { onMount } from 'svelte';
	export let endpoint;
	onMount(() => {
		curRoute.set(window.location.pathname);
		if (!history.state) {
			window.history.replaceState({path: window.location.pathname}, '',   window.location.href)
		}
	});
	function handleBackNavigation(event){
  	curRoute.set(event.state.path)
	}	
</script>

<svelte:window on:popstate={handleBackNavigation} />
<main>
	<Header></Header>
	<div id="pageContent">
		<svelte:component this={router[$curRoute]} />
	</div>
	<Footer></Footer>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>