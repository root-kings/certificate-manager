<template lang="pug">
  .navbar-fixed
    nav.white.z-depth-0
      .nav-wrapper
        .container
          router-link.brand-logo.deep-purple-text.text-darken-3.light(to="/") Certificate Manager
          ul#nav-mobile.right.hide-on-med-and-down
            li
              router-link.black-text.light(to="/dashboard") Dashboard
            li
              router-link.black-text.light(to="/about") About
            li
              router-link.black-text.light(to="login") Login
      .divider


</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'materialize-css/sass/materialize.scss';

@media only screen and (min-width: 601px) {
  nav,
  nav .nav-wrapper i,
  nav a.sidenav-trigger,
  nav a.sidenav-trigger i {
    height: 48px;
    line-height: 48px;
  }
}
nav {
  color: #fff;
  background-color: #ee6e73;
  width: 100%;
  height: 48px;
  line-height: 48px;
}

.router-link-active {
  color: color('deep-purple', 'darken-1') !important;
}
</style>
