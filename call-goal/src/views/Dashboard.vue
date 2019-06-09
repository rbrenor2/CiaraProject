<template>
  <div class="dashboard">
    <img class="logo fadeInDown" alt="Ciara logo" src="../assets/logoCiara.png">
    <h3 class="title fadeInDown delay-1s">Let's go man</h3>
    <h2 class="title fadeInDown delay-1s">{{leftToGo}}</h2>
    <b-button class="addButton fadeInUp" v-on:click="buttonClicked">{{buttonMsg}}</b-button>
    <Gauge v-bind:done="done" v-bind:goal="goal"/>
  </div>
</template>

<style lang="less">
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.addButton {
  margin: 50px 0px 0px 0px;
}
.title {
  margin: 50px 0px 0px 0px;
}

.logo {
  max-width: 100px;
  max-height: 100px;
  width: auto;
  height: auto;
  animation-duration: 1.2s;
  animation-delay: 0.2s;
}

.slider {
  margin: 20px 0px 50px 0px;
}
</style>

<script>
import Gauge from "@/components/Gauge.vue";
import Button from "@/components/Button.vue";
import store from "../store";

export default {
  name: "dashboard",
  components: {
    Gauge,
    Button
  },
  mounted() {
    this.goal = this.$store.state.callGoal;
  },
  data() {
    return {
      buttonMsg: "Call +",
      leftToGo: "89 to go",
      goal: 0,
      done: 0
    };
  },
  methods: {
    buttonClicked() {
      store.dispatch("setCallDone", this.done++);
    }
  }
};
</script>
