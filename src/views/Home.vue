<template>
  <div class="home">
    <p>{{serverMsg}}</p>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      serverMsg: '',
    };
  },
  async created() {
    const serverRes = await fetch('/.netlify/functions/server');
    this.serverMsg = await serverRes.text();
  },
};
</script>
