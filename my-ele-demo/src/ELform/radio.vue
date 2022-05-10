<template>
  <div>
    <el-row type="flex" justify="start">
      <el-radio-group v-model="radio">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 3,//:lable带冒号表示的是数字。
    };
  },
};
</script>

<style>
</style>