<template>
  <div class="spiritual-page">
    <!-- 頁面標題 -->
    <h1 class="page-title">試試您的心靈運勢～今天會有什麼啟示？</h1>

    <!-- 御守圖片網格 -->
    <div class="omamori-grid">
      <div
        v-for="(omamori, index) in omamoriImages"
        :key="index"
        class="omamori-item"
        @click="showRandomQuote(index)"
        :class="{ disabled: resultVisible }"
      >
        <img :src="omamori.image" :alt="omamori.name" class="omamori-image" />
      </div>
    </div>

    <!-- 心靈小語顯示區塊，帶有過渡效果 -->
    <transition name="fade-slide" mode="out-in">
      <div v-if="selectedQuote" class="quote-display" ref="quoteSection">
        <h2 :class="categoryColorClass" class="quote-category">《{{ selectedCategory }}》</h2>
        <p class="quote-text">「{{ selectedQuote.text }}」</p>
        <p class="recommended">{{ recommendedText }}</p>
        <div class="button-group">
          <button class="link-btn" @click="openLink(selectedQuote.link)" target="_blank">獲得滿滿能量</button>
          <button class="retry-btn" @click="handleRetry">再來一則小語</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { quotesData } from '@/assets/js/quotesData';

export default {
  data() {
    return {
      omamoriImages: [
        { name: '紅色繡線', image: require('@/assets/images/omamori/red.png') },
        { name: '橙色繩線', image: require('@/assets/images/omamori/orange.png') },
        { name: '黃色繡線', image: require('@/assets/images/omamori/yellow.png') },
        { name: '綠色繡線', image: require('@/assets/images/omamori/green.png') },
        { name: '藍色繡線', image: require('@/assets/images/omamori/blue.png') },
        { name: '紫色繡線', image: require('@/assets/images/omamori/purple.png') },
        { name: '白色繡線', image: require('@/assets/images/omamori/white.png') },
        { name: '黑色繡線', image: require('@/assets/images/omamori/black.png') }
      ],
      quotes: quotesData,
      selectedQuote: null,
      selectedCategory: null,
      recommendedText: '-- 推薦您去....................。',
      resultVisible: false
    };
  },
  computed: {
    categoryColorClass() {
      if (!this.selectedCategory) return '';
      const colorMap = {
        '紅色繡線': 'red-title',
        '橙色繡線': 'orange-title',
        '黃色繡線': 'yellow-title',
        '綠色繡線': 'green-title',
        '藍色繡線': 'blue-title',
        '紫色繡線': 'purple-title',
        '白色繡線': 'white-title',
        '黑色繡線': 'black-title',
      };
      const categoryKey = this.selectedCategory.slice(0, 4);
      return colorMap[categoryKey] || '';
    }
  },
  methods: {
    showRandomQuote(index) {
      this.selectedQuote = null;
      this.selectedCategory = null;

      this.$nextTick(() => {
        const categoryQuotes = this.quotes[index].quotes;
        const randomIndex = Math.floor(Math.random() * categoryQuotes.length);
        this.selectedQuote = categoryQuotes[randomIndex];
        this.selectedCategory = this.quotes[index].category;
        this.resultVisible = true;

        this.$nextTick(() => {
          this.scrollToResult();
        });

        this.triggerAnimation(index);
      });
    },
    triggerAnimation(index) {
      const item = document.querySelectorAll('.omamori-item')[index];
      item.classList.add('clicked-animation');
      setTimeout(() => item.classList.remove('clicked-animation'), 1000);
    },
    scrollToResult() {
      const quoteSection = this.$refs.quoteSection;
      if (quoteSection) {
        window.scrollTo({
          top: quoteSection.offsetTop - 200,
          behavior: 'smooth'
        });
      }
    },
    handleRetry() {
      this.resultVisible = false;
      setTimeout(() => {
        this.selectedQuote = null;
        this.selectedCategory = null;
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 500);
    },
    openLink(link) {
      window.open(link, '_blank');
    }
  }
};
</script>

<style scoped src="@/assets/css/appSpiritualPage.css"></style>
