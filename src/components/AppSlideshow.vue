<template>
  <div class="slideshow-container">
    <transition name="slide" mode="out-in">
      <div class="slides" :key="currentSlide">
        <img :src="currentSlideData.image" :alt="currentSlideData.caption" class="slide-image">
        <div class="caption">{{ currentSlideData.caption }}</div>
      </div>
    </transition>

    <!-- 左右切換按鈕 -->
    <a class="prev" @click="prevSlide">&#10094;</a>
    <a class="next" @click="nextSlide">&#10095;</a>

    <!-- 幻燈片切換的圓點指示器 -->
    <div class="dots-container">
      <span 
        v-for="(slide, index) in slides" 
        :key="index" 
        class="dot" 
        :class="{ active: currentSlide === index }" 
        @click="goToSlide(index)">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSlideshow',
  data() {
    return {
      currentSlide: 0,
      slides: [
        { image: '/images/S__22667434.jpg', caption: '2024新北嚴選 🏆恭喜石碇共7個店家獲獎🏆' },
        { image: '/images/461179406_969423578321485_7823506902429604030_n.jpg', caption: '深坑x石碇-深情石刻 #2024商圈嬉遊季 ' },
        { image: '/images/456657572_500550832601580_1314269210867125923_n.jpg', caption: '2024山城走走｜9/28秋季社區走讀小旅行培力' },
        { image: '/images/459837696_963431302254046_90948405633752073_n.jpg', caption: '113年暑期娛樂營活動花絮 113.08.05 第一天' }
      ],
      intervalId: null // 用來儲存定時器的ID
    };
  },
  computed: {
    currentSlideData() {
      // 返回當前顯示的幻燈片數據
      return this.slides[this.currentSlide];
    }
  },
  methods: {
    nextSlide() {
      // 切換到下一張幻燈片
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      // 切換到上一張幻燈片
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(index) {
      // 點擊圓點時切換到指定幻燈片
      this.currentSlide = index;
    },
    startSlideshow() {
      // 每隔3秒切換到下一張幻燈片
      this.intervalId = setInterval(this.nextSlide, 5000);
    },
    stopSlideshow() {
      // 停止自動輪播
      clearInterval(this.intervalId);
    }
  },
  mounted() {
    this.startSlideshow(); // 當元件掛載時啟動自動輪播
  },
  beforeUnmount() {
    this.stopSlideshow(); // 當元件卸載前停止自動輪播
  }
};
</script>
<style scoped src="@/assets/css/appSlider.css"></style>