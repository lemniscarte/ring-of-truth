<template>
  <div v-html="compiledMarkdown"></div>
</template>

<script>
import marked from "marked";

export default {
  data() {
    return {
      postInput: '### null'
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.postInput);
    }
  },
  methods: {
    getMarkdown() {
      async function loadPost() {
        let getData = fetch('https://raw.githubusercontent.com/markedjs/marked/master/README.md')
        let data = await getData;
        console.log(data);
        let dataText = await data.text();
        let converted = await marked(dataText);
        console.log(converted);        
        return await converted
      }
      return loadPost();
    }
  },
  // created: this.getMarkdown()
  // created: function() {
  //   console.log('created');
  //   console.log(this.getMarkdown());    
  // }
}
</script>

<style scoped>
h1 {
  font-size: unset;
}
</style>
