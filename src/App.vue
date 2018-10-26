<template>
  <div id="app">
    <Header/>
    <PostList/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import PostList from "./components/PostList.vue";

export default {
  name: "app",
  components: {
    Header,
    PostList
  }
};
</script>

<style>
::selection {
  color: #fff;
  background-color: #111110;
}

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic");

body {
  margin: 0;
  padding: 0;
  background-color: hsl(54, 9%, 12%);
}

#app {
  font-family: "Didact Gothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f4f2d8;
  background-color: #3e3d34;
  letter-spacing: 1.6px;
}
</style>
