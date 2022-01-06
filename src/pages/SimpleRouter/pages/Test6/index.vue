<template>
  <div class="container">
    <div><button @click="inc(this)">add</button></div>
    <div>simple6</div>
    <div>simple6</div>
    <div>{{count}}</div>
    <div>simple6</div>
    <div>simple6</div>
    <div>simple6</div>
    <div>simple6</div>
    <div>simple6</div>
    <div>simple6</div>
  </div>
</template>

<script>
import {ref} from "vue";

export default {
  name: "Test6",
  setup() {
    let count = ref(6);
    const inc = function (ele) {
      this.count++;
      console.log(this.count);
      console.log(count);
      console.log(ele);
    }
    return {
      inc,
      count
    }
  }
}
</script>

<style scoped lang="scss">
  .container {
    width: 600px;
    height: 600px;
    background-color: yellow;
  }
</style>