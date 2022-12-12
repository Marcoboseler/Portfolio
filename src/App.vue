<style>
    
.logo {
  display: block;
  margin: 0 auto 2rem;
}



</style>



<template>
  <div class="main grid grid-cols-[130px_1fr]">
    <SidebarVue>
    </SidebarVue>
    
    <div>&nbsp;
    </div>
    <section class="relative p-8"><!-- First row -->
      <router-view />
    </section>

    <div>&nbsp;
    </div>
    <section><!-- Second row -->


    </section>

    <div>&nbsp;
    </div><!-- Third row -->
    <section>


    </section>

    <div>&nbsp;
    </div><!-- Fourth row -->
    <section>

      
    </section>


  </div>
  
  

</template>

<script setup>
import SidebarVue from './components/Sidebar.vue';

</script>