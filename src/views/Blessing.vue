<template>
    <div class="container text-center mt-5">
        <!-- 標題區域 -->
        <div class="title">
            <h2>來試看看您的手氣吧～您想求的是什麼？</h2>
            <p>（請點以下任一選項）</p>
        </div>

        <!-- 圖片區域 -->
        <div class="image-container my-4">
            <img src="@/assets/images/load.gif" alt="Fortune Stick" class="fortune-stick" />
            <img src="/images/mascot.png" alt="Crocodile" class="crocodile" />
        </div>

        <!-- 選項區域 -->
        <div class="options-container">
            <!-- 愛情按鈕 -->
            <router-link :to="{ name: 'LuckDisplay', params: { templateName: 'romance' } }" class="option-img">
                <img src="@/assets/images/buttom/romance.png" alt="愛情" class="icon-img" />
            </router-link>
            <!-- 人際按鈕 -->
            <router-link :to="{ name: 'LuckDisplay', params: { templateName: 'relationships' } }" class="option-img">
                <img src="@/assets/images/buttom/relationship.png" alt="人際" class="icon-img" />
            </router-link>
            <!-- 事業/學業按鈕，附加 special-class 類別 -->
            <router-link :to="{ name: 'LuckDisplay', params: { templateName: 'career' } }" class="option-img special-class">
                <img src="@/assets/images/buttom/career.png" alt="事業/學業" class="icon-img" />
            </router-link>
            <!-- 健康按鈕 -->
            <router-link :to="{ name: 'LuckDisplay', params: { templateName: 'health' } }" class="option-img">
                <img src="@/assets/images/buttom/health.png" alt="健康" class="icon-img" />
            </router-link>
            <!-- 財運按鈕 -->
            <router-link :to="{ name: 'LuckDisplay', params: { templateName: 'wealth' } }" class="option-img">
                <img src="@/assets/images/buttom/wealth.png" alt="財運" class="icon-img" />
            </router-link>
            <!-- 生活按鈕 -->
            <router-link :to="{ name: 'LuckDisplay', params: { templateName: 'lifestyle' } }" class="option-img">
                <img src="@/assets/images/buttom/lifestyle.png" alt="生活" class="icon-img" />
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LuckPage',
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
}

.fortune-stick {
    width: 10%;
    height: auto;
    margin-right: 20px;
}

.crocodile {
    width: 200px;
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
    /* 使用 flex 佈局 */
    flex-wrap: wrap;
    /* 允許換行 */
    justify-content: center;
    /* 水平置中 */
    align-items: center;
    /* 垂直置中 */
    gap: 20px;
    /* 設置按鈕之間的間距 */
    max-width: 800px;
    /* 設置容器最大寬度 */
    margin: 0 auto;
    /* 容器置中 */
}

.option-img {
    padding: 0;
    /* 移除預設填充 */
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    /* 移除邊框 */
    background: transparent;
    /* 移除背景 */
    width: calc(33.33% - 20px);
    /* 設定每個選取區塊寬度，總共3個，每個佔1/3 */
    max-width: 180px;
    /* 限制最大寬度 */
    height: 100px;
    /* 設定選取區塊高度 */
    margin: 10px;
    /* 設定按鈕之間的距離 */
}

.icon-img {
    width: 120px;
    /* 調整圖片寬度 */
    height: 80px;
    /* 調整圖片高度 */
    transition: transform 0.3s ease;
    object-fit: contain;
    /* 確保圖片不變形 */
}

.option-img:hover .icon-img {
    transform: scale(1.1);
    /* 滑鼠移過圖片放大 */
}

/* 特殊樣式設定，針對事業/學業按鈕 */
.special-class .icon-img {
    width: 170px; /* 特定寬度 */
    height: 150px; /* 特定高度 */
}
</style>
