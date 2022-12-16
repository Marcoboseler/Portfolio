<style>

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>

<template>
  <div class="main grid grid-cols-[130px_1fr]">
    <sidebarVue> <!-- Left Sidebar -->
    </sidebarVue>
    
    <div>&nbsp;
    </div>
    <section class="relative"><!-- Right content column -->
      <router-view />
    </section>
  </div>
</template>

<script setup>
import sidebarVue from './components/sidebar.vue';

</script>