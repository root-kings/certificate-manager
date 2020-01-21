<template lang="pug">
  Layout
    .dashboard
      section.section
        .container
          router-link.btn.deep-purple.darken-3(to="/dashboard/new") New Cert

      section.section
          .container
              .collection
                  router-link.collection-item(to="/dashboard/cert") cert 1
                      
                  router-link.collection-item(to="/dashboard/cert") cert 2

                  router-link.collection-item(to="/dashboard/cert") cert 3
        
  
</template>

<script>
import Layout from '@/components/Layout.vue'

export default {
  name: 'home',
  components: {
    Layout
  }
}
</script>
