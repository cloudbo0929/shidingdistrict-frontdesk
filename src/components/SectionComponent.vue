<template>
  <section :id="section.id" class="section">
    <div class="section-header">
      <img :src="mascotImage" alt="Icon" />
      <h2>{{ section.title }}</h2>
    </div>
    <div class="section-area">
      <div class="section-content">
        <p v-for="(paragraph, index) in section.content" :key="index">{{ paragraph }}</p>
      </div>
      <img :src="section.image" alt="Temple" />
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionComponent",
  props: {
    section: Object,
    mascotImage: String,
  },
};
</script>

<style scoped src="@/assets/css/appIntroduction.css"></style>
