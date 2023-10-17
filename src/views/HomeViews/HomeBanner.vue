<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import NextSVG from "../../components/SvgFiles/NextSvg.vue";
import PrevSVG from "../../components/SvgFiles/PrevSvg.vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { HomeApi } from "../../http/home-api";
import HomeBannerSkeleton from "./HomeBannerSkeleton.vue";

const modules = [Autoplay, Pagination, Navigation];

onMounted(async () => {
  status.value = "loading";
  const res = await HomeApi.homeBanners();
  banners.value = res.data;
  status.value = "success";
});

const banners = ref([]);
const status = ref("");
const progressCircle = ref(null);
const progressContent = ref(null);
const navigationPrevRef = ref(null);
const navigationNextRef = ref(null);

const router = useRouter();

const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.value.style.setProperty("--progress", 1 - progress);
  progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
};

const handleClick = () => {
  router.push("/details/351735");
};
</script>

<template>
  <div class="parent">
    <template v-if="status === 'loading'">
      <HomeBannerSkeleton />
    </template>
    <template v-else>
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
        <swiper-slide v-for="item in banners" :key="item.id">
          <img :src="item.src" alt="banner" @click="handleClick" />
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
        <PrevSVG />
      </button>
      <button ref="navigationNextRef" class="nextBtn">
        <NextSVG />
      </button>
    </template>
  </div>
</template>

<style scoped lang="scss">
.parent {
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 13/6;

  @media (min-width: 560px) {
    aspect-ratio: 7/3;
  }
  @media (min-width: 920px) {
    aspect-ratio: 8/3;
  }
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
