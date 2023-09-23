<script setup>
import { ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import HomeBannerUrl from "../../assets/home-banner.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Autoplay, Pagination, Navigation];
const swiperItems = [1, 2, 3, 4, 5];
const progressCircle = ref(null);
const progressContent = ref(null);

const navigationPrevRef = ref(null);
const navigationNextRef = ref(null);

const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.value.style.setProperty("--progress", 1 - progress);
  progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
};
</script>

<template>
  <div class="parent">
    <swiper
      :space-between="30"
      :centered-slides="true"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="{
        prevEl: navigationPrevRef,
        nextEl: navigationNextRef,
      }"
      :modules="modules"
      class="mySwiper"
      @autoplayTimeLeft="onAutoplayTimeLeft"
    >
      <swiper-slide v-for="item in swiperItems" :key="item">
        <img :src="HomeBannerUrl" alt="banner" />
      </swiper-slide>
      <template #container-end>
        <div class="autoplay-progress">
          <svg ref="progressCircle" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref="progressContent"></span>
        </div>
      </template>
    </swiper>
    <button ref="navigationPrevRef" class="prevBtn">
      <svg
        data-v-46bd6466=""
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.8106 20.4983C16.0857 20.1887 16.0579 19.7146 15.7483 19.4394L7.8789 12L15.7483 4.56055C16.0579 4.28536 16.0857 3.81131 15.8106 3.50172C15.5354 3.19213 15.0613 3.16425 14.7517 3.43944L6.25173 11.4394C6.09161 11.5818 6 11.7858 6 12C6 12.2142 6.09161 12.4182 6.25173 12.5605L14.7517 20.5605C15.0613 20.8357 15.5354 20.8079 15.8106 20.4983Z"
          fill="black"
        ></path>
      </svg>
    </button>
    <button ref="navigationNextRef" class="nextBtn">
      <svg
        data-v-46bd6466=""
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.18945 20.4983C7.91426 20.1887 7.94215 19.7146 8.25174 19.4394L16.1211 12L8.25173 4.56055C7.94215 4.28536 7.91426 3.81131 8.18945 3.50172C8.46464 3.19213 8.93869 3.16425 9.24828 3.43944L17.7483 11.4394C17.9084 11.5818 18 11.7858 18 12C18 12.2142 17.9084 12.4182 17.7483 12.5605L9.24828 20.5605C8.93869 20.8357 8.46464 20.8079 8.18945 20.4983Z"
          fill="black"
        ></path>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.parent {
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 16.5/6;

  @media (min-width: 560px) {
    aspect-ratio: 3/1;
  }
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
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
.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: red;
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: red;
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
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
