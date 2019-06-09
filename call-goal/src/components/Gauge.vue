<template>
  <div class="gauge">
    <h2 :class="[isDone? titleCongrat: titleNormal]">{{title}}</h2>
    <apexchart
      :class="[isDone? chartCongrat: chartNormal]"
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
  width: 80%;
  height: 80%;
}
.chart {
  margin: 0px 0px 0px 0px;
}

.title {
  margin: 30px 0px 0px 0px;
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

export default {
  name: "Gauge",
  components: {
    apexchart: VueApexCharts
  },
  props: {
    callGoal: Number,
    callDone: Number
  },
  beforeMount() {
    this.title = "0 left to go";
  },
  data() {
    return {
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
    formatValue(done, goal) {
      return (done / goal) * 100;
    }
  },
  watch: {
    callDone: function() {
      const leftToGo = this.callGoal - this.callDone;
      this.title = leftToGo + " left to go";
      this.updateSeries([this.formatValue(this.callDone, this.callGoal)], true);
      if (this.callDone == this.callGoal) {
        this.isDone = true;
        this.title = "You've reached your goal!";
      }
    }
  }
};
</script>
