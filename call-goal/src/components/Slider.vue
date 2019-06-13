<template>
  <div class="slider">
    <lottie
      v-bind:class="[isRocket ? shake : hide]"
      :options="defaultOptionsRocket"
      :height="animSize"
      :width="animSize"
      v-on:animCreated="handleAnimation"
    />
    <lottie
      v-bind:class="[isDrink ? bounceNormal : hide]"
      :options="defaultOptionsDrink"
      :height="animSize"
      :width="animSize"
      v-on:animCreated="handleAnimation"
    />

    <lottie
      v-bind:class="[isSleep ? bounceNormal : hide]"
      :options="defaultOptionsSleep"
      :height="animSize"
      :width="animSize"
      v-on:animCreated="handleAnimation"
    />
    <lottie
      v-bind:class="[isFood ? bounceNormal : hide]"
      :options="defaultOptionsFood"
      :height="animSize"
      :width="animSize"
      v-on:animCreated="handleAnimation"
    />
    <vue-slider
      class="slider fadeInUp"
      tooltipStyle="color: #04ccfc"
      ref="slider"
      width="50%"
      min-
      v-model="callGoal"
    />
    <div class="sliderFeedback">
      <h3 v-bind:class="[isRocket? shakeGoal: fadeInUp]" ref="callGoal"></h3>
      <h5 v-bind:class="[isRocket? shakeMessage: fadeInUp]" ref="message"></h5>
    </div>
  </div>
</template>

<style lang="less">
.slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  animation-duration: 1s;
  animation-delay: 0.1s;
}

.message {
  animation-delay: 0.3s;
  animation-duration: 3s;
}
.callGoal {
  animation-delay: 0.2s;
  animation-duration: 3s;
}

.shake {
  animation-duration: 3s;
}

.rocket {
  animation-duration: 1s;
  animation-delay: 0.8s;
}

.hide {
  display: none;
}
</style>


<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import Lottie from "vue-lottie";
import rocket from "../assets/rocket.json";
import drink from "../assets/drink.json";
import food from "../assets/food.json";
import mansleep from "../assets/mansleep.json";

export default {
  name: "slider",
  components: {
    VueSlider,
    lottie: Lottie
  },
  mounted() {
    const { message, callGoal } = this.$refs;
    // Init with Sleepy man
    this.selectAnimation(this.callGoal, message, callGoal);
    this.play();
  },
  updated() {
    const { message, callGoal } = this.$refs;
    //Change animation and labels according to sliders value
    this.selectAnimation(this.callGoal, message, callGoal);
  },
  data() {
    return {
      callGoal: 0,
      defaultOptionsRocket: { animationData: rocket },
      defaultOptionsDrink: { animationData: drink },
      defaultOptionsSleep: { animationData: mansleep },
      defaultOptionsFood: { animationData: food },
      isRocket: false,
      isDrink: false,
      isSleep: false,
      isFood: false,
      hide: "hide",
      bounceNormal: "animated bounce",
      bounceRocket: "rocket animated bounceOutUp",
      shake: "animated shake infinite fast",
      shakeMessage: "message animated shake fast",
      shakeGoal: "callGoal animated shake fast",
      shakeSlider: "slider animated shake fast",
      fadeInUpSlider: "slider fadeInUp",
      fadeInUp: "fadeInUp",
      animSize: 200,
      animationSpeedRocket: 1
    };
  },
  methods: {
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    play: function() {
      this.anim.play();
    },
    selectAnimation(value, message, callGoal) {
      // 0 - sleepy man
      if (value == 0 && this.isSleep == false) {
        console.log("Change to sleepy man!");
        this.isFood = false;
        this.isSleep = true;
        this.isDrink = false;
        this.isRocket = false;
        callGoal.textContent = value + " calls";
        message.textContent = "...gonna just sleep all day...";
      }
      // 0-20 sleepy man
      else if (value > 0 && value <= 20 && this.Sleep == false) {
        console.log("Change to sleepy man!");
        this.isFood = false;
        this.isSleep = true;
        this.isDrink = false;
        this.isRocket = false;
        callGoal.textContent = value + " calls";
        message.textContent = "...gonna just chill today...";
      }
      // 20-50 - food
      else if (value > 20 && value <= 50 && this.isFood == false) {
        console.log("Change to yummi food...");
        this.isFood = true;
        this.isSleep = false;
        this.isDrink = false;
        this.isRocket = false;
        callGoal.textContent = value + " calls";
        message.textContent = "...gotta bring home more than bacon...";
      }
      // 50-80 - toast
      else if (value > 50 && value <= 80 && this.isDrink == false) {
        console.log("Change to drinks");
        this.isFood = false;
        this.isSleep = false;
        this.isDrink = true;
        this.isRocket = false;
        callGoal.textContent = value + " calls";
        message.textContent = "...maybe that fancy wine too...";
      } else if (value > 80 && this.isRocket == false) {
        console.log("Change to rocket");
        this.isFood = false;
        this.isSleep = false;
        this.isDrink = false;
        this.isRocket = true;

        callGoal.textContent = value + " calls";
        message.textContent =
          "$$$ screw it gotta be a freaking millionaire $$$";
      }
    }
  }
};
</script>
