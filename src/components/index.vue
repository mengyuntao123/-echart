<!--  -->
<template>
<div class="big">
 
 <div class="header">
 <h3>可视化管理指挥系统</h3>
 </div>

 <div class="top">
   <div class="left">
     <div class="left_center">
       <div class="one">
       <DashBoard ></DashBoard>
       
       <DashBoard1 ></DashBoard1>
       <!-- <Zh></Zh> -->
       </div>
      
      <div class="two">
        <div class="img">
          <img class="product" src="../../static/img/product.png"/>
          <p class="lp">预约状况</p>
        </div>

        <div class="hi">
          <Histogram></Histogram>
        </div>
        

      </div>

      <div class="two">

       <div class="img">
          <img class="product" src="../../static/img/product.png"/>
          <p class="lp">访问博物馆占有率</p>
        </div>

        <div class="hi">
          <Biscuit></Biscuit>
        </div>
      </div>
     </div>
   </div>

   <div class="center">
      <div class="ct">
         <Map></Map>
      </div>
   </div>
   <div class="left">
     <div class="left_center">
       <div class="one">
      
        <Xuan></Xuan>
       </div>
      
      <div class="two">
        <div class="img">
          <img class="product" src="../../static/img/product.png"/>
          <p class="lp">视频播放占有率</p>
        </div>

        <div class="hi" style="margin-top:21px;">
          <Echart></Echart>
        </div>
        

      </div>

      <div class="two">

       <div class="img">
          <img class="product" src="../../static/img/product.png"/>
          <p class="lp">游客来访地比率</p>
        </div>

        <div class="hi">
          <RightBiscuit></RightBiscuit>
        </div>
      </div>
     </div>
   </div>
 </div>
 
</div>
</template>

<script>
import Map from "./map/map"
import Zh from "./common/zhu"
import DashBoard from "./common/dash-board"
import DashBoard1 from "./common/dash-board1"
import Histogram from "./histogram/histogram"
import Biscuit from "./common/biscuit"
import Xuan from "./common/xuansanjiao"
import Echart from "./echart/echart"
import W1 from "./common/q1"
import RightBiscuit from "./rightBiscuit/rightBiscuit"
import { createSocket }  from '../utils/websocket'
export default {
data() {
return {
   
   tid:2
}
},
methods:{
  setNoticeData(e){
       console.log(e.detail.data.data)
  },

  getNoticeData(tid) {
        createSocket(tid);
        window.addEventListener('onmessageWS', this.setNoticeData)
 
 },
      
},
mounted() {
  this.getNoticeData(this.tid);
},
components:{
  Map,
  DashBoard,
  DashBoard1,
  Zh,
  Histogram,
  Biscuit,
  Xuan,
  Echart,
  W1,
  RightBiscuit
}
}
</script>
<style scoped>
/* @import url(); 引入css类 */

@import url("../assets/css/index")
</style>