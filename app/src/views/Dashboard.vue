<template lang="pug">
  Layout
    .dashboard
      section.section
        .container
          router-link.btn.deep-purple.darken-3(to="/dashboard/certificate/new") New Certificate

      section.section
        .container
          .collection
            router-link.collection-item(v-for="certificate in certificates" :key="certificate._id" :to="'/dashboard/certificate/'+certificate._id") {{ certificate.title }} - {{ certificate.date }}
                
</template>

<script>
import Layout from '@/components/Layout.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    Layout
  },
  data() {
    return { certificates: [] }
  },
  mounted() {
    this.fetchCertificates()
  },

  methods: {
    fetchCertificates() {
      axios
        .get(process.env.VUE_APP_API_ENDPOINT + '/certificate/dashboard')
        .then(response => (this.certificates = response.data))
    }
  }
}
</script>
