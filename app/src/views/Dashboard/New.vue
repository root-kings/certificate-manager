<template lang="pug">
  Layout
    .new
      //- section.section
        .container
          .btn.deep-purple.darken-3 Back

      section.section
        .container
          .card-panel
            .row
              .col.s12
                h4 Create new certificate
            .row
              .col.s12.input-field
                input#eventName(type="text" name="eventName" :value="certificate.event")
                label(for="eventName") Event Name

              .col.s12.input-field
                input#eventOrganizer(type="text" name="eventOrganizer" :value="certificate.organizer")
                label(for="eventOrganizer") Event Organizer

              .col.s6.input-field
                input#eventDate(type="text" class="datepicker" name="eventDate" :value="certificate.date")
                label(for="eventDate") Event Date

            .row
              .col.s3(v-for="template in templates" :key="template._id" )
                .card(:class="[certificate.template == template._id ? 'active': '']" @click="selectTemplate(template._id)")
                  .card-image
                    img(:src="template.image")
                    span.card-title {{ template.title }}
              

            .row
              h4.light.col.s12 Template Options
              
              h5.light.col.s12 Logo
              .col.s12
                .card-panel
                  p logo upload
              
              
              h5.light.col.s12 Dignitories

              .input-field.col.s6
                input#digName(type="text")
                label(for="digName") Name
              .input-field.col.s6
                input#digpos(type="text")
                label(for="digpos") Position

              .col.s12
                .btn.deep-purple-text.btn-flat.waves-effect.waves-purple Add Dignitory

            

            .row 
              .col.s12
                .btn.deep-purple.darken-3 Create

          
    
</template>

<script>
// @ is an alias to /src
import M from 'materialize-css'
import axios from 'axios'
import Layout from '@/components/Layout.vue'

export default {
  name: 'home',
  components: {
    Layout
  },
  data() {
    return {
      templates: [],
      templateConfig: {},
      certificate: {
        event: '',
        title: '',
        organizer: '',
        date: '',
        template: ''
      }
    }
  },
  mounted() {
    this.fetchTemplates()
    this.fetchCertificate()
  },
  updated() {
    M.updateTextFields()
  },
  methods: {
    fetchTemplates() {
      axios
        .get(process.env.VUE_APP_API_ENDPOINT + '/certificate/templates')
        .then(response => (this.templates = response.data))
    },
    fetchCertificate() {
      axios
        .get(process.env.VUE_APP_API_ENDPOINT + '/certificate/details/0')
        .then(response => (this.certificate = response.data))
    },
    selectTemplate(templateId) {
      this.certificate.template = templateId
    },
    fetchTemplateConfig(templateId) {
      axios
        .get(
          process.env.VUE_APP_API_ENDPOINT +
            `/certificate/template/${templateId}/config`
        )
        .then(response => (this.templateConfig = response.data))
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &.active {
    .card-image {
      img {
        filter: saturate(1.5) brightness(0.5);
      }
    }
    transform: scale(1.1);
    transition: 0.5s ease all;
  }
  &:not(.active):hover {
    .card-image {
      img {
        filter: saturate(1.3) brightness(0.7);
      }
    }
    transform: scale(1.05);
    transition: 0.5s ease all;
  }
}

// .materialboxed.active{
//   z-index: 99;
// }
</style>
