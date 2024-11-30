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

    <!-- 背景和彈窗功能 -->
    <div class="background">
      <div class="image-container swing-image-container">
      <img src="@/assets/images/title_sht.png" alt="晃動圖片" class="swing-image" />
      <!-- 五角星效果 -->
      <div class="star star-1"></div>
      <div class="star star-2"></div>
      <div class="star star-3"></div>
    </div>

      <div class="click-circle" @click="openModal">
        <img src="@/assets/images/shenshi.png" alt="點擊圖片" class="click-image" />
      </div>
      <div class="text-overlay">
        <div
        class="animated-text"
            v-for="(line, index) in textLines"
            :key="index"
            :style="{ top: line.top, left: line.left }"
          >
          {{ line.text }}
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
      { text: "幽默的方式", top: "52%", left: "8%" },
      { text: "期待生活的挑戰", top: "53%", left: "65%" },
      { text: "指點迷津新體驗", top: "80%", left: "8%" },
      { text: "美食景點大推薦", top: "80%", left: "62%" },
    ],
    };
  },
  created() {
    this.loadImages(); // 在組件創建時加載圖片
  },
  mounted() {
    this.updateTextLinePositions(); // 初始化時更新文字位置
    window.addEventListener("resize", this.adjustTextLines); // 監聽螢幕尺寸變化
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.adjustTextLines); // 清理事件監聽  },
  },
  methods: {


    updateTextLinePositions() {
  const container = document.querySelector('.background');
  if (!container) return;

  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;
  const screenWidth = window.innerWidth;

  // 限制文字位置的範圍
  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  if (screenWidth >= 1200) {
    // 桌機版配置
    this.textLines = [
      {
        text: "幽默的方式",
        top: `${clamp(containerHeight * 0.52, 50, containerHeight - 50)}px`,
        left: `${clamp(containerWidth * 0.37, 50, containerWidth - 50)}px`,
      },
      {
        text: "期待生活的挑戰",
        top: `${clamp(containerHeight * 0.53, 50, containerHeight - 50)}px`,
        left: `${clamp(containerWidth * 0.54, 50, containerWidth - 50)}px`,
      },
      {
        text: "指點迷津新體驗",
        top: `${clamp(containerHeight * 0.9, 50, containerHeight - 50)}px`,
        left: `${clamp(containerWidth * 0.38, 50, containerWidth - 50)}px`,
      },
      {
        text: "美食景點大推薦",
        top: `${clamp(containerHeight * 0.88, 50, containerHeight - 50)}px`,
        left: `${clamp(containerWidth * 0.55, 50, containerWidth - 50)}px`,
      },
    ];
  } else if (screenWidth >= 768 && screenWidth < 1200) {
    // 平板版配置
    this.textLines = [
      {
        text: "幽默的方式",
        top: `${clamp(containerHeight * 0.55, 30, containerHeight - 30)}px`,
        left: `${clamp(containerWidth * 0.15, 30, containerWidth - 30)}px`,
      },
      {
        text: "期待生活的挑戰",
        top: `${clamp(containerHeight * 0.53, 30, containerHeight - 30)}px`,
        left: `${clamp(containerWidth * 0.65, 30, containerWidth - 30)}px`,
      },
      {
        text: "指點迷津新體驗",
        top: `${clamp(containerHeight * 0.88, 30, containerHeight - 30)}px`,
        left: `${clamp(containerWidth * 0.13, 30, containerWidth - 30)}px`,
      },
      {
        text: "美食景點大推薦",
        top: `${clamp(containerHeight * 0.90, 30, containerHeight - 30)}px`,
        left: `${clamp(containerWidth * 0.66, 30, containerWidth - 30)}px`,
      },
    ];
  } else {
    // 手機版配置
    this.textLines = [
      {
        text: "幽默的方式",
        top: `${clamp(containerHeight * 0.53, 20, containerHeight - 20)}px`,
        left: `${clamp(containerWidth * 0.10, 20, containerWidth - 20)}px`,
      },
      {
        text: "期待生活的挑戰",
        top: `${clamp(containerHeight * 0.52, 20, containerHeight - 20)}px`,
        left: `${clamp(containerWidth * 0.6, 20, containerWidth - 20)}px`,
      },
      {
        text: "指點迷津新體驗",
        top: `${clamp(containerHeight * 0.8, 20, containerHeight - 20)}px`,
        left: `${clamp(containerWidth * 0.09, 20, containerWidth - 20)}px`,
      },
      {
        text: "美食景點大推薦",
        top: `${clamp(containerHeight * 0.82, 20, containerHeight - 20)}px`,
        left: `${clamp(containerWidth * 0.6, 20, containerWidth - 20)}px`,
      },
    ];
  }
},

    // 初始化和監聽尺寸變化
    handleResize() {
      this.updateTextLinePositions(); // 更新文字位置
    },

     adjustImageContainer() {
      // const container = document.querySelector(".image-container");
      // const clickCircle = document.querySelector(".click-circle");
      // const screenWidth = window.innerWidth;
      // const screenHeight = window.innerHeight;
      // 根據螢幕大小調整樣式
      // if (screenWidth > 1024) {
      //   document.documentElement.style.setProperty('--image-top', `${screenHeight * 0.08}px`);
      //   document.documentElement.style.setProperty('--click-circle-top', '73%');
      //   container.style.width = "420px";
      //   clickCircle.style.top = "73%";
      //   clickCircle.style.width = "25vw";
      //   this.updateTextLines(32, 34, 33, 57, 67, 33, 68, 58); // 更新文字位置

      // } else if (screenWidth <= 1024 && screenWidth > 768) {
      //   document.documentElement.style.setProperty('--image-top', `${screenHeight * 0.05}px`);
      //   document.documentElement.style.setProperty('--click-circle-top', '72%');
      //   container.style.width = "550px";
      //   clickCircle.style.top = "72%";
      //   clickCircle.style.width = "53vw";
      //   this.updateTextLines(32, 12, 33, 67, 66, 10, 66, 68); // 更新文字位置

      // } else if (screenWidth == 768) {
      //   container.style.top = `${screenHeight * 0.06}px`;
      //   container.style.width = "500px";
      //   clickCircle.style.top = "75%";
      //   clickCircle.style.width = "50vw";
      //   this.updateTextLines(35, 14, 33, 65, 67, 14, 69, 65); // 更新文字位置

      // } else if (screenWidth < 768 && screenWidth > 480) {
      //   document.documentElement.style.setProperty('--image-top', `${screenHeight * 0.06}px`);
      //   document.documentElement.style.setProperty('--click-circle-top', '75%');
      //   container.style.width = "350px";
      //   clickCircle.style.top = "75%";
      //   clickCircle.style.width = "50vw";
      //   this.updateTextLines(32, 8, 30, 70, 60, 8, 60, 70); // 更新文字位置

      // } else if (screenWidth <= 480 && screenWidth > 375) {
      //   container.style.top = `${screenHeight * 0.16}px`;
      //   container.style.width = "335px";
      //   clickCircle.style.top = "68%";
      //   clickCircle.style.width = "70vw";
      //   this.updateTextLines(32, 8, 31, 68, 60, 4, 60, 70); // 更新文字位置

      // } else if (screenWidth == 375) {
      //   container.style.top = `${screenHeight * 0.07}px`;
      //   container.style.width = "320px";
      //   clickCircle.style.top = "72%";
      //   clickCircle.style.width = "60vw";
      //   this.updateTextLines(32, 8, 33, 67, 64, 5, 65, 65); // 更新文字位置

      // } else {
      //   container.style.top = `${screenHeight * 0.11}px`;
      //   container.style.width = "300px";
      //   clickCircle.style.top = "70%";
      //   clickCircle.style.width = "65vw";
      //   this.updateTextLines(32, 8, 30, 65, 60, 8, 60, 67); // 更新文字位置
      // }
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