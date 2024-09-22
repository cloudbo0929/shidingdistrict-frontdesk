<template>
  <div id="app">
    <AppHeader />
    <AppSlideshow />
    <main class="content">
      <AppNewsGallery />
      <AppNewsAnnouncement />
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppSlideshow from './components/AppSlideshow.vue';
import AppNewsGallery from './components/AppNewsGallery.vue';
import AppNewsAnnouncement from './components/AppNewsAnnouncement.vue';
import '@/assets/css/app.css';


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppSlideshow,
    AppNewsGallery,
    AppNewsAnnouncement
  }
};
</script>
