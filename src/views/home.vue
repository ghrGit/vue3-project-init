<template>
  <div>home --w22</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from '../utils/axios'

export default defineComponent({
  name: 'home',
  setup() {
    axios
      .get('/users/XPoet')
      .then((res) => {
        console.log('res: ', res)
      })
      .catch((err) => {
        console.log('err: ', err)
      })
  }
})
</script>

<style lang="scss" scoped>
div {
  font-size: 20px;
}
</style>
