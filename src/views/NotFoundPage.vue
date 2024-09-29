<template>
    <div class="not-found-page">
      <!-- 圖標區域 -->
      <div class="icon-container">
        <!-- 使用 Font Awesome 的錯誤圖標 -->
        <i class="fas fa-exclamation-triangle error-icon"></i>
      </div>
      <!-- 標題與說明文字 -->
      <div class="text-container">
        <h1>404</h1>
        <h2>頁面不存在</h2>
        <p>很抱歉，您嘗試存取的頁面不存在或已被移除。</p>
        <!-- 返回首頁按鈕 -->
        <router-link to="/" class="btn btn-primary return-btn">回到首頁</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFoundPage',
  };
  </script>
  
  <style scoped>
  /* 整個頁面容器樣式 */
  .not-found-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #f8f9fa;
  }
  
  /* 圖標容器樣式 */
  .icon-container {
    margin-bottom: 20px;
  }
  
  /* Font Awesome 的圖標樣式 */
  .error-icon {
    font-size: 100px;
    color: #ff6b6b; /* 錯誤圖標顏色 */
  }
  
  /* 標題樣式 */
  .text-container h1 {
    font-size: 80px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .text-container h2 {
    font-size: 32px;
    color: #333;
    margin-bottom: 20px;
  }
  
  /* 說明文字樣式 */
  .text-container p {
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
  }
  
  /* 返回按鈕樣式 */
  .return-btn {
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 8px;
    text-decoration: none;
    color: white;
    background-color: #007bff;
  }
  
  .return-btn:hover {
    background-color: #0056b3;
  }
  </style>
  