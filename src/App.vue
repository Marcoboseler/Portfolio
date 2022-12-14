<style>

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>

<template>
  <div class="main grid grid-cols-[130px_1fr]">
    <SidebarVue> <!-- Left Sidebar -->
    </SidebarVue>
    
    <div>&nbsp;
    </div>
    <section class="relative p-8"><!-- Right content column -->
      <router-view />
    </section>
  </div>
</template>

<script setup>
import SidebarVue from './components/Sidebar.vue';

</script>