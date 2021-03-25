<!--  -->
<template>
<div>

<el-input v-model="id"></el-input>
<el-button @click="btn">点击</el-button>
   <div>
     <div style="height:calc(100vh - 50px);">
        <RelationGraph ref="seeksRelationGraph" :options="graphOptions" :on-node-click="onNodeClick" :on-line-click="onLineClick" />
     </div>
   </div>
   <el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  >
   <el-form :model="digao">
    <el-form-item label="活动名称">
      <el-input v-model="digao.id" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="文本">
      <el-input v-model="digao.text" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="子集">
      <el-input v-model="digao.form" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="来自">
      <el-input v-model="digao.to" autocomplete="off"></el-input>
    </el-form-item>

    <el-form-item label="关系">
      <el-input v-model="digao.relation" autocomplete="off"></el-input>
    </el-form-item>


  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="sureClick" >确 定</el-button>
  </span>
</el-dialog>
</div>
</template>

<script>
 import RelationGraph from 'relation-graph'
export default {
data() {
return {
      dialogVisible:false,
      graphOptions: {
         allowSwitchLineShape: true,
         allowSwitchJunctionPoint: true,
         defaultJunctionPoint: 'border',
         allowShowMiniNameFilter:true,
         // 这里可以参考"Graph 图谱"中的参数进行设置:http://relation-graph.com/#/docs/graph
       },
       digao:{
           id:"",
           text:"",
           form:"",
           to:"",
           relation:""
         },
      id:""
}
},
methods:{
   
    showSeeksGraph() {
       var __graph_json_data = {
         rootId: 'a',
         nodes: [
            // node配置选项：http://relation-graph.com/#/docs/node
            // node支持通过插槽slot完全自定义，示例：http://relation-graph.com/#/demo/adv-slot
           { id: 'a', text: 'A', borderColor: 'yellow' },
           { id: 'b', text: 'B', color: '#43a2f1', fontColor: 'yellow' },
           { id: 'c', text: 'C', nodeShape: 1, width: 80, height: 60 },
           { id: 'e', text: 'E', nodeShape: 0, width: 150, height: 150 }
         ],
         links: [
            // link配置选项：http://relation-graph.com/#/docs/link
           { from: 'a', to: 'b', text: '关系1', color: '#43a2f1' },
           { from: 'a', to: 'c', text: '关系2' },
           { from: 'a', to: 'e', text: '关系3' },
           { from: 'b', to: 'e',  }
         ]
       }
       this.$refs.seeksRelationGraph.setJsonData(__graph_json_data, (seeksRGGraph) => {
         // Called when the relation-graph is completed 
       })
     },
     onNodeClick(nodeObject, $event) {
        this.dialogVisible=true
        console.log(nodeObject.id);
      this.$refs.seeksRelationGraph.removeNodeById(nodeObject.id)//删除
     },

     sureClick(){
           
            var graph = this.$refs.seeksRelationGraph
            var _index = graph.getNodes().length + 1;
            // console.log(graph.getNodes())
            var __graph_json_data={
              nodes:[
                  {id:this.digao.id,text:this.digao.text}
              ],

              links:[
                  { from: this.digao.form, to: this.digao.to, text: this.digao.relation },
              ]
            };
             console.log(__graph_json_data)
            graph.appendJsonData(__graph_json_data, true, (seeksRGGraph) => {
            // 这些写上当图谱初始化完成后需要执行的代码
          });
          this.dialogVisible=false
     },

     btn(){


     },
     onLineClick(lineObject, $event) {
       console.log('onLineClick:', lineObject)
     }
},
mounted() {
   this.showSeeksGraph()
},

 components: { RelationGraph },
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>