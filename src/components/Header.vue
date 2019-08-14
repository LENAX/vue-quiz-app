<template>
  <div class="mt-3">
    <b-nav tabs>
      <b-nav-item disabled><h4>Trivia</h4></b-nav-item>
      <b-nav-item disabled>Correctly Answered {{correct_count}} out of {{total_questions}} </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
  export default {
    props: {
      correct_count: Number,
      total_questions: Number
    }
  }
</script>

<style></style>