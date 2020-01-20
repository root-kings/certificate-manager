<template lang="pug">
  .home
    Navbar
    section.section
      .container
        .btn.blue Back

    section.section
      .container
        .card-panel
          h4.light Create new certificate
          .row
            .col.s12.input-field
              input#eventName(type="text" name="eventName")
              label(for="eventName") Event Name

            .col.s6.input-field
              input#eventDate(type="text" class="datepicker" name="eventDate")
              label(for="eventDate") Event Date

          .row
            .col.s3
              .card
                .card-image
                  img(src="../assets/images/office.jpg")
                  span.card-title Template
            .col.s3
              .card.active
                .card-image
                  img(src="../assets/images/office.jpg")
                  span.card-title Template
            .col.s3
              .card
                .card-image
                  img(src="../assets/images/office.jpg")
                  span.card-title Template
            .col.s3
              .card
                .card-image
                  img(src="../assets/images/office.jpg")
                  span.card-title Template

          //- .row
            .col.s6.file-field.input-field
              .btn.blue
                span File
                input(type="file")
              .file-path-wrapper
                input.file-path.validate(type="text")


          .row 
            .col.s12
              .btn.blue Create

        
  
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import M from 'materialize-css'

export default {
  name: 'home',
  components: {
    Navbar
  },
  mounted() {
    M.AutoInit()
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
