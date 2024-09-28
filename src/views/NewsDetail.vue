<template>
  <div class="news-detail">
    <!-- 返回按鈕 -->
    <button class="back-button" @click="$router.go(-1)">← 返回</button>

    <!-- 新聞主照片 -->
    <img class="news-image" :src="news.image" alt="新聞圖片" />

    <!-- 文章標題 -->
    <h1 class="news-title">{{ news.title }}</h1>

    <!-- 文章發布日期 -->
    <p class="news-date">發布日期：{{ news.date }}</p>

    <!-- 文章內文 -->
    <div class="news-content" v-html="news.content"></div>

    <!-- 花絮照片區塊 -->
    <div v-if="galleryImages.length > 0" class="gallery">
      <h2 class="gallery-title">其他相片</h2>
      <div class="gallery-images">
        <!-- 在花絮圖片上添加 @click 事件 -->
        <img v-for="(image, index) in galleryImages" :key="index" :src="image" alt="花絮圖片" class="gallery-image"
          @click="openModal(index)" />
      </div>
    </div>

    <!-- 圖片模態視窗 -->
    <div v-if="isModalVisible" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <!-- 左右箭頭按鈕 -->
        <button class="modal-arrow left-arrow" @click="prevImage"></button>
        <img :src="galleryImages[currentIndex]" alt="花絮圖片" class="modal-image" />
        <button class="modal-arrow right-arrow" @click="nextImage"></button>
        <button class="close-button" @click="closeModal">×</button>
        <!-- 縮圖列表 -->
        <div class="thumbnail-container">
          <button class="thumbnail-arrow left-thumbnail-arrow" @click="prevThumbnail">←</button>
          <div class="thumbnail-images">
            <img v-for="(image, index) in displayedThumbnails" :key="index" :src="image" alt="縮圖圖片"
              class="thumbnail-image" @click="setCurrentIndex(thumbnailStartIndex + index)"
              :class="{ 'active-thumbnail': currentIndex === (thumbnailStartIndex + index) }" />
          </div>
          <button class="thumbnail-arrow right-thumbnail-arrow" @click="nextThumbnail">→</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'NewsDetail',
  data() {
    return {
      newsItems: [
        {
          id: 1,
          title: '2024新北嚴選 🏆恭喜石碇共7個店家獲獎🏆',
          date: '2024-09-03',
          image: '/images/S__22667434.jpg',
          content: '石碇地區多家店家參與了2024新北嚴選，最終有7家店家成功獲獎，這是該地區在傳統手工藝品與地方特色餐飲中的一大突破。恭喜所有得獎者！'
        },
        {
          id: 2,
          title: '深坑x石碇-深情石刻 2024商圈嬉遊季 ',
          date: '2024-09-02',
          image: '/images/461179406_969423578321485_7823506902429604030_n.jpg',
          content: `
          深坑x石碇-深情石刻 #2024商圈嬉遊季 
          🍁10月初秋一起來趟深坑x石碇的Chill輕旅吧！😌
          🚌期間限定｜專車接駁｜保證出團🚌
          深坑石媽祖步道導覽+老街美食巡禮 
          石碇老街巡禮+淡碇鱷絹印DIY體驗 
          行程含隨行領隊導覽
          出遊輕鬆又便利
          📣報名成功並且當日完成報到者，就可獲得商圈購物金200元喔！📣
          好玩、好逛、好買、好吃  一站滿足！
          快揪全家大小、親朋好友 一起報名吧！🙋🙋‍♂️🙋‍♀️
          活動日期： 10/06（日）
          活動時間： 09:00 – 17:00
          集合地點：南港轉運站
          報名連結：https://forms.gle/wRXCCPiuQLx4rbRC6
          #2024商圈嬉遊季 #新北商圈  #專車接送 #一日遊 #專業導覽解說
          #新北商圈廊帶式行銷活動`
        },
        {
          id: 3,
          title: '113年暑期娛樂營（113.08.05）第一天',
          date: '2024-09-02',
          image: '/images/459837696_963431302254046_90948405633752073_n.jpg',
          content: `
          每一年，我們都特地為生長在石碇卻不瞭解自己家鄉的孩子們，舉辦一場為期二週的暑期娛樂營活動，帶著孩子深入瞭解家鄉的文化、藝文及產業型態，讓孩子透過活動體驗，更認識自己生長的家鄉樣貌，期待每個播出去的種子，都能吸收滿滿的能量，最終再回饋到自己生長的土地上。`
        },
        {
          id: 4,
          title: '2024山城走走｜9/28秋季社區走讀小旅行培力',
          date: '2024-09-02',
          image: '/images/456657572_500550832601580_1314269210867125923_n.jpg',
          content: `
          【2024山城走走｜9/28秋季社區走讀小旅行培力】
            準備好來一場充滿挑戰又有趣的旅程了嗎？
            這次，我們帶你走進石碇老街與淡蘭古道，不只是走走看看，還要一起「邊走邊療育」！無論是身心障礙者家庭或一般民眾，大家都能加入挑戰，體驗當導覽員的樂趣！這可是個讓親子們一起勇敢突破自我、發掘山城秘密的好機會喔！`
        }
      ],
      news: {}, // 當前顯示的新聞
      galleryImages: [], // 花絮圖片集合
      currentImage: null, // 當前顯示的模態視窗圖片
      currentIndex: 0, // 當前圖片索引
      isModalVisible: false, // 控制模態視窗顯示的狀態
      thumbnailStartIndex: 0, // 縮圖顯示的起始索引
      thumbnailsPerPage: 5, // 每頁顯示的縮圖數量
    };
  },
  computed: {
    // 計算當前顯示的縮圖集合
    displayedThumbnails() {
      return this.galleryImages.slice(this.thumbnailStartIndex, this.thumbnailStartIndex + this.thumbnailsPerPage);
    }
  },
  created() {
    // 根據路由 ID 取得對應新聞資料
    const newsId = parseInt(this.$route.params.id);
    this.news = this.newsItems.find((item) => item.id === newsId) || {
      title: '找不到該新聞內容',
      date: '',
      image: 'https://via.placeholder.com/800x400',
      content: '該新聞 ID 並不存在，請返回上一頁。'
    };

    // 模擬花絮圖片集合
    if (newsId === 1) {
      this.galleryImages = [
        '/images/457637184_908398681323588_4449653877307866463_n.jpg',
        '/images/458120328_908398667990256_3199622688769587215_n.jpg',
        '/images/458185327_908398677990255_8746234735509763112_n.jpg',
        '/images/458081012_908398671323589_224513991263280234_n.jpg',
        '/images/458167345_908398684656921_8728146805578202847_n.jpg',
        '/images/457666557_908398644656925_6260077392168508241_n.jpg',
      ];
    } else if (newsId === 2) {
      this.galleryImages = [
        '/images/461465726_972367794693730_2992755355748069472_n.jpg',
        '/images/460801571_967387915191718_3400999145925684782_n.jpg',
      ];
    } else if (newsId === 3) {
      this.galleryImages = [
        '/images/459939462_963431062254070_7555007429812253129_n.jpg',
        '/images/459932861_963432638920579_4071861872479038989_n.jpg',
        '/images/460144348_963430045587505_8365317589782931566_n.jpg',
        '/images/460045569_963432522253924_5355898864072846444_n.jpg',

      ];
    } else if (newsId === 4) {
      this.galleryImages = [

      ];
    }

  },
  methods: {
    openModal(index) {
      this.currentIndex = index;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.galleryImages.length;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.galleryImages.length) % this.galleryImages.length;
    },
    setCurrentIndex(index) {
      this.currentIndex = index;
    },
    nextThumbnail() {
      if (this.thumbnailStartIndex + this.thumbnailsPerPage < this.galleryImages.length) {
        this.thumbnailStartIndex += this.thumbnailsPerPage;
      }
    },
    prevThumbnail() {
      if (this.thumbnailStartIndex - this.thumbnailsPerPage >= 0) {
        this.thumbnailStartIndex -= this.thumbnailsPerPage;
      }
    }
  }
};
</script>

<style scoped src="@/assets/css/appNewsDedetail.css"></style>