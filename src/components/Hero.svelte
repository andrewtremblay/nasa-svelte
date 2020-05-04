
<script>
  export let potd;
</script>

<style>
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
  .container {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-bottom: 2rem;
  }
	img {
		display: flex;
		width: 100%;
	}
	.text-container {
    height: 7rem;
    width: 100%;
    flex-direction: row-reverse;
    margin-top: -140px;
    display: flex;
    color: white;
    z-index: 100;
  }
  .text {
    flex-direction: row;
    background-color: rgba(0, 0, 0, .78);
    width: 248px;
    height: 140px;
  }
	.title { 		
		font-family: 'Roboto Slab';
    font-weight: bold;
    font-style: normal;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
		padding-top: 1em;
		padding-bottom: .5em;
		padding-left: 3ch;
    padding-right: 3ch;
    max-height: 4rem;    
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
	}
	.desc {
		max-height: 3em;
		font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
		margin-left: 3ch;
    margin-right: 2ch;
    max-height: 5rem;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
  a { 
    color: #47B6F4;
    float: right;
    padding-right: 2ch;
    margin-top: -.5rem;
  }

  /* If the screen size is 600px wide or less, hide the element */
  @media only screen and (max-width: 600px) {
    .text {
      width: 100%;
    }
    h1 {
      width: 100%;
      text-align: center;
    }
  }
</style>

<div class='container'>
	<h1>Pic of the Day</h1>
  <img alt={potd.copyright} src={potd.url}/> <!-- potd.hdurl -->
  <div class='text-container'>
    <div  class='text'>
      <div class='title'>{potd.title}</div>
      <div>
       <p class='desc' id="desc">{potd.explanation}</p>
       <a href="pic-of-the-day">(read more)</a>
     </div>
    </div>
  </div>
</div>