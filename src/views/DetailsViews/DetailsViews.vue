<script setup>
import TheContainer from "../../components/TheContainer.vue";
</script>

<template>
  <TheContainer>
    <div class="content">
      <div class="image">
        <img src="https://ecommerce-netlify.netlify.app/products/5.png" />
      </div>
      <div class="info">
        <h2 class="title">Lorem ipsum</h2>
        <h4 class="text">Price: 40$</h4>
        <p class="subText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          autem, et deserunt vero ipsum harum quas nostrum doloribus voluptas
          reprehenderit voluptatem nemo, libero blanditiis accusantium.
        </p>
        <p class="subText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          autem, et deserunt vero ipsum harum quas nostrum doloribus voluptas
          reprehenderit voluptatem nemo, libero blanditiis accusantium.
        </p>
        <p class="subText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          autem, et deserunt vero ipsum harum quas nostrum doloribus voluptas
          reprehenderit voluptatem nemo, libero blanditiis accusantium.
        </p>
        <p class="subText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
          autem, et deserunt vero ipsum harum quas nostrum doloribus voluptas
          reprehenderit voluptatem nemo, libero blanditiis accusantium.
        </p>
      </div>
    </div>
  </TheContainer>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: row;
  }
}

.image,
.info {
  width: 100%;
  padding: 10px;

  @media (min-width: 500px) {
    width: 50%;
    padding: 20px;
  }
}

.image {
  width: 100%;

  @media (min-width: 500px) {
    width: 40%;
    padding: 20px;
    text-align: center;
  }

  img {
    width: 100%;
  }
}

.info {
  width: 100%;

  @media (min-width: 500px) {
    padding: 20px 0 20px 20px;
  }
}

.title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 25px;
}

.text {
  font-size: 22px;
  margin-bottom: 15px;
}

.subText {
  font-size: 16px;
}
</style>
