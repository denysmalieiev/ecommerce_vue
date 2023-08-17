<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const modules = [Pagination, Navigation];

import Container from '../../components/Container.vue';

console.log('home banner');
</script>

<template>
  <Container>
    <div class="parent">
      <swiper
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide
        ><swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide
        ><swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide
        ><swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
      </swiper>
    </div>
  </Container>
</template>

<style lang="scss">
.parent {
  position: relative;
  height: 50vh;
  margin-top: 20px;
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
