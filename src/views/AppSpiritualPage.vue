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
      <p :class="omamori.class">{{ omamori.name }}</p>
        <img :src="omamori.image" :alt="omamori.name" class="omamori-image" />
      </div>
    </div>

    <!-- 心靈小語顯示區塊，帶有過渡效果 -->
    <transition name="fade-slide" mode="out-in">
      <div v-if="selectedQuote" class="quote-display" ref="quoteSection">
        <h2 :class="categoryColorClass" class="quote-category">《{{ selectedCategory }}》</h2>
        <p class="quote-text">「{{ selectedQuote.text }}」</p>
        <p class="recommended">— {{ recommendedText }}</p>
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
      { name: '勇氣與熱情', image: require('@/assets/images/omamori/red.png'), class: 'red-title' },
      { name: '創意與活力', image: require('@/assets/images/omamori/orange.png'), class: 'orange-title' },
      { name: '智慧與光明', image: require('@/assets/images/omamori/yellow.png'), class: 'yellow-title' },
      { name: '成長與希望', image: require('@/assets/images/omamori/green.png'), class: 'green-title' },
      { name: '平靜與智慧', image: require('@/assets/images/omamori/blue.png'), class: 'blue-title' },
      { name: '靈性與深度', image: require('@/assets/images/omamori/purple.png'), class: 'purple-title' },
      { name: '純淨與初心', image: require('@/assets/images/omamori/white.png'), class: 'white-title' },
      { name: '力量與保護', image: require('@/assets/images/omamori/black.png'), class: 'black-title' }
    ],
      quotes: quotesData,
      selectedQuote: null,
      selectedCategory: null,
      recommendedText: '', // 初始化為空
      resultVisible: false
    };
  },
  computed: {
    categoryColorClass() {
      if (!this.selectedCategory) return '';
      const colorMap = {
        '勇氣與熱情': 'red-title',
        '創意與活力': 'orange-title',
        '智慧與光明': 'yellow-title',
        '成長與希望': 'green-title',
        '平靜與智慧': 'blue-title',
        '靈性與深度': 'purple-title',
        '純淨與初心': 'white-title',
        '力量與保護': 'black-title',
      };
      const categoryKey = this.selectedCategory.slice(7, 12);
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
        const randomQuote = categoryQuotes[randomIndex];
        
        // 設定選中的名言及類別
        this.selectedQuote = randomQuote;
        this.selectedCategory = this.quotes[index].category;
        
        // 套用 suggestion 到 recommendedText
        this.recommendedText = randomQuote.suggestion;

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
          top: document.body.scrollHeight,
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
