<template>
  <div class="dashboard">
    <img class="logo fadeInDown" alt="Ciara logo" src="../assets/logoCiara.png">
    <!-- <h3 class="title fadeInDown delay-1s">Let's go man</h3> -->
    <div class="gauge">
      <b-button :class="[isDone? shakeButton:addButton]" v-on:click="buttonClicked">{{buttonMsg}}</b-button>
      <Gauge :callDone="done" :callGoal="goal"/>
    </div>
  </div>
</template>

<style lang="less">
.gauge {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 80%;
}
.dashboard {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.addButton {
  margin: 20px 0px 10px 0px;
  animation-name: "fadeInDown";
  animation-duration: 1.5s;
}

.logo {
  max-width: 100px;
  max-height: 100px;
  margin: 10px 0px 10px 0px;
  width: auto;
  height: auto;
  animation-duration: 1.2s;
  animation-delay: 0.2s;
}

.hide {
  display: none;
}

.congratMsg {
  animation-name: "fadeInDown";
  animation-delay: 5s;
}

.shakeButton {
  margin: 10px 0px 10px 0px;
  animation-name: "shake";
  animation-duration: 0.7s;
}
.slider {
  margin: 20px 0px 50px 0px;
}
</style>

<script>
import Gauge from "@/components/Gauge.vue";
import store from "../store";

export default {
  name: "dashboard",
  components: {
    Gauge
  },
  updated() {
    // When reaches goal
    if (this.done == this.goal) {
      // Do something with the labels
      this.buttonMsg = "Made " + this.goal + " calls";
      this.isDone = true;
    }
  },
  mounted() {
    // Get goal from store
    this.goal = store.state.callGoal;
  },
  data() {
    return {
      buttonMsg: "Call +",
      goal: 0,
      done: 0,
      isDone: false,
      congratChart: "congratChart",
      congratMsg: "congratMsg",
      shakeButton: "shakeButton",
      addButton: "addButton",
      hide: "hide"
    };
  },
  methods: {
    buttonClicked() {
      if (this.done < this.goal) {
        this.done++;
      }
    }
  }
};
</script>
