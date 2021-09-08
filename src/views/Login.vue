/* eslint-disable no-undef */
/* eslint-disable no-undef */
<template>
  <div>
    <input type="text" v-model="phone" />
    <button @click="getVerify(phone)">login</button>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { getCode, banner } from '@/api/index.js'
export default {
  name: 'my-login',
  data () {
    return {
      phone: 17762104354
    }
  },
  methods: {
    getVerify () {
      banner().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
