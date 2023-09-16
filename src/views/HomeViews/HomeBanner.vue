<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const modules = [Pagination, Navigation];

import Container from "../../components/Container.vue";

const swiperItems=[1,2,3,4,5];
const imgUrl="https://wallpapers.com/images/hd/hd-river-in-the-mountains-kgb9wrcm1wmrfa5m.webp";
</script>

<template>
    <div class="parent">
      <swiper
:space-between="30" :pagination="{
        clickable: true,
      }" :modules="modules" class="mySwiper">
      <swiper-slide v-for="item in swiperItems" :key="item">
      <img :src="imgUrl" alt=""/>
      </swiper-slide>
      </swiper>
    </div>
</template>

<style lang="scss">
.parent {
  position: relative;
  height: 30vh;
  @media (min-width: 560px) {
    height: 40vh;
  }
  @media (min-width: 700px) {
    height: 50vh;
  }
  @media (min-width: 900px) {
    height: 65vh;
  }
  @media (min-width: 1200px) {
    height: 75vh;
  }
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
