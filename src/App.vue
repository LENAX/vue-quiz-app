<template>
  <div id="app">
    <Header />
    <QuestionBox />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

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