<template>
  <div class="introduction">
    <!-- 頁面導航區域 -->
    <div class="tabs">
      <button class="tab active">簡介</button>
      <button class="tab">歷史</button>
      <button class="tab">神祇</button>
    </div>

    <!-- 區塊：關於石碇集順廟 -->
    <section class="section">
      <div class="section-header">
        <img src="https://via.placeholder.com/50" alt="Icon" />
        <h2>關於石碇集順廟</h2>
      </div>
      <div class="section-area">
        <div class="section-content">
          <p>
            石碇集順廟，又稱雙忠廟、尪公廟、仙公廟等，是石碇地區居民的信仰中心，為當地最悠久的寺廟之一，也是石碇的重要地標。廟宇建立於清道光十八年（1838年），主祀雙忠(保儀尊王及保儀大夫)。
          </p>
          <p>
            後於日治初期由中醫醫師「呂林烏木」見廟宇傾斜重建廟宇並建立二樓明德宮以，主祀呂純陽祖師（呂洞賓），由木柵指南宮分香而來。(保儀尊王及保儀大夫)。
          </p>
          <p>
            集順廟在茶葉興盛的日治時期是茶葉交易中心，廟埕曾是石碇、坪林、平溪、深坑、宜蘭等鄉鎮居民交流的場所，具有重要的歷史和文化意義。(保儀尊王及保儀大夫)。
          </p>
        </div>
        <img src="https://via.placeholder.com/400x300" alt="Temple" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "AppIntroduction",
};
</script>

<style scoped>
/* 整體佈局與樣式調整 */
.introduction {
  padding: 2rem;
  margin: 0 auto; /* 讓頁面在大螢幕上居中 */
}

/* 頁面導航區域 */
.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tab {
  background-color: #f2d349;
  border: none;
  padding: 10px 20px;
  font-size: clamp(1rem, 2vw, 1.5rem); /* 動態字體大小 */
  border-radius: 20px;
  cursor: pointer;
}

.tab.active {
  background-color: #e65832;
  color: white;
}

/* 區塊標題樣式 */
.section-header {
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative; /* 允許使用 top 來移動 */
  top: -5em; /* 向上移動，根據需求調整 */
}

.section {
  margin: 4rem auto; /* 確保 section-header 不會覆蓋 section */
  padding: 2rem;
  background-color: #e9e0c7;
  color: rgb(50, 49, 49);
  font-weight: 700;
  border-radius: 30px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1); /* 增加陰影效果 */
  max-width: 85%;
}

.section-header h2 {
  color: #d75b28;
  font-size: clamp(2rem, 3vw, 3rem); /* 動態字體大小 */
  font-weight: 700;
}

/* 區塊內容樣式 */
.section-area {
  display: flex;
  gap: 1.5rem;
  margin-top: -4rem;
}

.section-content {
  display: flex;
  flex-direction: column;
}

.section-content p {
  flex: 1;
  font-size: clamp(1rem, 1.5vw, 2rem); /* 動態字體大小 */
  line-height: 1.6;
}

/* 圖片自適應的調整 */
.section-area img {
  width: 100%; /* 讓圖片寬度佔滿容器 */
  height: auto; /* 自動調整高度，保持比例 */
  border-radius: 10px;
  object-fit: cover; /* 確保圖片覆蓋並保持比例 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 響應式設計：針對小螢幕調整 */
@media (max-width: 950px) {
  .section-content {
    flex-direction: column; /* 讓圖片和文字垂直排列 */
  }

  .section-content img {
    width: 50%; /* 圖片在小螢幕上佔滿容器寬度 */
    margin-top: 1rem; /* 在圖片和文字之間添加一些間距 */
  }

  .tabs {
    flex-wrap: wrap;
  }

  .tab {
    margin-bottom: 10px;
  }

  .section-header {
    top: -30px; /* 調整小螢幕上的偏移 */
  }

  .section-area {
    margin-top: -2rem;
    flex-direction: column; /* 讓 section 內容垂直排列 */
  }

  .section {
    width: 100%; /* 小螢幕時讓 section 佔滿整個螢幕 */
    padding: 1.5rem;
  }
}

</style>
