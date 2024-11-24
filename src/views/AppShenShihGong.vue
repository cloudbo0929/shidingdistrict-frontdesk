<template>
  <div>
    <!-- 添加固定比例和位置的晃動圖片 -->
    <!-- <div class="image-container">
      <img src="@/assets/images/title_sht.png" alt="晃動圖片" class="swing-image" />
    </div> -->

    <!-- 背景和彈窗功能 -->
    <div class="background">
      <!-- 點擊區域 -->
      <div class="click-circle" @click="openModal"></div>

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
    };
  },
  created() {
    this.loadImages(); // 在組件創建時加載圖片
  },
  methods: {
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
  },
};
</script>