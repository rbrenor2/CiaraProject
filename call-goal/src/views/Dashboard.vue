<template>
  <div class="dashboard">
    <img class="logo fadeInDown" alt="Ciara logo" src="../assets/logoCiara.png">
    <!-- <Greetings name="Konstantin"/> -->
    <!-- <Slider ref="sliderComp" class="slider"/> -->
    <!-- <Button class msg="Let's rock" link/> -->
  </div>
</template>

<style lang="less">
.dashboard {
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

// import store from "../store";

export default {
  name: "dashboard",

  updated() {},
  components: {}
};
</script>
