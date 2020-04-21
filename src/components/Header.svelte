<script>
  import { Link } from "svelte-routing";
</script>

<div class='wrapper'>
<div class='header'>
    <div class="logo">
    <Link to="/"><img src='/NASA_logo.svg' alt="nasa logo"/></Link>
    </div>
    <div class="links">
      <div class="nav-link">
        <Link to="potd">potd</Link>
      </div>
      <div class="nav-link">
        <Link to="space-facts">sf</Link>
      </div>
      <div class="nav-link">
        <Link to="where-iss">iss</Link>
      </div>
    </div>
</div>
<div class="header-padding"></div>
</div>

<style>
  .wrapper {
      flex: 1 0 auto;
  }
	.header {
    width: 100%;
    position: fixed;
    top: 0;
    height: 3rem;
    background: #CDCDD2;
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
  }
</style>