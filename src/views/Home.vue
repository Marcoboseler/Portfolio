<style>
/* ANIMATED TEXT */
.animated-content {
  margin-left: 4rem;
  transform: translateX(3%);
  margin-top: 3rem;
  height: 216px;
  line-height: 54px;
  font-size: 45px;
  overflow:hidden;
}

.animated-container {
  overflow: hidden;
  height: 54px;
}

.animated-list {

  /* padding-left: 220px; */
  list-style: none;
  animation-name: change;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}

@keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}}
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
  height: 110vh;

  opacity: 0.95;
  transform: translate(9%, -20%) rotate(7deg);
  border-radius: 3px;
  
  z-index: -1;
  overflow: hidden;
}

.title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 4.2rem;
}

.text {
  line-height: 1.2;
  letter-spacing: 0.05rem;
  margin-left: 4rem;
}

.text-intro {
  font-size: 1.563rem;
  /* transform: translateX(-1%); */
  font-weight: 300;
  letter-spacing: normal;
  font-family: 'kanit', sans-serif;
  margin-top: 5rem;
}

.text-name {
 font-size: 3.052rem;
 font-weight: 700;
 transform: translateX(1.5%);
 margin-top: 0.4rem;
 display: block;
}

.text-passion {
  font-size: 1.563rem;
  transform: translateX(3%);
  letter-spacing: normal;

}

.title svg {
  position: absolute;
  bottom: 4rem;
  right: 50%;
  transform: translateX(50%);
}

</style>

LEFT OFF: Class asignments, implement https://codepen.io/yoannhel/pen/DMzjog, change all font sizes

<template>


<section class="grid grid-rows-[100vh_100vh_100vh_100vh]">

  <div class="title relative">
    <p class="text text-intro block">Hey there...</p>

    <p class="text text-name">My name is Marco Louis </p>


    <!-- <p class="text text-about">I am a </p> -->



    <div class="animated-content">
      <div class="animated-container">
        
        <ul class="animated-list">
          <li class="animated-item">
            Web Developer
          </li>
          <li class="animated-item">
            Adventurer
          </li>
          <li class="animated-item">
            Polyglot
          </li>
          <li class="animated-item">
            Gamer
          </li>
        </ul>
      </div>  
    </div>
    
      <!-- <span id="animatedText">Web developer</span></p> -->
    
    
    <p class="text text-passion">with a passion for pixels and innovation</p>
   
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <path d="M 5.21875 6.6875 L 3.78125 8.09375 L 16 20.3125 L 28.21875 8.09375 L 26.78125 6.6875 L 16 17.46875 Z M 5.21875 13.6875 L 3.78125 15.09375 L 16 27.3125 L 28.21875 15.09375 L 26.78125 13.6875 L 16 24.46875 Z"></path>
    </svg>
  </div>

  <div>
    Content
  </div>

  <div>
    Content
  </div>

  <div>
    Content
  </div>

</section>
  

<img src="../assets/images/marco.jpg" id="homeIMG" alt="image not found">
</template>


<script>

export default {
  name: 'Home'
}

</script>
