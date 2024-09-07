<template>
  <footer class="footer">
    <div class="footer-area">
      <div class="footer-top">
        <h3>石碇觀光發展協會</h3>
      </div>
      <div class="footer-content">
        <div class="footer-contact">
          <h4>聯絡方式</h4>
          <p>電話：02 2663 1366</p>
          <p>地址：223新北市石碇區石碇西街9號</p>
        </div>
        <div class="footer-section">
          <h4>開放時間</h4>
          <p>每日 8:00-17:00</p>
        </div>

        <div class="footer-section">
          <h4>社群平台</h4>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>

      </div>
      <div class="footer-bottom">
        <p>Copyright©2024石碇觀光發展協會</p>
      </div>
    </div>
    <div class="footer-image">
      <img :src="footerImage" alt="協會圖片" />
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      footerImage: require("@/assets/images/footer_logo.png"),
    };
  },
};
</script>

<style scoped src="@/assets/css/appFooter.css"></style>
