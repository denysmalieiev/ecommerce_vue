<script setup>
import { ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import TheCard from "../../components/Card/TheCard.vue";
import NextSVG from "../../components/SvgFiles/NextSvg.vue";
import PrevSVG from "../../components/SvgFiles/PrevSvg.vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

defineProps({
  title: String,
});

const navigationPrevRef = ref(null);
const navigationNextRef = ref(null);
const modules = [Navigation];
const items = [1, 2, 3, 4, 5, 6, 7, 8];
</script>
<template>
  <div>
    <h2 class="title">{{ title }}</h2>
    <div class="carouselOffer">
      <swiper
        :modules="modules"
        :navigation="{
          prevEl: navigationPrevRef,
          nextEl: navigationNextRef,
        }"
        :breakpoints="{
          '@0.00': {
            slidesPerView: 2.3,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide v-for="item in items" :key="item">
          <TheCard :item="item" />
        </swiper-slide>
      </swiper>
      <button ref="navigationPrevRef" class="prevBtn">
        <PrevSVG />
      </button>
      <button ref="navigationNextRef" class="nextBtn">
        <NextSVG />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  font-size: 22px;
  color: #fff;
  font-weight: 700;
  margin: 25px 0;
}
.carouselOffer {
  position: relative;
  width: 100%;
  height: auto;
}

.prevBtn,
.nextBtn {
  position: absolute;
  z-index: 100;
  font-size: 16px;
  text-align: center;
  letter-spacing: normal;
  color: #000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #fff;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;

  &:disabled {
    display: none;
  }
  @media (min-width: 500px) {
    display: block;
  }
}
.prevBtn {
  left: 15px;
  @media (min-width: 900px) {
    left: 25px;
  }
}
.nextBtn {
  right: 15px;
  @media (min-width: 900px) {
    right: 25px;
  }
}
</style>
