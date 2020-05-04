<script>
	export let segment;
</script>


<style>
  .wrapper {
      flex: 1 0 auto;
  }
	.header {
    width: 100%;
    position: fixed;
    top: 0;
    height: 3rem;
    background: #FFF;
    display:  flex;
    justify-content: space-between;
  }
  .header-padding 
  {
    display: flex;
    height: 3rem;
    width: 100%;
  }
  .logo { 
    float: left;
    display: flex;
    align-items: center;
    margin-left: .5rem; 
  }
  div.links { 
    float: right;
    display: flex;
    align-items: center;
    text-transform: uppercase;
  }
  .nav-link {
		margin: .75rem;
		background: rgba(205, 205, 210, 0.5);
		border-radius: 2px;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 14px;
		line-height: 13px;
		display: flex;
		align-items: center;
		text-align: center;
	}
	.nav-link > a {
		min-width: 3ch;
		padding: .2rem 1ch;
	}
	a:-webkit-any-link {
		text-decoration: none;
	}
</style>

<nav class='wrapper'>
<div class='header'>
    <div class="logo">
			<a aria-current='{segment === undefined ? "page" : undefined}' href='.'><img src='/NASA_logo.svg' alt="nasa logo"/></a>
    </div>
    <div class="links">
      <div class="nav-link">
				<a aria-current='{segment === "pic-of-the-day" ? "page" : undefined}' href='pic-of-the-day'>potd</a>
			</div>
      <div class="nav-link">
				<a aria-current='{segment === "sf" ? "page" : undefined}' href='sf'>sf</a>
			</div>
      <div class="nav-link">
				<a aria-current='{segment === "where-iss" ? "page" : undefined}' href='where-iss'>where-iss</a>
			</div>
			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
					the blog data when we hover over the link or tap it on a touchscreen -->
			<div class="nav-link">
				<a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a>
			</div>
    </div>
</div>
<div class="header-padding"></div>
</nav>