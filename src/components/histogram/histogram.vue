<!--  -->
<template>
<div class="stripLine">

  <div id="histogram2" :style="{ width: '100%', height: '3.2rem' }"></div>
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
      let myChart3 = this.$echarts.init(document.getElementById("histogram2"));
      var category = ['小王', '小李', '小赵', '小马', '小刘', '小张'];
      var barData = [3100, 2142, 1218, 581, 431, 383];
      var option = {
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'shadow'
              },
              textStyle:{
		             fontSize: FontChart(0.12),
              	}
          },
          grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: {
              type: 'value',
              axisLine: {
                  show: false,
                  lineStyle: {
                    color: "#fff",
                }
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  show: true,
                  fontSize: FontChart(0.12)
	          },
              
          },
          yAxis: {
              type: 'category',
              data: category,
              splitLine: {show: false},
              axisLine: {
                  show: false,
                  lineStyle: {
                    color: "#fff",
                }
              },
              axisTick: {
                  show: false
              },
              axisLabel: {
                  interval: 0,  //设置间隔为0
                  fontSize: FontChart(0.12)
              },
              offset: 10,
              nameTextStyle: {
                  fontSize: FontChart(0.12)
              }
          },
          series: [
              {
                  name: '数量',
                  type: 'bar',
                  data: barData,
                  barWidth: FontChart(0.12),
                  barGap: 10,
                  smooth: true,
                  label: {
                      normal: {
                          show: true,
                          position: 'right',
                          offset: [5, -2],
                          textStyle: {
                              color: '#F68300',
                              fontSize: FontChart(0.12)
                          }
                      }
                  },
                  itemStyle: {
                      emphasis: {
                          barBorderRadius: 7
                      },
                      normal: {
                          barBorderRadius: 7,
                          color: new this.$echarts.graphic.LinearGradient(
                              0, 0, 1, 0,
                              [
                                  {offset: 0, color: '#3977E6'},
                                  {offset: 1, color: '#37BBF8'}
  
                              ]
                          )
                      }
                  }
              }
          ]
       };
      myChart3.setOption(option);
      var index = 0; //播放所在下标
//             var mTime = setInterval(function() {
//             myChart3.dispatchAction({
//                     type: 'showTip',
//                     seriesIndex: 0,
//                     dataIndex: index
//                 });
//                   index++;

//                   if(index >= barData.length) {
//                      index = 0;
//                     }
//                 }, 1000);
       window.addEventListener("resize",()=>{
        myChart3.resize();
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

.stripLine{
  width: 100%;
  height: 3rem;
  background: #191c21;
}
</style>