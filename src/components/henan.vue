<!--  -->
<template>
<div>


   <div id="farmtotel"></div>
</div>
</template>

<script>
export default {
data() {
return {

}
},
methods:{
     
      drawLine() {
      

/**
此版本通过设置geoindex && seriesIndex: [1] 属性来实现geo和map共存，来达到hover散点和区域显示tooltip的效果

默认情况下，map series 会自己生成内部专用的 geo 组件。但是也可以用这个 geoIndex 指定一个 geo 组件。这样的话，map 和 其他 series（例如散点图）就可以共享一个 geo 组件了。并且，geo 组件的颜色也可以被这个 map series 控制，从而用 visualMap 来更改。
当设定了 geoIndex 后，series-map.map 属性，以及 series-map.itemStyle 等样式配置不再起作用，而是采用 geo 中的相应属性。

http://echarts.baidu.com/option.html#series-map.geoIndex

并且加了pin气泡图标以示数值大小
*/
var points = [
                   {value: [118.8062, 31.9208],itemStyle:{color:'#4ab2e5'}}
                  , {value: [127.9688, 45.368],itemStyle:{color:'#4fb6d2'}}
                  , {value: [110.3467, 41.4899],itemStyle:{color:'#52b9c7'}}
                  , {value: [125.8154, 44.2584],itemStyle:{color:'#5abead'}}
                  , {value: [116.4551, 40.2539],itemStyle:{color:'#f34e2b'}}
                  , {value: [123.1238, 42.1216],itemStyle:{color:'#f56321'}}
                  , {value: [114.4995, 38.1006],itemStyle:{color:'#f56f1c'}}
                  , {value: [117.4219, 39.4189],itemStyle:{color:'#f58414'}}
                  , {value: [112.3352, 37.9413],itemStyle:{color:'#f58f0e'}}
                  , {value: [109.1162, 34.2004],itemStyle:{color:'#f5a305'}}
                  , {value: [103.5901, 36.3043],itemStyle:{color:'#e7ab0b'}}
                  , {value: [106.3586, 38.1775],itemStyle:{color:'#dfae10'}}
                  , {value: [101.4038, 36.8207],itemStyle:{color:'#d5b314'}}
                  , {value: [103.9526, 30.7617],itemStyle:{color:'#c1bb1f'}}
                  , {value: [108.384366, 30.439702],itemStyle:{color:'#b9be23'}}
                  , {value: [113.0823, 28.2568],itemStyle:{color:'#a6c62c'}}
                  , {value: [102.9199, 25.46639],itemStyle:{color:'#96cc34'}}
                  , {value: [113.665412, 34.757975]}
  ] 
  


  //  console.log(123)     

   this.$axios.get("../../../static/henan.json") .then(geoJson=>{
   console.log(geoJson.data.features)
   let myChart = this.$echarts.init(document.getElementById("farmtotel"));
   this.$echarts.registerMap('henan', geoJson.data);
   var option = {
        backgroundColor: '#121415',
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
              var res=params.name+'<br />'; 
              var myseries=option.series[2].data;  
              myseries.forEach((ele,index,array)=>{
                if(array[index].name==params.name){
                  res+=array[index].name
                }
              });
              return res      
            },
        },
        geo: {
          map: 'henan',
          aspectScale: 0.75, //长宽比
          zoom: 1.1,
          roam: false,
          itemStyle: {
            normal: {
              areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: '#09132c' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#274d68'  // 100% 处的颜色
                        }],
                        globalCoord: true // 缺省为 false
                    },
              shadowColor:'rgb(58,115,192)',
              shadowOffsetX: 10,
              shadowOffsetY: 11
            },
            emphasis: {
              areaColor: '#2AB8FF',
              borderWidth: 0,
              color: 'green',
              label: {
                show: false
              }
            }
          },
         
        },
        series: [ {
            type: 'map',
            roam: false,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#1DE9B6'
                    }
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(183,185,14)'
                    }
                }
            },

            itemStyle: {
              normal: {
               borderColor: 'rgb(147, 235, 248)',
                borderWidth: 1,
                areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: '#09132c' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#274d68'  // 100% 处的颜色
                        }],
                        globalCoord: true // 缺省为 false
                    },
              },
              emphasis: {
                    areaColor: 'rgb(46,229,206)',
                //    shadowColor: 'rgb(12,25,50)',
                    borderWidth: 0.1
                }
            },
            zoom: 1.1,
       //     roam: false,
            map: 'henan' //使用
            // data: this.difficultData //热力图数据   不同区域 不同的底色
          },{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                zlevel:1,
                rippleEffect: {
                    period: 15,
                    scale: 4,
                    brushType: 'fill'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        offset: [15, 0],
                        color: '#1DE9B6',
                        show: true
                    },
                },
                itemStyle: {
                    normal: {
                       color:'#1DE9B6'/* function (value){ //随机颜色
 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
 }*/,
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                symbolSize: 12,
                data: points
            }, //地图线的动画效果
          {
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 7, //图标大小
                },
                lineStyle: {
                    normal: {
                        color:'#1DE9B6'
                        /* function (value){ //随机颜色
                        
                        ['#f21347','#f3243e','#f33736','#f34131','#f34e2b',
                        '#f56321','#f56f1c','#f58414','#f58f0e','#f5a305',
                        '#e7ab0b','#dfae10','#d5b314','#c1bb1f','#b9be23',
                        '#a6c62c','#96cc34','#89d23b','#7ed741','#77d64c',
                        '#71d162','#6bcc75','#65c78b','#5fc2a0','#5abead',
                        '#52b9c7','#4fb6d2','#4ab2e5']
 return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
 }*/,
                        width: 1, //线条宽度
                        opacity: 0.1, //尾迹线条透明度
                        curveness: .3 //尾迹线条曲直度
                    }
                },
                data: [ 
                  //经纬度
                    {coords: [[114.341447, 34.797049],[113.665412, 34.757975]],lineStyle:{color:'#4ab2e5'},value:12,name:"郑州市"}
                  , {coords: [[112.434468, 34.663041],[113.665412, 34.757975]],lineStyle:{color:'#4fb6d2'}}
                  , {coords: [[113.307718, 33.735241],[113.665412, 34.757975]],lineStyle:{color:'#52b9c7'}}
                  , {coords: [[114.352482, 36.103442],[113.665412, 34.757975]],lineStyle:{color:'#5abead'}}
                  , {coords: [[114.295444, 35.748236],[113.665412, 34.757975]],lineStyle:{color:'#f34e2b'}}
                  , {coords: [[113.883991, 35.302616],[113.665412, 34.757975]],lineStyle:{color:'#f56321'}}
                  , {coords: [[113.238266, 35.23904],[113.665412, 34.757975]],lineStyle:{color:'#f56f1c'}}
                  , {coords: [[115.041299, 35.768234],[113.665412, 34.757975]],lineStyle:{color:'#f58414'}}
                  , {coords: [[113.826063, 34.022956],[113.665412, 34.757975]],lineStyle:{color:'#f58f0e'}}
                  , {coords: [[114.026405, 33.575855],[113.665412, 34.757975]],lineStyle:{color:'#f5a305'}}
                  , {coords: [[111.194099, 34.777338],[113.665412, 34.757975]],lineStyle:{color:'#e7ab0b'}}
                  , {coords: [[112.540918, 32.999082],[113.665412, 34.757975]],lineStyle:{color:'#dfae10'}}
                  , {coords: [[115.650497, 34.437054],[113.665412, 34.757975]],lineStyle:{color:'#d5b314'}}
                  , {coords: [[114.075031, 32.123274],[113.665412, 34.757975]],lineStyle:{color:'#c1bb1f'}}
                  , {coords: [[114.649653, 33.620357],[113.665412, 34.757975]],lineStyle:{color:'#b9be23'}}
                  , {coords: [[114.024736, 32.980169],[113.665412, 34.757975]],lineStyle:{color:'#a6c62c'}}
                  , {coords: [[112.590047, 35.090378],[113.665412, 34.757975]],lineStyle:{color:'#96cc34'}}
                ]
            }

        ]
    };
     myChart.setOption(option,true);
     window.addEventListener("resize", function() {
        myChart.resize();
      });
     myChart.on('click', function (params) {
      
      console.log(params)
    });
})
  
   

      }
},

created(){
  this.drawLine()
},
mounted() {
 
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */
#farmtotel{
  width: 10rem;
  height: 10rem;
  margin: .2625rem 0 .2625rem -1.45rem;
}
</style>