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

    <!-- 區塊：集順廟歷史 -->
    <section class="section">
      <div class="section-header">
        <img src="https://via.placeholder.com/50" alt="Icon" />
        <h2>集順廟歷史</h2>
      </div>
      <div class="section-content">
        <p>
          集順廟建於1838年，是當地的信仰中心，也是居民的精神寄託。
          此廟經歷多次修建，現今的廟宇結構在1989年進行了大規模翻新，並於該年開廟祭祀。
        </p>
        <img src="https://via.placeholder.com/400x300" alt="History" />
      </div>
    </section>

    <!-- 區塊：供奉神祇 -->
    <section class="section">
      <div class="section-header">
        <img src="https://via.placeholder.com/50" alt="Icon" />
        <h2>供奉神祇</h2>
      </div>
      <div class="section-content">
        <p>
          集順廟供奉著主要神明保儀大夫與保儀尊王。
          除此之外，廟中還有奉祀一些地方神明，如土地公、觀音等，並不定期舉辦重要祭典活動。
        </p>
        <img src="https://via.placeholder.com/400x300" alt="Gods" />
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
/* 頁面佈局樣式 */
.introduction {
  padding: 2rem;
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
  font-size: 1.2rem;
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
  top: -95px; /* 向上移動 */
}

.section {
  margin: 6rem 0; /* 確保 section-header 不會覆蓋 section */
  padding: 2rem;
  background-color: #e9e0c7;
  color: rgb(50, 49, 49);
  font-weight: 700;
  border-radius: 30px;
}


.section-header h2 {
  color: #d75b28;
  font-size: 2.5rem;
  font-weight: 700;
}

/* 區塊內容樣式 */
.section-area {
  display: flex;
  gap: 1.5rem;
  margin-top: -6rem;
}

.section-content {
  display: flex;
  flex-direction: column;
}

.section-content p {
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.6;
}

.section-area img {
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 響應式設計：針對小螢幕調整 */
@media (max-width: 768px) {
  .section-content {
    flex-direction: column;
  }

  .section-content img {
    max-width: 100%;
  }

  .tabs {
    flex-wrap: wrap;
  }

  .tab {
    margin-bottom: 10px;
  }
}
</style>
