<template>
  <div class="about">
    <el-button
      type="primary"
      size = "mini"
      @click="addRow"
    >新增</el-button>

    <el-form :model="tableForm" ref="tableForm">
      <el-table
        :data = "tableForm.tableData"
        style="width: 50%"
      >
        <el-table-column
          prop = "name"
          label= "需方">
        </el-table-column>
        <el-table-column
          prop = "supplier"
          label= "供应商">
          <template slot-scope="scope">
            <el-form-item :prop="`tableData.${scope.$index}.supplier`" :rules="tableRules.supplier">
              <el-select v-model="tableForm.tableData[scope.$index].supplier" placeholder="请选择供应商" @change = '(value) => supplierChange(value, scope.$index)' size="mini">
                <el-option
                  v-for="item in supplierOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item">
                </el-option>
              </el-select>
            </el-form-item>
          </template>
        </el-table-column>

        <el-table-column
          prop= "balance"
          label= "需求量">
         <template slot-scope="scope">
          <el-form-item
            :prop = "`tableData.${scope.$index}.balance`"
            :rules="tableRules.balance">
              <el-input v-model="tableForm.tableData[scope.$index].balance" size="mini"></el-input>
          </el-form-item>  
         </template>
        </el-table-column>
        <el-table-column
          prop = "all"
          label= "总量"
        >
        </el-table-column>
      </el-table>
    </el-form>

    <el-button
      type="primary"
      size = "mini"
      @click="submit"
    >提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'TableRules',
  data() {
    const validBalance = (rule, value, callback) => {
      // 行索引
      var index = rule.field.split('.')[1]
      var all = this.tableForm.tableData[index].all;
      var supplier = this.tableForm.tableData[index].supplier;
      if(value> all) {
        callback(new Error("不可大于总量"))
      }

      if(supplier==null) {
        callback(new Error("请先选择供应商"))
      }

      callback()
    }
    return {
      tableForm:{
        tableData:[
          {
            name: "王二狗小卖部",
            supplier: undefined,
            balance: undefined,
            all: undefined,
          }
        ]
      },

      tableRules : {
        balance: [
          {required: true, message: "数量不可为空", trigger: 'blur'},
          {
            pattern: /^([1-9][0-9]*)(\.\d+)?$/,
            message: "输入正实数",
            trigger: ["blur"],
          },
          {validator: validBalance,trigger: "blur"},
        ],
        supplier: [
          {required: true, message: "数量不可为空", trigger: 'change'},
        ]
      },

      supplierOptions: [{
          value: '0001',
          label: '茅台酒厂',
          all: 200
        }, {
          value: '0003',
          label: '五粮液酒厂',
          all: 300
        }
      ]

    }
  },
  methods:{
    addRow() {
      this.tableForm.tableData.push({
        name: "王二狗小卖部",
        supplier: undefined,
        balance: undefined,
        all: undefined,
      })
    },

    submit() {
      this.$refs["tableForm"].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },

    supplierChange(value, index) {
      this.tableForm.tableData[index].all = value.all;
    }
  }
}
</script>

<style lang="scss" scoped>
</style>