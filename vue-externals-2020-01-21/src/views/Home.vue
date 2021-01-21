<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="container">
      <div class="box" id="main">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as echarts from 'echarts'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      var myChart = echarts.init(document.getElementById('main'));

      // 指定图表的配置项和数据
      var option = {
        title: {
          text: '第一个 ECharts 实例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  width: 800px;
  height: 400px;
  margin: 40px auto;
  box-shadow: 0 0 4px #000;
  padding: 10px;
  .box{
    width: 100%;
    height: 100%;
  }
}
</style>
