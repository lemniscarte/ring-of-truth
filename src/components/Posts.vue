<template>
  <div class="postbg"
       v-html="postInput"
  ></div>
</template>

<script>
import marked from "marked";

export default {
  data() {
    return {
      postInput: "Loading..."
    };
  },
  // computed: {
  //   compiledMarkdown() {
  //     return marked(this.postInput);
  //   }
  // },
  methods: {
    fetchMarkdown() {
      fetch(
        "https://raw.githubusercontent.com/lemniscarte/ringoftruth/master/1.md"
      )
        .then(response => response.text())
        .then(rawMD => marked(rawMD))
        .then(convertedMD => (this.postInput = convertedMD))
        .then(data => console.log(data))
        .then();
    },
    putIn() {
      this.postInput = this.getMarkdown();
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: unset;
}
.postbg {
  /* background-color: black; */
  color: #f4f2d8;
  text-align: left;
  padding: 8px;
}
</style>
