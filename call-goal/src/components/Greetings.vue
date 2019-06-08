<template>
  <div class="greetings">
    <h1 class="morning fadeInDown">Good morning {{ name }}</h1>
    <h1 class="goal animated fadeInDown">What are your goals for today?</h1>
  </div>
</template>

<style lang="less">
.greetings {
  margin: 20px 0px 0px 0px;
}

.goal {
  animation-duration: 1s;
  animation-delay: 0.5s;
}

.morning {
  animation-duration: 1s;
  animation-delay: 0.3s;
}
</style>


<script>
import animatedCss from "vue2-animate/dist/vue2-animate.min.css";

export default {
  name: "Greetings",
  props: {
    name: String
  }
};
</script>


<style scoped lang="less">
h1 {
  font-size: 40px;
  color: grey;
}
</style>
