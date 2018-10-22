<template>
  <div id="app">
    <Header/>
    <PostList>
      <Posts/>
    </PostList>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PostList from "./components/PostList.vue";
import Posts from "./components/Posts.vue";

export default {
  name: "app",
  components: {
    Header,
    PostList,
    Posts
  }
};
</script>

<style>
</style>
