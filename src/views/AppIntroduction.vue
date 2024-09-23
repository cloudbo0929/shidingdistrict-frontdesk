<template>
  <div class="introduction">
    <div class="tabs">
      <button 
        v-for="(section) in sections" 
        :key="section.id" 
        class="tab" 
        :class="{ active: activeSection === section.id }"
        @click="scrollToSection(section.id)"
      >
        {{ section.tabName }}
      </button>
    </div>

    <SectionComponent
      v-for="section in sections"
      :key="section.id"
      :section="section"
      :mascotImage="mascotImage"
    />
  </div>
</template>

<script>
import SectionComponent from "@/components/SectionComponent.vue";

export default {
  name: "AppIntroduction",
  components: { SectionComponent },
  data() {
    return {
      mascotImage: require("@/assets/images/mascot.png"),
      activeSection: 'section1',
      sections: [
        {
          id: 'section1',
          tabName: '簡介',
          title: '關於石碇集順廟',
          content: [
            '石碇集順廟，又稱雙忠廟、尪公廟、仙公廟等，是石碇地區居民的信仰中心，為當地最悠久的寺廟之一，也是石碇的重要地標。廟宇建立於清道光十八年（1838年），主祀雙忠(保儀尊王及保儀大夫)。',
            '後於日治初期由中醫醫師「呂林烏木」見廟宇傾斜重建廟宇並建立二樓明德宮以，主祀呂純陽祖師（呂洞賓），由木柵指南宮分香而來。(保儀尊王及保儀大夫)。',
            '集順廟在茶葉興盛的日治時期是茶葉交易中心，廟埕曾是石碇、坪林、平溪、深坑、宜蘭等鄉鎮居民交流的場所，具有重要的歷史和文化意義。(保儀尊王及保儀大夫)。'
          ],
          image: require("@/assets/images/introduction/info.png"),
        },
        {
          id: 'section2',
          tabName: '歷史',
          title: '集順廟歷史',
          content: [
            '集順廟原創建於1838年整座建築以木構造為主，寺廟原建築以木頭構造為主，十分古色古香，但在歲月洗禮下，集順廟歷經多次修建，後於 1989 年改建為現今的兩層樓鋼筋混凝建築，改建後的廟貌華麗卻失去古意。',
            '石碇位於新北市山區，因地理環境及交通因素限制，工商業並不發達，清康熙年多以農業為主。由於開墾過程艱辛，相傳，保儀尊王可以保祐開墾山坡地順利平安因此一樓供奉保儀尊王。',
            '日治時期日本人以及台灣礦業鉅子合資在石碇設立「台北炭礦株式會社」，石碇居民原有的農耕生活型態開始了重大的改變，信仰也隨即改變。石碇成為北部煤礦產區，而呂洞賓則是被煤礦業者視為保護的神祇並在二樓明德宮供奉孚佑帝君（呂洞賓）。'
          ],
          image: require("@/assets/images/introduction/history.png"),
        },
        {
          id: 'section3',
          tabName: '神祇',
          title: '供奉神祇',
          content: [
            '一樓集順廟主祀雙忠(保儀尊王及保儀大夫) ，保儀尊王、保儀大夫二人為唐朝安史之亂時的張巡、許遠。唐朝安祿山造反時，許遠和張巡起兵討伐。一年，賊兵用十三萬大軍把尹子奇押在睢陽，張巡和許遠仍堅守孤城，但最後仍因饑餓而為國犧牲，於是大家便為這兩位忠臣建廟。後民間尊張巡為「保儀尊王」，許遠為「保儀大夫」。',
            '集順廟的保儀尊王在唐末黃巢之亂時保護了高、張、林三姓，後來他們來台開墾時仍信奉此神，因此神威顯赫聲名遠播。',
            '一樓主神龕前神桌供奉觀音佛祖、中壇元帥、司命灶君、福德正神，龍邊神龕奉祀關聖帝君，虎邊神龕奉祀天上聖母，兩側還有祀千里眼將軍及順風耳將軍。',
            '二樓明德宮主祀孚佑帝君(呂洞賓) 即八仙裡的呂洞賓，又稱「純陽祖師」、「呂仙公」、「呂祖」等，亦簡稱仙公。屬於五文昌之一，是醫藥、製墨等行業的守護神，也常被煤礦業者視為保祐他們的神祇。',
            '二樓主神龕前神桌供奉太上感應篇神位，龍邊神龕奉祀王靈天君，虎邊神龕奉祀張大帝。'
          ],
          image: require("@/assets/images/introduction/worship.png"),
        },
      ],
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => observer.observe(section));
  },
  methods: {
    scrollToSection(sectionId) {
      this.activeSection = sectionId;
      const section = document.getElementById(sectionId);
      section.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped src="@/assets/css/appIntroduction.css"></style>
