<template>  
  <div class="postlist">
    <div class="left"></div>
    <div class="center">
      <Posts
        v-for="article in articleList"
        :key="article"
        :articleNumber="article"
      ></Posts>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import Posts from "./Posts.vue";

export default {
  data() {
    return {
      articleList: [1, 2]
    };
  },
  components: {
    Posts
  }
};
</script>

<style>
.postlist {
  padding-top: 10px;
  padding-bottom: 20px;
  display: grid;
  grid-template-columns:
    minmax(1px, 1fr)
    minmax(300px, 800px)
    minmax(1px, 1fr);
  color: rgb(224, 224, 224);
  background-color: hsl(54, 9%, 12%);
}
</style>
