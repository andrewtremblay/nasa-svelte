<script context="module">
	import { picOfTheDay } from '../api'
	export async function preload({ params, query }) {
		const res = await picOfTheDay(this);
		const data = await res.json();

		if (res.status === 200) {
			return { potd: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
import Hero from '../components/Hero.svelte';
import Carousel from '../components/Carousel.svelte';
import WhereIsISS from '../components/WhereIsISS.svelte';
import Footer from '../components/Footer.svelte';

export let potd;
</script>

<style>
div {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
}
</style>

<svelte:head>
	<title>NASA</title>
</svelte:head>

<div >
<Hero {potd}></Hero>
<Carousel ></Carousel>
<WhereIsISS ></WhereIsISS>
<Footer></Footer>
</div>
