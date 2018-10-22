<template>  
  <div class="postlist">
    <div class="left"></div>
    <div class="center">center</div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.postlist {
  padding-top: 20px;
  display: grid;
  /* grid-template: "left center right"; */
  grid-template-columns: minmax(1px, 1fr)
                         minmax(300px, 800px)
                         minmax(1px, 1fr);
  color: rgb(224, 224, 224);
  background-color: hsl(54, 9%, 12%);  
}
.center {
  border: 1px black solid;
}
</style>
