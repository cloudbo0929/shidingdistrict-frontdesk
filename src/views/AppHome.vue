<template>
  <div>
    <AppSlideshow />
    <main class="content">
      <AppNewsGallery />
      <AppNewsAnnouncement />
    </main>
  </div>
</template>
  
  <script>
import AppSlideshow from '@/components/AppSlideshow.vue';
import AppNewsGallery from '@/components/AppNewsGallery.vue';
import AppNewsAnnouncement from '@/components/AppNewsAnnouncement.vue';

export default {
  components: {
    AppSlideshow,
    AppNewsGallery,
    AppNewsAnnouncement
  }
};
</script>
  