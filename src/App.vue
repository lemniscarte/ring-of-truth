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
@import url("https://fonts.googleapis.com/css?family=Didact+Gothic");
@import url("https://fonts.googleapis.com/css?family=Abel");

::selection {
  color: #fff;
  background-color: #111110;
}

html {
  overflow-y: overlay;
  width: 100vw;
}

body {
  margin: 0;
  padding: 0;
  background-color: hsl(54, 9%, 12%);
}

#app {
  font-family: "Abel", "Didact Gothic", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2b2a2465;
  letter-spacing: 1.6px;
}
</style>
