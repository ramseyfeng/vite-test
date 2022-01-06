<template>
  <Comment v-for="comment in comments" :comment="comment" :key="comment.id"></Comment>
  <button @click="addCmt">addCmt</button>
  <hr>
  <Child :comments="comments"></Child>
  <button @click="updateCmt">Update</button>
</template>

<script>
import Comment from "./components/Comment";
import Child from './components/Child';
import {effect, reactive, watchEffect} from "vue";
// import {app} from "../../main";
export default {
  name: "Params",
  setup(props, ctx) {
    const comments = reactive([{id: 1, name: 'a'}, {id: 6, name: 'c'}]);
    function addCmt() {
      comments.unshift({id: comments.length + 10, name: 'k'});
    }

    function updateCmt() { // Update name will not trigger effect callback
      comments[0].name = comments[0].name + 'a';
    }

    watchEffect(() => {
      console.log("effect run");
      console.log(comments.length); // 每当name数据变化将会导致effect重新执行
    })

    return {
      comments,
      addCmt,
      updateCmt
    }
  },
  components: {Comment, Child}
}
</script>

<style scoped>

</style>