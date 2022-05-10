<template>
  
  <div>
     <el-container style=" border: 1px solid #eee">
        <el-aside width='200px' >
            <el-menu router default-active="2">
                 <el-submenu index="1">
                     <template slot="title"><i class="el-icon-message"></i>Element组件</template>
                     <el-menu-item-group>
                          <el-menu-item index="/Layout">Layout布局</el-menu-item>
                           <el-menu-item index="/Icon">Icon图标</el-menu-item>
                           <el-menu-item index="/Button">Button按钮</el-menu-item>
                     </el-menu-item-group>
                    
                 </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>ELData数据</template>
                    <el-menu-item-group>
                        <el-menu-item index="/ELtable">ELtable表格</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                 <!-- <el-menu-item index="/Application">
                   <i class="el-icon-menu"></i>
                    <span slot="title">ELtable表格</span>     
                </el-menu-item>  -->
              <!-- <el-menu-item index="3">
                   <i class="el-icon-document"></i>
                    <span slot="title">Echarts图表</span>     
                    
                </el-menu-item>  -->
                 <el-submenu index="3">
                    <template slot="title"><i class="el-icon-s-data"></i>Echarts图表</template>
                    <el-menu-item-group>
                        <el-menu-item index="/LineChart">折线图</el-menu-item>
                        <el-menu-item index="/PieChart">圆饼图</el-menu-item>
                        <el-menu-item index="/ScoatChart">散点图</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                 <el-submenu index="4">
                     <template slot="title"><i class="el-icon-message"></i>ELform表单 </template>
                     <el-menu-item-group>
                        <el-menu-item index="/radio">单选、复选</el-menu-item>
                      <el-menu-item index="3-2">选项2</el-menu-item>
                     </el-menu-item-group>
                 </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
        <el-header  style="text-align: right; font-size: 12px">
             <el-dropdown>
                 <i class="el-icon-setting" style="margin-right: 15px"></i>
             <el-dropdown-menu slot="dropdown">
                 <el-dropdown-item>查看</el-dropdown-item>
                 <el-dropdown-item>新增</el-dropdown-item>
                 <el-dropdown-item>编辑</el-dropdown-item>
             </el-dropdown-menu>
             </el-dropdown>

            <span>韩昕燃</span>
           
        </el-header>
        <el-main>
            <router-view></router-view>
    
        </el-main>
        </el-container>
     </el-container>
  </div>

</template>

<script>
export default {
  
}
</script>

<style>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>