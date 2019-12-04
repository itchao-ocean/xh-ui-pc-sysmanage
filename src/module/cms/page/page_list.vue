<template>
 <div>
   <el-button type="primary" size="small" @click="query">查询</el-button>
   <el-table
           :data="list"
           stripe
           style="width: 100%">
     <el-table-column type="index" width="60">
     </el-table-column>
     <el-table-column prop="pageName" label="页面名称" width="120"></el-table-column>
     <el-table-column prop="pageAliase" label="别名" width="120"></el-table-column>
     <el-table-column prop="pageType" label="页面类型" width="120"></el-table-column>
     <el-table-column prop="pageWebPath" label="访问路径" width="250"></el-table-column>
     <el-table-column prop="pagePhysicalPath" label="物理路径" width="250"></el-table-column>
     <el-table-column prop="pageCreateTime" label="创建时间" width="180"></el-table-column>
   </el-table>
   <el-pagination background layout="prev,pager,next"
                  @current-change="handleCurrentChange"
                  :total="total"
                  :current-page="params.page"
                  :page-size="params.size"
                  style="float: right">

   </el-pagination>
 </div>
</template>
<script>
  import * as cmsApi from '../api/cms'
  export default {
    data() {
      return {
        total:10,
        params:{
          page:1,
          size:10
        },
        list: []
      }
    },
    methods:{
      query:function () {
        cmsApi.page_list(this.params.page,this.params.size).then((result)=>{
          this.list = result.queryResult.list;
          this.total = result.queryResult.total;
        })
      },
      handleCurrentChange:function (val) {
        this.query(val,this.params.size);
      }
    }
  }
</script>
<style>

</style>
