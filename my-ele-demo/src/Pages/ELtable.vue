<template>
  <div>
        <el-table :data="tableData">
                   <el-table-column prop="date" label="日期" width="300">
                   </el-table-column>
                    <el-table-column prop="name" label="姓名" width="300">
                   </el-table-column>
                    <el-table-column prop="address" label="地址" >
                   </el-table-column>
             </el-table>
  </div>
</template>

<script>
export default {
     data(){
           return {
               tableData:[]
           }
       },
     methods: {
         getData(){
          this.axios.get('http://localhost:3004/tablist').then(res=>{
              console.log(res)
              this.tableData =res.data
          })
       }
     }
    
}
</script>

<style>

</style>