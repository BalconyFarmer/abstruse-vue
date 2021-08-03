<template>
  <div>
    <div>cnpm install abstruse-vue --save</div>
    <div>import {PictureTree, ScrollTable} from 'abstruse-vue';</div>
    <div>import 'abstruse-vue/lib/index.css'</div>
    <div>Vue.use(PictureTree)</div>
    <div>Vue.use(ScrollTable)</div>
    <div>
      {{ str }}
    </div>
    <div>......</div>
  </div>
</template>

<script>
export default {
  name: "A_0Init.vue",
  data() {
    return {
      str: "<PictureTree></PictureTree>"
    }
  }
}
</script>

<style scoped lang="scss">
div {
  color: white;
  text-align: left;
}

</style>
