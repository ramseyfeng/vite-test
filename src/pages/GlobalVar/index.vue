<template>
  GlobalVar {{a}}
</template>

<script>
import {inject} from "vue";

export default {
  name: "GlobalVar",
  setup() {
    let a = inject('myGlobalVariable');
    return {a};
  }
}
</script>

<style scoped>

</style>