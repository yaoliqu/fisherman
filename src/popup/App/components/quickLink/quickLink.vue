<template>
  <div>
    <div class="quick-title">快捷导航</div>
    <div class="quick-container">
      <el-form
        :inline="true"
        :model="form"
        class="form"
        ref="form"
        :rules="rules"
      >
        <el-form-item label="标题" prop="title">
          <el-input
            v-model="form.title"
            placeholder="标题"
            style="width: 100px"
          ></el-input>
        </el-form-item>
        <el-form-item label="链接" prop="link">
          <el-input
            v-model="form.link"
            placeholder="链接"
            style="width: 100px"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm" size="mini"
            >添加</el-button
          >
        </el-form-item>
      </el-form>

      <el-table :data="linkData" style="width: 100%; font-size: 12px">
        <el-table-column label="标题" width="180" show-overflow-tooltip>
          <template slot-scope="scope">
            <span>{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >打开</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row.key)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div class="outPut">
        <download-excel
          class="export-excel-wrapper"
          :data="linkData"
          :fields="json_fields"
          name="快捷导航.xls"
          v-if="linkData.length"
        >
          <el-button type="primary" size="mini" :disabled="!linkData.length"
            >备份导出</el-button
          >
        </download-excel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        title: '',
        link: '',
      },
      rules: {
        title: [{ required: true, message: '请输入', trigger: 'none' }],
        link: [
          { required: true, message: '请输入', trigger: 'none' },
          {
            pattern:
              // eslint-disable-next-line
              /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,
            message: '这是什么鸡儿~',
            trigger: 'none',
          },
        ],
      },
      linkData: JSON.parse(localStorage.getItem('linkData')) || [],
      json_fields: {
        标题: 'title',
        链接: 'link',
      },
    }
  },

  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.linkData.push({
            ...this.form,
            key: new Date().getTime(),
          })
          localStorage.setItem('linkData', JSON.stringify(this.linkData))
          this.form = {
            title: '',
            link: '',
          }
        }
      })
    },
    handleEdit(row) {
      window.open(row.link, '_blank')
    },
    handleDelete(key) {
      this.linkData = this.linkData.filter((i) => i.key != key)
      localStorage.setItem('linkData', JSON.stringify(this.linkData))
    },
  },
}
</script>
<style lang="scss" scoped>
.quick-title {
  font-size: 14px;
  border-left: 5px solid #67c23a;
  padding: 8px 0 4px 8px;
  line-height: 16px;
  margin-bottom: 12px;
  background: #f4ffec;
  color: #606266;
  font-weight: bolder;
}
.quick-container {
  width: 100%;
  margin: 4px auto;
  .form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px !important;
    ::v-deep .el-form--inline .el-form-item {
      margin: 0;
    }
    ::v-deep .el-form-item {
      margin: 0;
    }
    ::v-deep .el-form-item__label {
      font-size: 12px;
    }
    ::v-deep .el-form-item__content {
      font-size: 12px;
    }
    ::v-deep .el-input {
      width: 70%;
      font-size: 12px;
    }
    ::v-deep .el-input__inner {
      font-size: 12px;
      line-height: 28px;
      height: 28px;
      padding: 0 8px;
    }
    ::v-deep .el-form-item__error {
      z-index: 99;
    }
  }
  .outPut {
    width: 100%;
    padding: 12px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
