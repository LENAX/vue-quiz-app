<template>
  <div id="app">
    <Header />
    <QuestionBox />
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
  }
}
</script>

<style>
  @import "assets/css/style.css"
</style>