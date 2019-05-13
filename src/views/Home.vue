<template>
  <div class="home">
    <HelloWorld @getprovince="getProvince" @getcity="getCity" @getcounty="getCounty" />
    <div>
        {{orderData}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
        orderData: ''
    }
  },
  methods: {
    getProvince (data) {
        console.log(data)
    },
    getCity (data) {
        console.log(data)
    },
    getCounty (data) {
        console.log(data)
    }
  }
}
</script>
<style>
    .home {
        width: 500px;
        margin: 0 auto;
    }
</style>
