<style lang="scss"> 
/* ANIMATED BUTTON */
.btn-flip{
	color: #fff; opacity: 1; outline: 0;
  font-family: 'Jura'; letter-spacing: 1px; line-height: 40px; 
	text-align: center; text-decoration: none; text-transform: uppercase;

	position: relative; display: inline-block;
	margin-left: 4.5rem; margin-top: 4rem;

  @keyframes fadein {
    from { opacity: 0 }
    to   { opacity: 1 }
  } 
  animation: fadein 0.8s;

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
		position: absolute; top: 0; left: 0;
		display: block; width: 100%;
    color: #323237; background: #adadaf; opacity: 0;
    transform: translateY(-50%) rotateX(90deg);
		transition: 0.5s;
		content: attr(data-back);
	}

	&:before{
		position: relative; top: 0; left: 0;
		display: block; padding: 0 30px;
		color: #adadaf; background: #323237; opacity: 1; line-height: 40px;
		transform: translateY(0) rotateX(0);
		transition: 0.5s;
		content: attr(data-front);
	}
}
/* ANIMATED TEXT */
.wrapper {
  display: flex; align-items: baseline;
  margin-top: 2rem; margin-left: 4.5rem;
  font-size: 2.441rem; font-weight: 600;
  color: #fff;

  & p {
    font-weight: 400; letter-spacing: -0.1rem; color: #323237;
  }
}

.animated-container {
  display: inline-block; 
  height: 3rem; line-height: 3rem;
  padding-left: 1rem;
  overflow:hidden;
}

.animated-list {
  height: 12rem;
  list-style: none;
  animation-name: change; animation-duration: 23.8s; 
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
  position: absolute; top: 0; right: 0; overflow: hidden;
  width: auto; height: 125vh; z-index: -1; 
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 3px; opacity: 0.98;
  transform: translate(-20%, -30%) rotate(7deg);
}

.sub-container { 
  margin-top: 2rem;
}
.text {
  margin-left: 4.5rem;
}

.text-hey {
  font-family: 'Kanit'; font-size: 1.563rem; font-weight: 300; 
  letter-spacing: normal;
  margin-top: 4.5rem;
  transform: translateX(-2%);
}

.text-name {
 font-size: 4rem; font-weight: 600;
 line-height: 0.95; letter-spacing: -0.15rem;
 margin-top: 0.9rem;
}

.text-passion {
  font-size: 1.25rem; font-weight: 400;
  line-height: 0.95; letter-spacing: -0.02rem;
  margin-left: 4.5rem;
}

.title svg {
  position: absolute; bottom: 3rem; right: 50%;
  transform: translateX(50%);
}



.parallax {
  display: flex; align-items: center; justify-content: center;
  position: relative;
  font-family: 'Montserrat'; line-height: 2; letter-spacing: 2;

  
  &.story {                    //Header segment   
    height: 30rem;
            

    & p {
      transform: translateX(-90%);
      font-size: 4rem; font-weight: 800;
    }
  }

  &.intro {                    //Intro text segment
    height: 30rem;      
    background-color:cornsilk ;

    & p {
      width: 65%;
      font-size: 1.25rem; font-weight: 500; 
    }
  }

  &.college {                 //College image segment
    height: 20rem;
    
    &::before {
      content: '';
      position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: -1; 
      background-image: url("../assets/images/college.jpg");
      background-size:cover; opacity: 0.65;
      background-attachment: fixed; background-position: center;
      background-repeat: no-repeat; 
    }
  }

  &.fire {                    //Internship segment
    height: 30rem;
    background-color:cornsilk ;

    & p {
      width: 65%;
      font-size: 1.25rem; font-weight: 500; 
    }
  }

  &.deepdive {                 //Deepdive segment
    height: 100vh;

    & p {
      width: 50%;
      font-size: 1.25rem; font-weight: 500; 
    }

    &::before {
      content: '';
      position: absolute; top: 0; left: 0; bottom: 0; right: 0; z-index: -1; 
      background-image: url("../assets/images/maldives.jpg");
      background-size:cover; opacity: 0.65;
      background-attachment: fixed; background-position: center;
      background-repeat: no-repeat; 
    }
  }

  &.graduate {
    height: 30rem;
    background-color: cornsilk;

    & p {
      width: 70%;
      font-size: 1.25rem; font-weight: 500; 
    }
  }
}


</style>


<template>
<section class="grid grid-rows-[100vh_1fr_100vh_100vh]">    <!------ LANDING PAGE ------->
  <div class="title relative p-8">
    <img src="../assets/images/marfdco.jpg" id="homeIMG" alt="image not found">
    <p class="text text-hey">Hey there, I'm</p>
    <p class="text text-name">Marco Louis</p>
    <p class="text text-name">Böseler</p>

    <div class="wrapper">
      <p class="inline-block">Also a</p>
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
  <div class="sub-container">            

    <div class="parallax story">
      <p>My story</p> 
      MAKE THIS STICKY TO LEFT TOP AND ALIGN TEXT RIGHT OF IT, KEEP IT WHEN SCROLLING
    </div>


    <div class="parallax intro">

      <p>
        After recently obtaining my college degree in software 
        development, I wanted a personal project to really indulge
        myself into custom web design and fortify my skills as I discovered  
        this passion of mine.

      </p>

    </div>


    <div class="parallax college"></div>


    <div class="parallax fire">

      <p>
        During my first internship I was introduced to
        the corporate world of software engineering. I followed along and 
        wrote code in various languages, prominently in Java. But I felt 
        something was missing, like there was a fire in me still, which 
        wasn't ignited just yet.

      </p>

    </div>

    <div class="parallax deepdive">

      <p>
        That's when I dove deep into web development,
        where I found the ability to express my creative thoughts like never before.

      </p>

    </div>


    <div class="parallax graduate">

      <p>
        And so, I decided to do my graduating internship at a local business that operates
        a webshop through which they sell electronic spare parts to all over the world.
        Here I was properly introduced to web-app development and started this exciting
        journey as a front-end developer.
      </p>

    </div>
  
  </div>



  <div class="sub-container">
    
    SKILLS

  </div>





  <div class="sub-container" id="contact">
    Content
  </div>

</section>


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
