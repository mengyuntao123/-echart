<!--  -->
<template>
<div>

<div class="lit">
  <!-- <div class="right"><Echart></Echart></div> -->
  <div class="left">
     <div class="recentlyReportScollList" style="width:100%;height:6rem;background: white">
        <div style=""></div>
        <!-- <p style="margin: 12px 8px;"><span style="font-size: .225rem;font: bold;">轮播表</span></p> -->
        <dv-scroll-board :config="config" style="width:100%; height:6rem;" />
      </div>

  </div>

      <p>obj.a: {{obj.a}}</p>
      <p>obj.a: <input type="text" v-model="obj.a"></p>
</div>

</div>
</template>

<script>
import Echart from "../echart/echart"
export default {
data() {
return {
     config:{
        header: ['单位', '姓名', '日期'],
        headerBGC: '#F5F5FA',
        oddRowBGC: '#fff',
        evenRowBGC: '#fff',
        align: ['center', 'center', 'center'],
        waitTime:2000,
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      },
    obj: {
      a: 123
    }

}
},
methods:{
 
},

mounted() {
 
},

watch:{
 
},
components:{
  Echart
}
}
</script>
<style scoped >
/* @import url(); 引入css类 */
.lit{
  display: flex;
  flex-direction: row;
}

.right{
  flex: 2;
}

.left{
  flex: 1;
}

 .dv-scroll-board{
    color:white;
   
    
    
  }

  p{
    color: red;
  }
  .header-item{
      font-size: 1em;
      text-align: center;
      white-space: nowrap;
      color:#FFF !important;
    }
 .dv-scroll-board >>> .row-item{
        text-align: center;
        line-height: 2rem;
        background: #191c21 !important;
        
      }
 .dv-scroll-board >>> .header{
       background: #191c21 !important;
       font-size: .2rem;
 }
  .ceil{
          color:#3c3f52;
          font-size: .225rem !important;
          
        }
  i{
            font-size: .225rem;
          }
  .ceil:nth-child(2){
          color: #eb5a6d !important;
          font-size: .225rem;
          width: 25%;
        }
  .test{
    width: 10px;
    background-size: 10% 10%;
    word-break:keep-all;/* 不换行 */
    white-space:nowrap;/* 不换行 */
    background: #eb5a6d;
  }


</style>