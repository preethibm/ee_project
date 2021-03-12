<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import a from './components/header.vue'
import b from './components/contact.vue'
import c from './components/about.vue'
import d from './components/cities.vue'
import e from './components/footer.vue'
import f from './components/bangalore.vue'


export default {
  components:{
    'app-header':a,
    'app-contact':b,
    'app-about':c,
    'app-cities':d,
    'app-footer':e
  },
  data () {
    return {
      
    }
  },
  computed:{
    s:function(){
      this.show=true
    }
  }
}
</script>

<style>

</style>
