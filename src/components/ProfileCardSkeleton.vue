<template>
  <div class="profile-card">
    <div class="profile-image">
      <!-- <img class="profile-image__border" src="../assets/photo.jpeg" /> -->
      <img class="profile-image__img" />
    </div>
    <div class="profile-info">
      <span />
      <h3 />
      <p />
    </div>
  </div>
</template>

<style scoped>
.profile-card .profile-image__img {
  width: 10%;
  padding-top: 10%;
  border-radius: 50%;
  background-color: #ddd;
}

.profile-info span {
  min-width: 100px;
  height: 16px;
  display: inline-block;
  background-color: #ddd;
}

.profile-info h3 {
  content: " ";
  width: 250px;
  height: 24px;
  background-color: #ddd;
  margin: 10px 0;
}

.profile-info p {
  width: 80%;
  background-color: #ddd;
  height: 16px;
  line-height: 140%;
}
</style>
