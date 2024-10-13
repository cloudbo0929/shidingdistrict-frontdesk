<template>
  <div class="container text-center mt-5">
    <!-- 標題區域 -->
    <div class="title">
      <h2>來試看看您的手氣吧～您想求的是什麼？</h2>
      <p>（請點以下任一選項）</p>
    </div>

    <!-- 圖片區域 -->
    <div class="image-container my-4">
      <img
        src="@/assets/images/load.gif"
        alt="Fortune Stick"
        class="fortune-stick"
      />
      <img src="/images/mascot.png" alt="Crocodile" class="crocodile" />
    </div>

    <!-- 選項區域 -->
    <div class="options-container">
      <!-- 愛情按鈕 -->
      <router-link
        :to="{ name: 'LuckDisplay', params: { templateName: 'romance' } }"
        class="option-img"
      >
        <img
          src="@/assets/images/buttom/romance.png"
          alt="愛情"
          class="icon-img"
        />
      </router-link>
      <!-- 人際按鈕 -->
      <router-link
        :to="{ name: 'LuckDisplay', params: { templateName: 'relationships' } }"
        class="option-img"
      >
        <img
          src="@/assets/images/buttom/relationship.png"
          alt="人際"
          class="icon-img"
        />
      </router-link>
      <!-- 事業/學業按鈕，附加 special-class 類別 -->
      <router-link
        :to="{ name: 'LuckDisplay', params: { templateName: 'career' } }"
        class="option-img special-class"
      >
        <img
          src="@/assets/images/buttom/career.png"
          alt="事業/學業"
          class="icon-img"
        />
      </router-link>
      <!-- 健康按鈕 -->
      <router-link
        :to="{ name: 'LuckDisplay', params: { templateName: 'health' } }"
        class="option-img"
      >
        <img
          src="@/assets/images/buttom/health.png"
          alt="健康"
          class="icon-img"
        />
      </router-link>
      <!-- 財運按鈕 -->
      <router-link
        :to="{ name: 'LuckDisplay', params: { templateName: 'wealth' } }"
        class="option-img"
      >
        <img
          src="@/assets/images/buttom/wealth.png"
          alt="財運"
          class="icon-img"
        />
      </router-link>
      <!-- 生活按鈕 -->
      <router-link
        :to="{ name: 'LuckDisplay', params: { templateName: 'lifestyle' } }"
        class="option-img"
      >
        <img
          src="@/assets/images/buttom/lifestyle.png"
          alt="生活"
          class="icon-img"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LuckPage",
};
</script>

<style scoped>
/* 標題樣式 */
.title h2 {
  font-weight: bold;
  font-size: 24px;
  color: #333;
  text-align: center;
}

.title p {
  font-size: 16px;
  color: #666;
  text-align: center;
}

/* 圖片區域樣式 */
.image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.fortune-stick {
  width: 15%;
  height: auto;
  margin-right: 20px;
}

.crocodile {
  width: 15%;
  height: auto;
  animation: run 1s infinite;
}

@keyframes run {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}

/* 控制選取區塊大小與圖片樣式 */
.options-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.option-img {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: transparent;
  width: clamp(5rem, 30vw, 180px);
  margin: 10px;
}

.icon-img {
  width: 120px;
  height: 80px;
  transition: transform 0.3s ease;
  object-fit: contain;
}

.option-img:hover .icon-img {
  transform: scale(1.1);
}

.special-class .icon-img {
  width: 170px;
  height: 150px;
}

@media (max-width: 768px) {
  .fortune-stick {
    width: 15%;
    margin-right: 10px;
  }

  .crocodile {
    width: 150px;
  }

  .option-img {
    width: calc(33% - 20px);
    height: auto;
  }

  .icon-img {
    width: 100px;
    height: 60px;
  }

  .special-class .icon-img {
    width: 130px;
    height: 100px;
  }

  .title h2 {
    font-size: 20px;
  }

  .title p {
    font-size: 14px;
  }
}
</style>
