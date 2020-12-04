<template>
  <div class="home">
    <el-table :data="tableData" border style="width: 300px" :cell-class-name="addClass">
      <el-table-column prop="name" label="姓名" align ="center"> </el-table-column>
      <el-table-column prop="value" label="数值" align ="center"> </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tableData: [
        {
            name: "张三",
            value: -2
        },
        {
            name: "李四",
            value: 0
        },
        {
            name: "王五",
            value: 15
        }
      ]
    }
  },
  methods:{

    addClass({row, column, rowIndex, columnIndex}) {
      // 第二列
      if(columnIndex == 1) {
          // 根据不同的值设置不同的class
          if(row.value > 0) {
              return "greenStyle"
          } else if(row.value < 0) {
              return "redStyle"
          } else {
              return "blueStyle"
          }
      }
    }
  },
}
</script>

<style lang="scss" scoped>
/* 不同的颜色 */
/deep/ .greenStyle {
    background: green !important;
}
/deep/ .redStyle {
    background: red !important
}

/deep/ .blueStyle {
    background: blue !important;
}

// 设置悬浮的颜色 为透明
/deep/ .el-table tbody tr:hover > td {
  background-color: transparent;
}
</style>
