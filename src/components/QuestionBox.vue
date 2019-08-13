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
                v-for="(answer, index) in shuffled_answers"
                :key="index"
                @click.prevent="select_answer(index)"
                :class="get_select_class(index)"
              >
                {{ answer }}
              </b-list-group-item>
            </b-list-group>
            <hr class="my-3">
            <b-button variant="primary">Submit</b-button>
            <b-button 
              variant="success"
              @click="next"
            >
              Next
            </b-button>
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
      current_question: Object,
      next: Function
    },
    data: function() {
      return {
        selected_index: null,
        correctIndex: null,
        shuffled_answers: [],
        answered: false
      }
    },
    methods: {
      select_answer(index) {
        this.selected_index = index
      },
      get_select_class(index) {
        let element_class = ''

        if (!this.answered && this.selected_index === index) {
          element_class = "selected"
        } else if (this.answered && index === this.correctIndex) {
          element_class = "correct"
        } else if (this.answered && 
                   this.selected_index === index &&
                   this.correctIndex !== index) {
          element_class = "incorrect"
        }

        return element_class
      },
      shuffle_answers() {
        let answers = [...this.current_question.incorrect_answers,
                       this.current_question.correct_answer]
        this.shuffled_answers = _.shuffle(answers)
        this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)
      }
    },
    watch: {
      current_question: {
        immediate: true,
        handler() {
          this.selected_index = null
          this.answered = false
          this.shuffle_answers()
        }
      }
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

  .list-group-item:hover {
    background: #e0e0e0;
  }

  .selected {
    background-color: #80deea !important;
  }

</style>



