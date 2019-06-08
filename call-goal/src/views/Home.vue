<template>
  <div class="home">
    <img class="logo fadeInDown" alt="Ciara logo" src="../assets/logoCiara.png">
    <Greetings name="Konstantin"/>
    <Slider ref="sliderComp" class="slider"/>
    <Button class msg="Let's rock" link="/dashboard"/>
  </div>
</template>

<style lang="less">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
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
import Button from "@/components/Button.vue";
// import store from "../store";

export default {
  name: "home",

  updated() {
    // var test = this.$refs.slider.getValue();
    // console.log(test);
    // console.log("test");
    // store.dispatch("setCallNumbers", this.$refs.sliderComp.value);
    // console.log(store.state.callGoal);
  },
  components: {
    // HelloWorld,
    Greetings,
    Slider,
    Button
    // VueSlider
  }
};
</script>
