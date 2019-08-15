<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <b-col cols="6">
          <div class="mt-3"></div>
          <b-jumbotron>
            <template>
              <b-row class="justify-content-md-center">
                <b-col cols="12">
                  <h2>Questions Loading ... </h2>
                </b-col>
              </b-row>
              <b-row class="justify-content-md-center">
                <b-col cols="12">
                  <b-spinner label="Loading..."></b-spinner>
                </b-col>
              </b-row>
            </template>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import { BContainer } from 'bootstrap-vue'
  import { BRow } from 'bootstrap-vue'
  import { BCol } from 'bootstrap-vue'
  import { BSpinner } from 'bootstrap-vue'

  export default {
    components: {
      BContainer,
      BRow,
      BCol,
      BSpinner
    }
  }

</script>






