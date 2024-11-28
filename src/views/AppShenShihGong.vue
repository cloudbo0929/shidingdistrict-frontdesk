<template>
  <!-- 彈出視窗 -->
  <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <!-- 關閉按鈕 -->
      <button class="close-button" @click="closeModal">
        <i class="fas fa-times"></i>
      </button>
      <p class="modal-title">人生語錄 石在有靈</p>
      <img class="modal-image" :src="selectedImage.src" alt="內容圖片" />
      <p class="modal-text">了解更多，點擊前往解方</p>
      <div class="button-container">
        <a :href="selectedImage.link" target="_blank" class="action-button animated-button">前往網站</a>
      </div>
    </div>
  </div>
  <div>
    <div class="image-container swing-image-container">
      <img src="@/assets/images/title_sht.png" alt="晃動圖片" class="swing-image" />
      <!-- 五角星效果 -->
      <div class="star star-1"></div>
      <div class="star star-2"></div>
      <div class="star star-3"></div>
    </div>
    <!-- 背景和彈窗功能 -->
    <div class="background">
      <!-- 點擊區域 -->
        <div class="text-overlay">
    <p
      class="animated-text"
      v-for="(line, index) in textLines"
      :key="index"
      :style="{ top: line.top, left: line.left, animationDelay: `${index * 1}s` }"
    >
      {{ line.text }}
    </p>
  </div>
  <div class="click-circle" @click="openModal">
        <img src="@/assets/images/shenshi.png" alt="點擊圖片" class="click-image" />
      </div>
    </div>
  </div>
</template>

<style scoped src="@/assets/css/appSenShihGong.css"></style>



<script>

