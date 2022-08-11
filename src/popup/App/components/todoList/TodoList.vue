<template>
  <div>
    <div class="todo-title">任务待办</div>
    <div class="todo-container">
      <el-input v-model="input" placeholder="请输入" class="input" size="mini" clearable>
        <el-button slot="append" @click="addTodo">添加</el-button>
      </el-input>
      <div class="errText" v-show="errText">输入不能为空</div>
      <el-transfer :data="todoList" :titles="['待办', '已完成']" class="transfer" v-model="todoSelect">
        <span slot-scope="{ option }">
          <span v-if="option.label.length < 5" class="transfer-item"
            ><span>{{ option.label }}</span
            ><i class="el-icon-delete" @click="delItem(option.key)"></i
          ></span>
          <el-tooltip placement="right-start" v-else>
            <div slot="content" style="max-width: 200px">
              {{ option.label }}
            </div>
            <span class="transfer-item"
              ><span>{{ option.label }}</span> <i class="el-icon-delete" @click="delItem(option.key)"></i
            ></span>
          </el-tooltip>
        </span>
      </el-transfer>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: '',
      todoList: JSON.parse(localStorage.getItem('todoList')) || [],
      todoSelect: JSON.parse(localStorage.getItem('todoSelect')) || [],
      errText: false
    }
  },
  watch: {
    input(val) {
      if (!val) {
        this.errText = true
      } else {
        this.errText = false
      }
    },
    todoSelect: {
      handler(val) {
        localStorage.setItem('todoSelect', JSON.stringify(val))
        return JSON.parse(localStorage.getItem('todoSelect')) || []
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    addTodo() {
      if (this.input) {
        this.todoList.push({
          label: this.input,
          key: new Date().getTime()
        })
        localStorage.setItem('todoList', JSON.stringify(this.todoList))
      } else {
        this.errText = true
      }
    },
    delItem(key) {
      this.todoList = this.todoList.filter(i => i.key != key)
      this.todoSelect = this.todoSelect.filter(i => i != key)
      localStorage.setItem('todoList', JSON.stringify(this.todoList))
    }
  }
}
</script>
<style lang="scss" scoped>
.todo-title {
  font-size: 14px;
  border-left: 5px solid #50adff;
  padding: 8px 0 4px 8px;
  line-height: 16px;
  margin-bottom: 12px;
  background: #ecf8ff;
  color: #606266;
  font-weight: bolder;
}
.todo-container {
  width: 100%;
  margin: 4px auto;
  .input {
    width: 60%;
    :deep .el-input-group__append,
    .el-input-group__prepend {
      background-color: #50adff;
      color: #fff;
      border: #50adff;
    }
  }
  .errText {
    color: red;
    font-size: 12px;
    padding-left: 8px;
  }
  .transfer {
    width: 98%;
    margin: 16px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    .transfer-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 4px;
      span {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    :deep .el-transfer {
      font-size: 12px;
    }
    :deep .el-transfer-panel .el-transfer-panel__header .el-checkbox .el-checkbox__label {
      font-size: 14px;
    }
    :deep .el-transfer-panel__item.el-checkbox {
      width: 80%;
    }
    :deep .el-transfer-panel {
      width: 44%;
    }
    :deep .el-transfer__buttons {
      padding: 0 4px;
    }
    :deep .el-button + .el-button,
    .el-checkbox.is-bordered + .el-checkbox.is-bordered {
      margin-left: 4px;
    }
    :deep .el-transfer__button {
      padding: 4px;
    }
    :deep .el-button {
      padding: 0;
      font-size: 12px;
    }
  }
}
</style>
