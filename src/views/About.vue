<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button @click="AddCount" type="primary">{{count}}</Button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'about',
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapActions(['AddCount'])
  }
}
</script>
