<template>
  Counter Demo
  <h6>{{ msg }}</h6>
  <div>{{ count }}</div>

  <div class="flex flex-col">
    <el-button @click="inc">inc</el-button>
    <el-button @click="dec">dec</el-button>
    <div class="flex flex-row">
      <el-input v-model="tarVal"></el-input>
      <el-button @click="set(+tarVal)">set</el-button>
    </div>
    <el-button @click="reset">reset</el-button>
  </div>


</template>

<script lang="ts">
import useCount from './useCount'
import {ref} from "vue";

export default {
  name: 'CountDemo',
  props: {
    msg: String
  },
  setup() {
    const tarVal = ref(null);
    const {current: count, inc, dec, set, reset} = useCount(2, {
      min: 1,
      max: 15
    })
    const msg = ref('Demo useCount')

    return {
      tarVal,
      count,
      inc,
      dec,
      set,
      reset,
      msg
    }
  }
}

</script>

<style scoped>

</style>