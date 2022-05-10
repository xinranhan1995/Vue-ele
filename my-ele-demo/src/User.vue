<template>
   <div>
        <h1>user</h1>
     
        <p>欢迎回来,{{$route.params.name}}</p>
    </div>
</template>

<script>
export default {
 data () {
            return {
                msg: "我是page1组件"
            }
        }
}
</script>

<style>

</style>