<script>
import RouterLink from './RouterLink.svelte';
</script>

<header>
I'm header
<RouterLink page={{path: '/home', name: 'Home'}} />
<RouterLink page={{path: '/potd', name: 'POTD'}} />
</header>

<style>
	
</style>