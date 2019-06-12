<template>
  <div class="home">
    <!-- <img class="logo fadeInDown" alt="Ciara logo" src="../assets/logoCiara.png"> -->
    <Greetings name="Konstantin"/>
    <Slider ref="sliderComp" class="slider" v-model="callGoal"/>
    <router-link :to="link">
      <b-button class="fadeInUp" v-on:click="buttonClicked">Let's begin!</b-button>
    </router-link>
    <!-- <Button class="fadeInUp" :msg="buttonMsg" link="/dashboard" /> -->
  </div>
</template>

<style lang="less">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.goButton {
  margin: 20px 0px 10px 0px;
  animation-name: "fadeInUp";
  animation-duration: 1.5s;
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
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Greetings from "@/components/Greetings.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "home",
  data() {
    return {
      callGoal: 0,
      link: "dashboard",
      goButton: "goButton",
      fadeOutDown: "fadeOutDown",
      buttonMsg: "Let's rock!"
    };
  },
  components: {
    Greetings,
    Slider
  },
  methods: {
    buttonClicked() {
      // Stores goal
      this.$store.dispatch("setCallGoal", this.$refs.sliderComp.callGoal);
    }
  }
};
</script>
