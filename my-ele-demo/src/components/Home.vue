<template>
  <!-- <div>
   <div class="col-xs-6" id="main"></div>
   <div  class="col-xs-6" id="lineChart"></div>
  </div> -->
 <el-row>
    <el-col :span="12">
         <div  id="main"></div>
    </el-col>
     <el-col :span="12">
       <div  id="lineChart"></div>
    </el-col>
 </el-row>

</template>

<script>
export default {
  methods: {
    drawLineCharts(id) {
     // this.$ecahrts.init(document.getElementById(id)).dispose(); //初始化echarts之前先手动销毁之前的echarts图，防止显示错乱
      let lineChart = this.$echarts.init(document.getElementById('lineChart'));
      lineChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      });
    },
    myEcharts() {
     // let echarts = require('echarts');
      let myChart=this.$echarts.init(document.getElementById('main'))

      myChart.setOption({
        //backgroundcolor:'#000',
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          bottom: 10,
          left: 'center',
          data: ['已出租', '未出租', '已预约']
        },
        series: [
          {
            name: '车辆出租状态',
            type: 'pie',
            radius: '55%',
            center: ['50%', '40%'],
            data: [
              { value: 40, name: '已出租' },
              { value: 30, name: '未出租' },
              { value: 30, name: '已预约' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }

  },
  // mounted() {
  //      this.drawLineCharts("lineChart") 
  // },
  mounted() {
    this.myEcharts();
    this.drawLineCharts() 
  }
};
</script>

<style scoped>
#main {
  width: 800px;
  height: 200px;
}
#lineChart {
  width: 800px;
  height: 200px;
}
</style>