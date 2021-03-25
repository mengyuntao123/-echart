<!--  -->
<template>
<div>

  <div class="stripLine" style="width:100%; height:3rem; background:#191c21;">

  <div id="histogram3" :style="{ width: '100%', height: '3rem' }"></div>
</div>
</div>
</template>

<script>
import FontChart from "../../utils/rem"
export default {
data() {
return {
     
}
},
methods:{
  drawLine(){
       let myChart = this.$echarts.init(document.getElementById("histogram3"));
       var option={
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
            textStyle:{
		             fontSize: FontChart(0.12),
              	}
            },
        color:['#f6da22','#bbe2e8','#6cacde','#bbe2e8','#6cacde'], // 饼图颜色修改
        legend: {
            orient: 'vertical',
            x: 'right',
            y: 'bottom',
            textStyle: { //图例文字的样式
                        color: '#fff',
                        fontSize: FontChart(0.12)
                        },
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                center: ["35%", "50%"], //改变指示条的位置
                radius: ['50%', '70%'],
                minAngle: 10,  // 设置每块扇形的最小占比
                avoidLabelOverlap: true,
                label:{
                  normal:{
                     textStyle: { //图例文字的样式
                        fontSize: FontChart(0.12)
                        },
                  }
                },
                
                data: [
                    {value: 500, name: '直接访问'},
                    {value: 300, name: '邮件营销'},
                    // {value: 234, name: '联盟广告'},
                    // {value: 135, name: '视频广告'},
                    // {value: 1548, name: '搜索引擎'}
                ]
            }
        ]
          };

      myChart.setOption(option);
      window.addEventListener("resize",()=>{
           myChart.resize();
      }); 
     }
},
mounted() {
   this.drawLine()
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>