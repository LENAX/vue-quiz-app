<template>
  <div id="app">
    <Header 
      :total_questions="total_questions"
      :correct_count="correct_count"
    />
    <QuestionBox
      v-if="question_list.length"
      :current_question="question_list[index]"
      :next="next"
      :correct_count="correct_count"
      :increase_correct_count="increase_correct_count"
    />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'


export default {
  name: 'app',
  components: {
    Header,
    QuestionBox
  },
  data() {
    return {
      question_list: [],
      index: 0,
      total_questions: 0,
      correct_count: 0
    }
  },
  methods: {
    next() {
      if (this.index < this.total_questions - 1) {
        this.index++
      }
    },
    increase_correct_count() {
      this.correct_count++
    }
  },
  mounted: function() {
    this.axios.get(
      'https://opentdb.com/api.php?amount=10'
    ).then((response) => {
      this.question_list = response.data.results
      this.total_questions = response.data.results.length
    })
  }
}
</script>

<style>
  @import "assets/css/style.css"
</style>