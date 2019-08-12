<template>
  <div id="app">
    <Header />
    <QuestionBox 
      :current_question="question_list[index]"
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
      total_questions: 0
    }
  },
  methods: {
    next() {
      if (this.index < this.total_questions - 1) {
        this.index++
      }
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