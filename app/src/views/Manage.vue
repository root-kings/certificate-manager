<template lang="pug">
  Layout
    .manage
      section.section
        .container
          
          h4.light Cert Title
          router-link.btn.deep-purple.darken-3(to="/dashboard/certificate/new") Edit Cert

      section.section
        .container
          h4.light Participants
          .collection
            a.collection-item person 1
                
            a.collection-item person 2

            a.collection-item person 3
  

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
