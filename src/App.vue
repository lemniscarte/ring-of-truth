<template>
  <div id="app">
    <Header/>
    <PostList>
    </PostList>
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
  background-color: #3e3d34;
}

@import url("https://rsms.me/inter/inter-ui.css");

body {
  margin: 0;
  padding: 0;
  background-color: hsl(54, 9%, 12%);
}

#app {
  font-family: "Inter UI", sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f4f2d8;
  background-color: #3e3d34;
  font-kerning: normal;
}
</style>
