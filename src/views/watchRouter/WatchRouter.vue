<template>
    <div>
        <div v-if="JSON.stringify(this.$route.query) == '{}'">我是主页面 啊    -----！！！！
            <el-button @click="goDetail"> 进入详情页</el-button>
        </div>
        <Detail v-else/>        
    </div>    
</template>
<script>
import Detail from './Detail'
export default {
    name: "watchRouter",
    components: {
       Detail 
    },

   methods:{
       goDetail() {
          this.$router.push({name: this.$route.name, query: {action : "detail"}})
       }
   }
}
</script>