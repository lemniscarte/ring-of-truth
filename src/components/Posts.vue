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
      postInput: "Loading...",
      baseUrl:
        "https://raw.githubusercontent.com/lemniscarte/ring-of-truth/master/src/assets/"
    };
  },
  mounted: function() {
    this.$nextTick(function() {
      this.fetchMarkdown();
    });
  },
  methods: {
    fetchMarkdown() {
      fetch(this.baseUrl + "1.md")
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

<style>
.postbg {
  background-color: rgba(0, 0, 0, 0.123);
  color: #f4f2d8;
  text-align: left;
  padding: 8px;
  font-size: 16px;
}

.postbg h4 {
  font-style: italic;
  color: hsl(56, 56%, 100%);
  letter-spacing: 2.5px;
}
</style>
