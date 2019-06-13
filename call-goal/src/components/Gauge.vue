<template>
  <div class="gauge">
    <h2 :class="[isDone? titleCongrat: titleNormal]">{{title}}</h2>
    <b-button :class="[isDone? shakeButton:addButton]" v-on:click="buttonClicked">{{buttonMsg}}</b-button>
    <lottie
      v-bind:class="[isDone ? showAnim : hide]"
      :options="defaultOptions"
      :height="animSize"
      :width="animSize"
      v-on:animCreated="handleAnimation"
    />
    <apexchart
      ref="gauge"
      :class="[isDone? hide: chartNormal]"
      width="600"
      type="radialBar"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<style lang="less">
.gauge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 80%;
}
.chart {
  margin: 0px 0px 0px 0px;
}

.title {
  margin: 30px 0px 0px 0px;
}

.hide {
  display: none;
}

.showAnim {
  display: flex;
}

.congratChart {
  animation-name: "bounce";
  animation-duration: 0.7s;
}
.congratTitle {
  animation-name: "bounce";
  animation-delay: 0.1s;
  animation-duration: 0.8s;
}

.shakeButton {
  margin: 10px 0px 10px 0px;
  animation-name: "shake";
  animation-duration: 0.7s;
}

.addButton {
  margin: 20px 0px 10px 0px;
  animation-name: "fadeInDown";
  animation-duration: 1.5s;
}
</style>

<script>
import VueApexCharts from "vue-apexcharts";
import Lottie from "vue-lottie";
import highFive from "../assets/highfive.json";

export default {
  name: "Gauge",
  components: {
    apexchart: VueApexCharts,
    lottie: Lottie
  },
  props: {
    callGoal: Number
  },
  beforeMount() {
    this.title = this.callGoal + " left to go";
  },
  data() {
    return {
      isDone: false,
      callDone: 0,
      buttonMsg: "Add call +",
      shakeButton: "shakeButton",
      addButton: "addButton",
      finished: false,
      defaultOptions: { animationData: highFive },
      animSize: 500,
      animationSpeed: 1,
      showAnim: "showAnim bounce",
      hide: "hide",
      type: "radialBar",
      series: [0],
      title: "",
      titleNormal: "title fadeInUp",
      titleCongrat: "title congratTitle",
      chartNormal: "chart fadeInUp",
      chartCongrat: "chart congratChart",
      chartOptions: {
        plotOptions: {
          radialBar: {
            hollow: {
              size: 60
            },
            startAngle: -90,
            endAngle: 90,
            dataLabels: {
              // style: {
              //   fontSize: "14px",
              //   fontFamily: ["Avenir"]
              // },
              name: {
                fontSize: "16px",
                offsetY: 120
              },
              value: {
                show: false,
                offsetY: 76,
                fontSize: "22px",
                color: undefined,
                formatter: function(val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: "gradient",
          colors: ["#08ccfc"],
          gradient: {
            shade: "light",
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
          }
        },
        stroke: {
          dashArray: 0
        },
        labels: [""]
      }
    };
  },
  methods: {
    percentage(done, goal) {
      return (done / goal) * 100;
    },
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    play: function() {
      this.anim.play();
    },
    buttonClicked() {
      // Add call to count
      if (this.callDone < this.callGoal) {
        console.log("+ 1 call");
        this.callDone++;
      }
    },
    updateFinished() {
      this.title = "You've reached your goal!";
      this.buttonMsg = this.callGoal + " calls completed!";
      // Tells the parent that the goal was acomplished
      this.isDone = true;
      this.$emit("isDone", this.isDone);
      // Play the high five animation
      this.play();
    },
    updateLeft() {
      const percentage = this.percentage(this.callDone, this.callGoal);
      const leftToGo = this.callGoal - this.callDone;

      if (percentage <= 50) {
        this.title = leftToGo + " left to go";
      } else if (percentage > 50 && percentage < 80) {
        this.title = leftToGo + " left, you're doing great!";
      } else if (percentage >= 80) {
        this.title = leftToGo + " left, we're preparing for the high five!";
      }
    }
  },
  watch: {
    callDone: function() {
      // Update gauge series with percentage
      this.$refs.gauge.updateSeries(
        [this.percentage(this.callDone, this.callGoal)],
        true
      );
      // Update labels accordingly
      if (this.callDone == this.callGoal) {
        // if the goal is acomplished
        this.updateFinished();
      } else {
        this.updateLeft();
      }
    }
  }
};
</script>
