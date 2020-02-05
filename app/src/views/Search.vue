<template lang="pug">
  Layout
    .search
      section.section
        .container
          h3.light.center Download your certificates

          nav.deep-purple.rounded
            .nav-wrapper
              form
                .input-field
                  input#search(type="search" required placeholer="email" name="search")
                  label.label-icon(for="search")
                    i.material-icons search
                  i.material-icons close
      
      section.section
        .container

          .collection
            router-link.collection-item(to="/certificate/1") event 1 - date 1
            router-link.collection-item(to="/certificate/2") event 2 - date 2
            router-link.collection-item(to="/certificate/3") event 3 - date 3

              


      
  
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
  name: 'search',
  components: {
    Layout
  }
}
</script>
