<style lang="scss">
/* ANIMATED BUTTON */

$speed: 0.5s;

.btn-flip{
	opacity: 1;
	outline: 0;
	color: #fff;
	line-height: 40px;
	position: relative;
	text-align: center;
	letter-spacing: 1px;
	display: inline-block;
	text-decoration: none;
	font-family: 'Jura';
	text-transform: uppercase;
	margin-left: 4.5rem;
  margin-top: 4rem;
  animation: fadein 0.8s;

  @keyframes fadein {
    from { opacity: 0 }
    to   { opacity: 1 }
  }

	&:hover{
		
		&:after{
			opacity: 1;
			transform: translateY(0) rotateX(0);
		}
		
		&:before{
			opacity: 0;
			transform: translateY(50%) rotateX(90deg);
		}
	}
	
	&:after{
		top: 0;
		left: 0;
		opacity: 0;
		width: 100%;
		color: #323237;
		display: block;
		transition: $speed;
		position: absolute;
		background: #adadaf;
		content: attr(data-back);
		transform: translateY(-50%) rotateX(90deg);
	}

	&:before{
		top: 0;
		left: 0;
		opacity: 1;
		color: #adadaf;
		display: block;
		padding: 0 30px;
		line-height: 40px;
		transition: $speed;
		position: relative;
		background: #323237;
		content: attr(data-front);
		transform: translateY(0) rotateX(0);
	}
}
/* ANIMATED TEXT */
.wrapper {
  display: flex;
  margin-top: 2rem;
  margin-left: 4.5rem;
  font-size: 2.441rem;
  align-items: baseline;
}

.animated-container {
  display: inline-block;
  padding-left: 1rem;
  height: 12rem;
  line-height: 3rem;
  overflow:hidden;
  overflow: hidden;
  height: 3rem;
}

.animated-list {
  height: 12rem;
  list-style: none;
  animation-name: change;
  animation-duration: 23.8s;
  animation-iteration-count: infinite;
}

@keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}}

/* Main Elements */
#homeIMG {
  position: absolute;
  top: 0;
  right: 0;
  width: auto;
  height: 125vh;
  z-index: -1;
  overflow: hidden;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  opacity: 0.98;
  transform: translate(-20%, -30%) rotate(7deg);
  border-radius: 3px;
}

.sub-container { /* Styling for each scrollable section */
  margin-top: 7rem;
}

.text {
  margin-left: 4.5rem;
}

.text-hey {
  font-family: 'kanit', sans-serif;
  font-size: 1.563rem;
  font-weight: 300;
  letter-spacing: normal;
  transform: translateX(-2%);
  margin-top: 4.5rem;
}

.text-name {
 font-size: 4rem;
 font-weight: 700;
 margin-top: 0.9rem;
 line-height: 0.95;
 letter-spacing: -0.15rem;
}

.text-passion {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 0.95;
  letter-spacing: -0.02rem;
  margin-left: 4.5rem;
}

.title svg {
  position: absolute;
  bottom: 3rem;
  right: 50%;
  transform: translateX(50%);
}


</style>


<template>


<section class="grid grid-rows-[100vh_100vh_100vh_100vh]">    <!------ LANDING PAGE ------->
  <div class="title relative">
    <p class="text text-hey">Hey there, I am</p>
    <p class="text text-name">Marco Louis</p>
    <p class="text text-name">Böseler</p>

    <div class="wrapper">
      <p class="inline-block">I'm a</p>
        <div class="animated-container">
          <ul class="animated-list">
            <li class="animated-item">
              Web Developer
            </li>
            <li class="animated-item">
              Wanderer
            </li>
            <li class="animated-item">
              Polyglot
            </li>
            <li class="animated-item">
              Designer
            </li>
          </ul>
        </div>  
    </div>
   
    <p class="text text-passion">with a passion for pixels</p>
    <p class="text text-passion">and innovation</p>
    
    <button @click="scrollBottom()" class="btn-flip" data-back="with me" data-front="Connect"></button>
  
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path d="M 5.21875 6.6875 L 3.78125 8.09375 L 16 20.3125 L 28.21875 8.09375 L 26.78125 6.6875 L 16 17.46875 Z M 5.21875 13.6875 L 3.78125 15.09375 L 16 27.3125 L 28.21875 15.09375 L 26.78125 13.6875 L 16 24.46875 Z"></path>
    </svg>
  </div>


                                                  <!------ ABOUT PAGE ------->
  <div id="divv" class="sub-container">            
    ABOUT page
    
    
  
  
  </div>






  <div class="sub-container">
    Content
  </div>

  <div class="sub-container" id="contact">
    Content
  </div>

</section>

<img src="../assets/images/madrco.jpg" id="homeIMG" alt="image not found">
</template>


<script>

export default {
  name: 'Home',

  mounted(){

  },
  methods: {
    scrollBottom() {
      document.querySelector('#contact').scrollIntoView()
    }
  }
}


</script>
