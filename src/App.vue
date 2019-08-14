<template>
  <div id="app">
    <Header 
      :total_questions="total_questions"
      :correct_count="correct_count"
    />
    <Spinner v-if="question_loading" />
    <QuestionBox
      v-if="!question_loading"
      :current_question="question_list[index]"
      :next="next"
      :correct_count="correct_count"
      :increase_correct_count="increase_correct_count"
      :index="index"
      :question_loading="question_loading"
    />
  </div>
</template>

<script>

import Spinner from './components/Spinner.vue'
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'


export default {
  name: 'app',
  components: {
    Header,
    QuestionBox,
    Spinner
  },
  data() {
    return {
      question_list: [],
      index: 0,
      total_questions: 0,
      correct_count: 0,
    }
  },
  methods: {
    next() {
      if (this.index < this.total_questions) {
        this.index++
      } 

      if (this.index >= this.total_questions) {
        this.fetch_questions()
      }
    },
    increase_correct_count() {
      this.correct_count++
    },
    fetch_questions() {
      fetch("https://opentdb.com/api.php?amount=10", {
        method: 'get'
      }).then((response) => {
        return response.json()
      }).then((jsonData) => {
        jsonData.results.forEach((data) => {
          this.question_list.push(data)
        })
        this.total_questions = this.question_list.length
      })
    }
  },
  computed: {
    question_loading() {
      let loading = this.index >= this.total_questions
      return loading
    }
  },
  mounted: function() {
    this.fetch_questions()
  }
}
</script>

<style>
  @import "assets/css/style.css"
</style>