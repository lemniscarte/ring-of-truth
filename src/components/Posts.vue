<template>
  <Foldable>
    <div class="postbg"
         v-html="postInput"
    ></div>
  </Foldable> 
</template>

<script>
import marked from "marked";
marked.setOptions({
  gfm: true,
  breaks: true
});

import Foldable from "./Foldable.vue";

export default {
  data() {
    return {
      postInput: "Loading...",
      baseUrl:
        "https://raw.githubusercontent.com/lemniscarte/ring-of-truth/master/src/assets/"
    };
  },
  components: {
    Foldable
  },
  props: ["articleNumber"],
  mounted: function() {
    this.fetchMarkdown();
  },
  methods: {
    fetchMarkdown() {
      fetch(this.baseUrl + this.articleNumber + ".md")
        .then(this.handleErrors)
        .then(response => response.text())
        .then(rawMD => marked(rawMD))
        .then(convertedMD => (this.postInput = convertedMD))
        // .then(data => console.log(data))
        .catch(error => (this.postInput = "" + error))
        .then();
    },
    handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  }
};
</script>

<style>
.postbg {
  border-top-right-radius: 30px;
  background-color: rgba(0, 0, 0, 0.397);
  color: hsla(56, 56%, 90%, 0.822);
  text-align: left;
  line-height: 1.5;
  font-size: 20px;
  padding: 8px;
  padding-left: 18px;
  margin-top: 40px;
  /* box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.774); */
}

.postbg h2 {
  color: hsl(56, 56%, 90%);
  letter-spacing: 4px;
  font-size: 24px;
  font-family: "Abel";
}

.postbg h4 {
  color: hsla(56, 54%, 90%, 0.473);
  text-align: right;
  font-size: 14px;
  position: relative;
  left: -20px;
  top: -20px;
}

.postbg a {
  text-decoration: underline;
  letter-spacing: 2.5px;
  color: rgba(255, 196, 196, 0.788);
  font-weight: bold;
}

.postbg a:hover {
  background-color: black;
}
</style>
