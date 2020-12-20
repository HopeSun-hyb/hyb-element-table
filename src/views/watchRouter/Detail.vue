<template>
    <div>
        <div>我是WatchRouter的详情页面啊    -----！！！！</div>

        <el-button @click="goHome"> 返回原页</el-button>
    </div>    
</template>

<script>
export default {
    name: "watchDetail",


   methods:{
       goHome() {
          this.$router.go(-1)
       }
   }
}
</script>