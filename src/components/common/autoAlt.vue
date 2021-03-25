<!--  -->
<template>
<div>

  <div id="lunbo" style="width:480px;height:280px;"></div>
</div>
</template>

<script>
export default {
data() {
return {

}
},
methods:{
  
},
mounted() {

var myChart = this.$echarts.init(document.getElementById('lunbo'));
 
var option = {
    // color: ['#1e33ff', '#008fff', '#552de1', '#4f1577', '#50befe', '#c95be9', '#1221b4'],
    tooltip: {
        trigger: 'item',
        backgroundColor: 'none',
        textStyle: {
            fontSize: 12,
            fontFamily: 'Microsoft YaHei'
        },
        position: function (point, params, dom, rect, size) {
            $(dom).html('<div class="tip">\n' +
                '        <span class="name">' + params.name + '</span>\n' +
                '        <div class="num">' + params.value + '<span class="name">家</span></div>\n' +
                '    </div>');
 
            return 'inside'
        }
    },
    series: [
        {
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            label: {
                normal: {
                    show: false
                }
            },
            hoverOffset: 20,
            startAngle: 90,
            data: [
                {value: 335, name: '小型企业'},
                {value: 310, name: '一般工业企业'},
                {value: 234, name: '第三产业'},
                {value: 135, name: '建筑施工'},
                {value: 1548, name: '畜禽养殖业'},
                {value: 580, name: '污水处理厂'},
                {value: 400, name: '固废处置单位'}
            ]
        }
    ]
};
myChart.setOption(option);
 
//轮播展示
var currentIndex = -1;
setInterval(function() {
    var dataLen = option.series[0].data.length;
    // 取消之前高亮的图形
    myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0, //表示series中的第几个data数据循环展示
        dataIndex: currentIndex
    });
    currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
    // 高亮当前图形
    myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
    // 显示 tooltip
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: currentIndex
    });
}, 2000);
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>