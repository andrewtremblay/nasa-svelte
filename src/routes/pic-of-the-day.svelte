<script context="module">
	import { picOfTheDay } from '../api'
	export async function preload({ params, query }) {
		const res = await picOfTheDay(this) // .fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { potd: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let potd;
</script>

<style>
	div {
		background-color: black;
		height: 100%;
	}
	h1 {
		width: 13ch;
		padding-left: 1ch;
		padding-right: 1ch;
		padding-top: .5em;
		padding-bottom: .5em;
		font-family: 'Roboto Condensed';
		color: white;
		background-color: rgba(0, 0, 0, .75);
		position: absolute;
		top: 0;
		left: 0;
		text-transform: uppercase;
		z-index: 100;
	}
	.image-and-text {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	img {
		display: flex;
		width: 100%;
		flex-shrink: 0;
	}
	.text {
		flex-shrink: 100;
		flex-direction: column;
		display: flex;
		color: white;
		background-color: black;
	}
	.title { 		
		flex-shrink: 100;
		font-family: 'Roboto Slab';
		font-weight: bold;
		padding-top: 1em;
		padding-bottom: .5em;
		padding-left: 3ch;
		padding-right: 3ch;
	}
	.desc {
		flex-shrink: 10;
		font-family: 'Roboto';
		padding-left: 3ch;
		padding-right: 2ch;
	}
</style>

<svelte:head>
	<title>Pic of the Day</title>
</svelte:head>

<div>
	<h1>Pic of the Day</h1>
	<div class='image-and-text'>
	  {#if potd.media_type === 'image'}
    	<img class="" alt={potd.copyright} src={potd.url}/>
			<div class='text'>
				<div class='title'>{potd.title}</div>
				<div class='desc'>{potd.explanation}</div>
			</div>
		{:else}
			<img alt={potd.media_type} src={'placeholder.jpg'}/>
			<div class='text'>
				<div class='title'>NOT AN IMAGE ({potd.media_type} instead)</div>
				<div class='desc'>{potd.url}</div>
			</div>
		{/if}
	</div>
</div>
