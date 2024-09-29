<template>
    <div class="incomplete-page">
      <!-- 圖示區域 -->
      <div class="icon-container">
        <!-- 使用 Font Awesome 的工地圖標 -->
        <i class="fas fa-tools construction-icon"></i>
      </div>
      <!-- 標題與說明文字 -->
      <div class="text-container">
        <h2>尚未完成</h2>
        <p>此功能正在開發中，敬請期待！</p>
        <!-- 使用 router-link 回到首頁 -->
        <router-link to="/" class="btn btn-primary return-btn">回到首頁</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'IncompletePage',
  };
  </script>
  
  <style scoped>
  /* 整個頁面容器樣式 */
  .incomplete-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: #f8f9fa;
  }
  
  /* Icon 容器樣式 */
  .icon-container {
    margin-bottom: 20px;
  }
  
  /* Font Awesome 的圖標樣式 */
  .construction-icon {
    font-size: 80px;
    color: #ff9800; /* 圖標顏色 */
  }
  
  /* 標題樣式 */
  .text-container h2 {
    font-size: 32px;
    color: #333;
    margin-bottom: 10px;
  }
  
  /* 說明文字樣式 */
  .text-container p {
    font-size: 18px;
    color: #666;
    margin-bottom: 30px;
  }
  
  /* 按鈕樣式 */
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
  