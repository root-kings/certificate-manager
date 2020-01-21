<template lang="pug">
  .navbar-fixed
    nav.white.z-depth-0
      .nav-wrapper
        .container
          router-link.brand-logo.deep-purple-text.text-darken-3(to="/") Certificate Manager
          ul#nav-mobile.right.hide-on-med-and-down
            li
              router-link.deep-purple-text.text-darken-3(to="/dashboard") Dashboard
            li
              router-link.deep-purple-text.text-darken-3(to="/about") About
            li
              router-link.deep-purple-text.text-darken-3(to="login") Login


</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
