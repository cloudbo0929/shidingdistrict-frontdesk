<template>
  <div>
    <h2 class="contentTitle" data-aos="fade-up">
      {{ titleMapping[templateName] }}
    </h2>

    <div class="content-container" data-aos="fade-down">
      <img
        class="content_img animated-img"
        :src="contentImage"
        alt="求籤圖片"
        @click="showResult"
        @mouseover="hoverImage"
        @mouseout="removeHover"
        data-aos="zoom-in"
      >
    </div>

    <div v-if="showOverlay" class="overlay">
      <div v-if="showLoading" class="msgbox" data-aos="fade-down">
        <div class="msgbox-content">
          <div class="loadGif"></div>
          <p>為您祈福中，請稍後...</p>
        </div>
      </div>
      <div v-else class="msgbox" data-aos="zoom-in">
        <h3>{{ resultTitle }}</h3>
        <img
          :src="resultImage"
          :alt="lotResult"
          class="result-image"
          data-aos="flip-right"
        />
        <button
          @click="navigateToTalisman"
          class="msgbox-navigate"
          data-aos="fade-down"
        >
          求取平安符
        </button>
        <button
          @click="closeOverlay"
          class="msgbox-close"
          data-aos="fade-down"
        >
          關閉視窗
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "LuckDisplay",
  props: {
    templateName: {
      type: String,
      required: true,
      default: "template_1",
    },
  },
  data() {
    return {
      lotsMapping: {
        大吉: require(`@/assets/images/${this.templateName}/daikichi.png`),
        上上: require(`@/assets/images/${this.templateName}/chukichi.png`),
        上吉: require(`@/assets/images/${this.templateName}/shokichi.png`),
        吉: require(`@/assets/images/${this.templateName}/kichi.png`),
        中平: require(`@/assets/images/${this.templateName}/suekichi.png`),
        平: require(`@/assets/images/${this.templateName}/heikichi.png`),
      },
      titleMapping: {
        relationships: "《您的人際運勢是》",
        career: "《您的事業/學業運勢是》",
        lifestyle: "《您的生活運勢是》",
        wealth: "《您的財運運勢是》",
        health: "《您的健康運勢是》",
        romance: "《您的愛情運勢是》",
      },
      contentImage: require(`@/assets/images/${this.templateName}/content.png`),
      lotResult: "",
      resultImage: "",
      resultTitle: "",
      showOverlay: false,
      showLoading: true,
    };
  },
  mounted() {
    AOS.init({
      once: false,
      duration: 1000,
    });
  },
  updated() {
    AOS.refresh();
  },
  methods: {
    drawLots() {
      const results = Object.keys(this.lotsMapping);
      const randomIndex = Math.floor(Math.random() * results.length);
      this.lotResult = results[randomIndex];
      this.resultImage = this.lotsMapping[this.lotResult];
      this.resultTitle = this.titleMapping[this.templateName];
    },
    showResult() {
      this.showOverlay = true;
      this.showLoading = true;
      setTimeout(() => {
        this.drawLots();
        this.showLoading = false;
        AOS.refresh(); // 顯示結果後刷新 AOS 動畫
      }, 3000);
    },
    closeOverlay() {
      this.showOverlay = false;
    },
    navigateToTalisman() {
      window.location.href =
        "https://shelly9457.github.io/ShiDing/Talisman/index.html";
    },
  },
};
</script>

<style scoped src="@/assets/css/appLuckDisplay.css"></style>

