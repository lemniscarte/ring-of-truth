<template>
  <div class="title">
    <div class="spacer"></div>
    <div class="logo">
      <div class="wrapper">
        <h1>ring of truth</h1>
      </div>
    <div class="spacer"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.title {
  padding: 20px;
  margin-top: 20px;
  border-bottom: 1px darkorange solid;
  letter-spacing: 2px;
  font-size: 8px;
  display: grid;
  grid-template-columns: 10fr 1fr 10fr;
}
.logo {
  display: table;
  width: 200px;
  height: 200px;
  /* border: 1px solid firebrick; */
  border-radius: 100%;
  background-color: rgba(178, 120, 34, 0.062);
  box-shadow: 2px 2px 2px 2px rgba(223, 194, 151, 0.445);
}
.wrapper {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  text-shadow: 2px 2px 2px black;
}
</style>
