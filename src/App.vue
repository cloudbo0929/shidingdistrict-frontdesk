<template>
  <div id="app">
    <AppHeader />
    <main class="content">
      <router-view />
    </main>
    <AppFooter />
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
  }
};
</script>