export default {
  
  data() {
    return {
      isModalOpen: false,
      selectedImage: null, // 儲存隨機選中的圖片物件
      images: [],
      textLines: [
      { text: "幽默的方式", top: "32%", left: "8%" },
      { text: "期待生活的挑戰", top: "30%", left: "70%" },
      { text: "指點迷津新體驗", top: "60%", left: "8%" },
      { text: "美食景點大推薦", top: "60%", left: "70%" }
      ]    
    };
  },
  created() {
    this.loadImages(); // 在組件創建時加載圖片
  },
  mounted() {
    this.adjustImageContainer(); // 初始化時調整位置與大小
    window.addEventListener("resize", this.adjustImageContainer); // 監聽螢幕尺寸變化
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustImageContainer); // 清理監聽器
  },

  methods: {
    updateTextLines(top1, left1, top2, left2, top3, left3, top4, left4) {
    this.textLines = [
      { text: "幽默的方式", top: `${top1}%`, left: `${left1}%` },
      { text: "期待生活的挑戰", top: `${top2}%`, left: `${left2}%` },
      { text: "指點迷津新體驗", top: `${top3}%`, left: `${left3}%` },
      { text: "美食景點大推薦", top: `${top4}%`, left: `${left4}%` },
    ];
  },

    adjustImageContainer() {
      const container = document.querySelector(".image-container");
      const clickCircle = document.querySelector(".click-circle");
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      this.updateTextLines(32, 8, 30, 70, 60, 8, 60, 70); // 更新文字位置

      // 根據螢幕大小調整樣式
      if (screenWidth > 1024) {
        container.style.top = `${screenHeight * -0.2}px`;
        container.style.width = "380px";
        clickCircle.style.top = "75%";
        clickCircle.style.width = "17vw";
        this.updateTextLines(32, 38, 33, 55, 67, 38, 70, 55); // 更新文字位置

      } else if (screenWidth == 1024 ) {
        container.style.top = `${screenHeight * -0.05}px`;
        container.style.width = "650px";
        clickCircle.style.top = "75%";
        clickCircle.style.width = "50vw";
        this.updateTextLines(35, 15, 36, 68, 67, 13, 68, 65); // 更新文字位置

      } else if (screenWidth < 1024 && screenWidth > 768) {
        container.style.top = `${screenHeight * -0.08}px`;
        container.style.width = "600px";
        clickCircle.style.top = "73%";
        clickCircle.style.width = "55vw";
        this.updateTextLines(32, 8, 30, 70, 60, 8, 60, 70); // 更新文字位置

      } else if (screenWidth == 768) {
        container.style.top = `${screenHeight * 0.06}px`;
        container.style.width = "490px";
        clickCircle.style.top = "75%";
        clickCircle.style.width = "50vw";
        this.updateTextLines(35, 18, 33, 70, 67, 16, 69, 70); // 更新文字位置

      } else if (screenWidth < 768 && screenWidth > 480) {
        container.style.top = `${screenHeight * 0.02}px`;
        container.style.width = "350px";
        clickCircle.style.top = "75%";
        clickCircle.style.width = "50vw";
        this.updateTextLines(32, 8, 30, 70, 60, 8, 60, 70); // 更新文字位置

      } else if (screenWidth <= 480 && screenWidth > 375) {
        container.style.top = `${screenHeight * 0.13}px`;
        container.style.width = "340px";
        clickCircle.style.top = "70%";
        clickCircle.style.width = "70vw";
        this.updateTextLines(32, 8, 33, 68, 60, 8, 60, 70); // 更新文字位置

      } else if (screenWidth == 375) {
        container.style.top = `${screenHeight * 0.05}px`;
        container.style.width = "320px";
        clickCircle.style.top = "74%";
        clickCircle.style.width = "60vw";
        this.updateTextLines(32, 8, 33, 67, 64, 5, 65, 65); // 更新文字位置

      } else {
        container.style.top = `${screenHeight * 0.11}px`;
        container.style.width = "300px";
        clickCircle.style.top = "70%";
        clickCircle.style.width = "65vw";
        this.updateTextLines(32, 8, 30, 65, 60, 8, 60, 67); // 更新文字位置
      }
    },
  
    // 加載資料夾中的所有圖片
    loadImages() {
      const requireContext = require.context(
        "@/assets/images/SHG", // 替換為圖片資料夾路徑
        false, // 是否遍歷子資料夾
        /\.(png|jpe?g|svg)$/ // 文件匹配規則
      );

      // 圖片名稱到 URL 的對應表
      this.imageUrlMap = {
        "人生.png": "https://newtaipei.travel/zh-tw/attractions/detail/109946",
        "方向.png": "https://maps.app.goo.gl/ERBGJKcG5xtRBqfCA",
        "出遊.png": "https://maps.app.goo.gl/tG93f5EDQZ3PfCkg9",
        "平衡.png": "https://maps.app.goo.gl/QkjKsN5hA88UvKv19",
        "生活.png": "https://maps.app.goo.gl/Kv3JZ6F9EVGySazg6",
        "成功.png": "https://www.facebook.com/chendoufuwei",
        "老樣子.png": "https://maps.app.goo.gl/oZfQYHh5LzQuFC6c6",
        "別急.png": "https://www.facebook.com/wstt1688/",
        "別鬧.png": "https://newtaipei.travel/zh-tw/attractions/detail/109920",
        "抉擇.png": "https://maps.app.goo.gl/1pzuNsiXRkwf5LJM7",
        "來點甜.png": "https://www.zbyuan.com/",
        "看待.png": "https://maps.app.goo.gl/dzV2o4Mh6M5HegVz7",
        "美食.png": "https://www.facebook.com/profile.php?id=100069570841657",
        "訊號.png": "https://maps.app.goo.gl/HRRKjYMvJiQuBt686",
        "起來.png": "https://maps.app.goo.gl/U4TyVQB9egUChsWS9",
        "做自己.png": "https://www.g08.com.tw/",
        "甜心.png": "https://www.baogui.com.tw/order",
        "夢醒.png": "https://maps.app.goo.gl/4KQMmyHGNRNK8dN26",
        "選擇.png": "https://newtaipei.travel/zh-tw/attractions/detail/109911",
        "Smile.png": "https://www.facebook.com/sdnoodles/",
      };

      // 將圖片路徑與名稱存入陣列
      this.images = requireContext.keys().map((key) => {
        const fileName = key.replace("./", ""); // 獲取圖片名稱（去除 "./" 前綴）
        return {
          src: requireContext(key), // 圖片完整路徑
          name: fileName, // 圖片名稱
        };
      });

    },
    openModal() {
      if (this.images.length === 0) {
        alert("目前沒有可用圖片！");
        return;
      }

      // 隨機選取圖片
      const randomIndex = Math.floor(Math.random() * this.images.length);
      const selected = this.images[randomIndex];

      // 查找對應的 URL
      const link = this.imageUrlMap[selected.name] || "#"; // 若無對應 URL，設置為占位符
      this.selectedImage = {
        ...selected,
        link, // 增加對應 URL
      };

      this.isModalOpen = true;
      setTimeout(() => {
        document.querySelector(".modal-overlay").classList.add("open");
      }, 10); // 微小延遲以確保類名切換生效
      document.body.classList.add("no-scroll");
    },
    closeModal() {
      // 移除動畫類名
      const overlay = document.querySelector(".modal-overlay");
      overlay.classList.remove("open");

      // 等待動畫結束後關閉視窗
      setTimeout(() => {
        this.isModalOpen = false;
      }, 300); // 與 CSS 過渡時間對應
    },
    mounted() {
      setTimeout(() => {
        const image = document.querySelector('.swing-image');
        image.classList.add('swing-active'); // 為圖片添加動畫類名
      }, 1000); // 延遲 1 秒
    },

  },
};
</script>