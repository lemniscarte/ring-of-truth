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
  props: ["articleNumber"],
  mounted: function() {
    this.$nextTick(function() {
      this.fetchMarkdown();
    });
  },
  methods: {
    fetchMarkdown() {
      fetch(this.baseUrl + this.$props.articleNumber + ".md")
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
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  background-color: rgba(0, 0, 0, 0.397);
  color: hsla(56, 56%, 90%, 0.822);
  text-align: left;
  padding: 8px;
  font-size: 16px;
  padding-left: 18px;
  margin-bottom: 20px;
  line-height: 1.5;
}

.postbg h4 {
  font-style: italic;
  color: hsl(56, 56%, 90%);
  letter-spacing: 2.5px;
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
