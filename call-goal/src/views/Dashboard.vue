<template>
  <div class="dashboard">
    <img class="logo fadeInDown" alt="Ciara logo" src="../assets/logoCiara.png">
    <div class="gauge">
      <Gauge ref="gauge" :callGoal="callGoal" v-on:isDone="handleIsDone"/>
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

export default {
  name: "dashboard",
  components: {
    Gauge
  },
  beforeMount() {
    // Get goal from store
    this.callGoal = this.$store.state.callGoal;
  },
  data() {
    return {
      callGoal: 0
    };
  },
  methods: {
    handleIsDone(isDone) {
      console.log("Storing isDone...");
      this.$store.dispatch("setCallDone", isDone);
    }
  }
};
</script>
