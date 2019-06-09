<template>
  <apexchart
    class="chart fadeInUp"
    width="700"
    type="radialBar"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<style lang="less">
.gauge {
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  width: 80%;
  height: 80%;
}

.chart {
  // background-color: red;
  margin: 0px 0px 0px 0px;
}
</style>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Gauge",
  components: {
    apexchart: VueApexCharts
  },
  updated() {
    console.log("Changed");
    this.series[0] = this.done;
  },

  mounted() {
    console.log("GAUGEGOAL: " + this.goal);
  },
  data() {
    return {
      type: "radialBar",
      // done: 0,
      goal: 0,
      series: [30, 20],
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
                show: true,
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
          colors: ["#08ccfc", "#000"],
          gradient: {
            shade: "dark",
            shadeIntensity: 0.15,
            gradientToColors: ["#91e7fc"], // optional, if not defined - uses the shades of same color in series
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

  props: {
    done: Number
  }
};
</script>
