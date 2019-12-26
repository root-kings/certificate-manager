<template lang="pug">
  .home
    Navbar
    img(alt="Vue logo" src="../assets/logo.png" )
  
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "home",
  components: {
    Navbar
  }
};
</script>
