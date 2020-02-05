<template lang="pug">
  Layout
    .login
      section.section
          .container
              .row
                .col.s12.m8.offset-m2
                  .card-panel      

                    form.row
                      .col.s12.input-field
                        <input placeholder="Placeholder" id="first_name" type="text" class="validate">
                        <label for="first_name">First Name</label>
  
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
