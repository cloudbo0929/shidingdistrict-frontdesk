<template>
  <div id="app">
    <AppHeader v-if="showHeaderAndFooter" />
    
    <main class="content">
      <router-view />
    </main>
    
    <AppFooter v-if="showHeaderAndFooter" />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import '@/assets/css/app.css';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  computed: {
    showHeaderAndFooter() {
      const hideOnRoutes = ['/SpiritualPage'];
      return !hideOnRoutes.includes(this.$route.path);
    }
  }
};
</script>
