<template>
  <div>{{inputVal}}</div>
  <div>origin title {{title}}</div>
  <div>renameTitle {{renameTitle}}</div>
</template>

<script lang="ts">
import {getReactiveInput} from "@/pages/VModelPage/hooks/helper";

export default {
  name: "MyComputedComponent",
  props: ['title'],
  emits: ['updateTitleAgain'],
  setup(props, ctx) {
    const inputVal = getReactiveInput(props, 'a');
    let renameTitle = props.title;
    console.log(renameTitle);
    return {
      inputVal,
      renameTitle
    }
  }
}
</script>

<style scoped>
</style>
