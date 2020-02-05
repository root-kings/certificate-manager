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
                input#eventName(type="text" name="eventName" :value="certificate.event.name")
                label(for="eventName") Event Name

              .col.s12.input-field
                input#eventOrganizer(type="text" name="eventOrganizer" :value="certificate.event.organizer")
                label(for="eventOrganizer") Event Organizer

              .col.s6.input-field
                input#eventDate(type="text" class="datepicker" name="eventDate" :value="certificate.event.date")
                label(for="eventDate") Event Date

            .row
              .col.s3
                .card
                  .card-image
                    img(src="/images/office.jpg")
                    span.card-title Template
              .col.s3
                .card.active
                  .card-image
                    img(src="/images/office.jpg")
                    span.card-title Template
              .col.s3
                .card
                  .card-image
                    img(src="/images/office.jpg")
                    span.card-title Template
              .col.s3
                .card
                  .card-image
                    img(src="/images/office.jpg")
                    span.card-title Template

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
import Layout from '@/components/Layout.vue'

export default {
  name: 'home',
  components: {
    Layout
  },
  data() {
    return {
      certificate: {
        event: {
          name: '',
          organizer: '',
          dat: ''
        }
      }
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
  &:hover {
    .card-image {
      img {
        filter: saturate(1.3) brightness(0.7);
      }
    }
    transform: scale(1.05);
    transition: 0.5s ease all;
  }
}
</style>
