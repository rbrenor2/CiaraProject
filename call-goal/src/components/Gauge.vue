<template>
  <div class="gauge">
    <h2 :class="[isDone? titleCongrat: titleNormal]">{{title}}</h2>
    <lottie
      v-bind:class="[isDone ? showAnim : hide]"
      :options="defaultOptions"
      :height="animSize"
      :width="animSize"
      v-on:animCreated="handleAnimation"
    />
    <apexchart
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
    callGoal: Number,
    callDone: Number
  },
  beforeMount() {
    this.title = this.callGoal + " left to go";
  },
  data() {
    return {
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
      isDone: false,
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
    updateSeries(newSeries, animated) {
      this.series = newSeries;
    },
    percentage(done, goal) {
      return (done / goal) * 100;
    },
    handleAnimation: function(anim) {
      this.anim = anim;
    },
    stop: function() {
      this.anim.stop();
    },

    play: function() {
      this.anim.play();
    },

    pause: function() {
      this.anim.pause();
    },
    reverse: function() {
      this.anim.setDirection(-1);
    },
    onSpeedChange: function() {
      this.anim.setSpeed(this.animationSpeed);
    }
  },
  watch: {
    callDone: function() {
      // Update gauge series with percentage
      this.updateSeries([this.percentage(this.callDone, this.callGoal)], true);

      // Update labels accordingly
      const leftToGo = this.callGoal - this.callDone;

      if (this.callDone == this.callGoal) {
        this.isDone = true;
        this.title = "You've reached your goal!";
        this.isDone = true;
        this.play();
      } else {
        const percentage = this.percentage(this.callDone, this.callGoal);
        if (percentage <= 50) {
          this.title = leftToGo + " left to go";
        } else if (percentage > 50 && percentage < 80) {
          this.title = leftToGo + " left, you're doing great!";
        } else if (percentage >= 80) {
          this.title = leftToGo + " left, we're preparing for the high five!";
        }
      }
    }
  }
};
</script>
