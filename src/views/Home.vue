<style>
#homeIMG {
  position: absolute;
  top: 0;
  right: 0;
  
  width: auto;
  height: 102vh;

  opacity: 0.95;
  transform: translate(9%, -4%) rotate(7deg);
  
  overflow: hidden;
}


.title {
font-family: 'Roboto', sans-serif;

  font-weight: 700;
  font-size: 64px;
}




@keyframes opacity {
  0%, 100% {opacity:0;}
  50% {opacity:1;}
}

@keyframes change {
  0%, 12.66%, 100% {transform:translate3d(0,0,0);}
  16.66%, 29.32% {transform:translate3d(0,-25%,0);}
  33.32%,45.98% {transform:translate3d(0,-50%,0);}
  49.98%,62.64% {transform:translate3d(0,-75%,0);}
  66.64%,79.3% {transform:translate3d(0,-50%,0);}
  83.3%,95.96% {transform:translate3d(0,-25%,0);}
}


</style>

<template>


<section class="grid grid-rows-[100vh_100vh_100vh_100vh]">

  <div class="title pt-40">
    Hey there

    <br>
    My name is Marco, <br>
    Louis Böseler <br><br>
    I am a <b>Web developer</b> <br>
    With a passion for pixels and innovation
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
  

<img src="../assets/images/maldves.jpg" id="homeIMG" alt="image not found">
</template>


<script>

export default {
  name: 'Home'
}

</script>
