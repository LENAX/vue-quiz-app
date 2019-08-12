<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <b-col cols="6">
          <div class="mt-3"></div>
          <b-jumbotron>
            <template slot="lead">{{ current_question.question }}</template>
            <hr class="my-2">
            <b-list-group>
              <b-list-group-item
                v-for="(answer, index) in answers"
                :key="index"

              >
                {{ answer }}
              </b-list-group-item>
            </b-list-group>
            <hr class="my-3">
            <b-button variant="primary" href="#">Submit</b-button>
            <b-button variant="success" href="#">Next</b-button>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    props: {
      current_question: Object
    },
    computed: {
      answers() {
        let answers = [...this.current_question.incorrect_answers]
        answers.push(this.current_question.correct_answer)
        return answers
      }
    }
  }
</script>

<style>
  .btn {
    margin: 0 5px;
  }

</style>



