<script async setup>
import { ref } from "vue";

const loadUserData = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "Matt Maribojoc",
        pic: "https://cdn-images-1.medium.com/fit/c/100/100/2*EcZb9cndrhTF7_d74dv2Fg.png",
        bio: "I run a VueJS community over at https://learnvue.co, develop web sites, and post whatever I find cool on the Internet.",
      });
    }, 4000);
  });
};

const userData = ref(await loadUserData());
</script>

<template>
  <div class="profile-card">
    <div class="profile-image">
      <img class="profile-image__img" :src="userData.pic" />
    </div>
    <div class="profile-info">
      <span> Written By </span>
      <h3>{{ userData.name }}</h3>
      <p>{{ userData.bio }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile-card {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: #fff;
  overflow: hidden;
  position: relative;
  min-height: 150px;
}

.profile-card .profile-image__img {
  width: 10%;
  height: auto;
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: 30px;
}

.profile-card .profile-image__border {
  width: calc(10% + 20px);
  height: auto;
  position: absolute;
  top: 20px;
  left: 20px;
}

.profile-info {
  width: 85%;
  float: right;
  padding-left: 10px;
  box-sizing: border-box;
}

.profile-info span {
  text-transform: uppercase;
  color: #666;
  letter-spacing: 3px;
}

.profile-info h3 {
  margin: 10px 0;
  font-weight: 700;
  font-size: 1.5em;
  color: #222;
}

.profile-info p {
  line-height: 140%;
  color: #666;
}
</style>
