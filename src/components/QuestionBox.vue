<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <b-col cols="6">
          <div class="mt-3"></div>
          <b-jumbotron>
            
            <template slot="lead">
              <h5 class="pull-left">Question: {{index+1}}</h5>
              {{ current_question.question }}
            </template>
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
            <b-button 
              variant="primary"
              @click="check_submission"
              :disabled="answered || selected_index === null"
            >
              Submit
            </b-button>
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
  
  import { BContainer } from 'bootstrap-vue'
  import { BRow } from 'bootstrap-vue'
  import { BCol } from 'bootstrap-vue'
  import { BListGroup } from 'bootstrap-vue'
  import { BListGroupItem } from 'bootstrap-vue'
  import { BJumbotron } from 'bootstrap-vue'
  import { BButton } from 'bootstrap-vue'

  export default {
    components: {
      BContainer,
      BRow,
      BCol,
      BListGroup,
      BListGroupItem,
      BJumbotron,
      BButton
    },
    props: {
      current_question: Object,
      next: Function,
      increase_correct_count: Function,
      correct_count: Number,
      index: Number,
      question_loading: Boolean
    },
    data: function() {
      return {
        selected_index: null,
        correct_index: null,
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
        } else if (this.answered && index === this.correct_index) {
          element_class = "correct"
        } else if (this.answered && 
                   this.selected_index === index &&
                   this.correct_index !== index) {
          element_class = "incorrect"
        }

        return element_class
      },

      shuffle_answers() {
        let answers = [...this.current_question.incorrect_answers,
                       this.current_question.correct_answer]
        this.shuffled_answers = _.shuffle(answers)
        this.correct_index = this.shuffled_answers.indexOf(this.current_question.correct_answer)
      },

      check_submission() {
        this.answered  = this.selected_index !== null
        if (this.answered) {
          let answer_correct = this.selected_index === this.correct_index
          if (answer_correct) {
            this.increase_correct_count()
          }
        }
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


