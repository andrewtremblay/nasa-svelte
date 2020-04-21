<script>
  import { Router, Link, Route } from "svelte-routing";
	import Header from './components/Header.svelte'; 
	import Footer from './components/Footer.svelte'; 
	import Home from './Pages/Home.svelte'; 
	import PicOfTheDay from './Pages/PicOfTheDay.svelte'; 
	import SpaceFacts from './Pages/SpaceFacts.svelte'; 
	import WheresTheISS from './Pages/WheresTheISS.svelte'; 
  export let url = "";
</script>

<Router url="{url}">
	<Header></Header>
  <div class="pageContent">
    <Route path="potd" component="{PicOfTheDay}" />
    <Route path="where-iss" component="{SpaceFacts}" />
    <Route path="space-facts" component="{WheresTheISS}" />
    <Route path="/" component="{Home}" />
  </div>
	<Footer></Footer>
</Router>

<style>
.pageContent {
  flex: 1 0 auto;
}
</style>