<template>
  <div class="content">
    <div class="form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item class="form-item" label="姓名:">
          <el-input v-model="formInline.user" size="mini" placeholder="请输入员工姓名"></el-input>
        </el-form-item>
        <el-form-item class="form-item" label="部门:">
          <el-select v-model="formInline.group" size="mini" placeholder="请选择所属部门">
            <el-option label="商务部" value="1"></el-option>
            <el-option label="财务部" value="2"></el-option>
            <el-option label="技术部" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="form-item">
          <el-button type="primary" size="mini" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item class="form-item">
          <el-button type="primary" size="mini" icon="el-icon-circle-plus-outline" @click="dialogFormVisible = true">添加
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%" max-height="500">
        <el-table-column prop="id" label="序号" width="50"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="group" label="所属部门"></el-table-column>
        <el-table-column prop="position" label="职位"></el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click.native.prevent="editRow(scope.$index, tableData)" type="primary" size="mini">
              编辑
            </el-button>
            <el-popconfirm title="确定删除该条数据吗？" @confirm="deleteRow(scope.$index, tableData)">
              <el-button slot="reference" type="danger" size="mini">移除</el-button>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="20" @current-change="pageChange"></el-pagination>
    </div>
    <el-dialog title="添加员工" :visible.sync="dialogFormVisible">
      <el-form :model="form" :rules="rules" ref="ruleForm">
        <el-form-item label="员工姓名" prop="name" required :label-width="formLabelWidth">
          <el-input v-model="form.name" placeholder="请输入员工姓名" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属部门" prop="group" required :label-width="formLabelWidth">
          <el-select v-model="form.group" placeholder="请选择所属部门">
            <el-option label="商务部" value="1"></el-option>
            <el-option label="财务部" value="2"></el-option>
            <el-option label="技术部" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="员工职位" prop="position" required :label-width="formLabelWidth">
          <el-select v-model="form.position" placeholder="请选择员工职位">
            <el-option label="部门领导" value="1"></el-option>
            <el-option label="员工" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="submitForm('ruleForm')" size="mini">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'User',
    components: {

    },
    data() {
      return {
        dialogFormVisible: false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          group: '',
          position: '',
        },
        rules: {
          name: [{
              required: true,
              message: '请输入员工姓名',
              trigger: 'blur'
            }
          ],
          group: [{
            required: true,
            message: '请选择所属部门',
            trigger: 'change'
          }],
          position: [{
            required: true,
            message: '请选择员工职位',
            trigger: 'change'
          }],
        },
        formLabelWidth: '120px',
        formInline: {
          user: '',
          group: ''
        },
        tableData: [{
          id: 1,
          name: '王小虎',
          group: '商务部',
          position: '员工',
        }, {
          id: 2,
          name: '王小虎',
          group: '商务部',
          position: '员工',
        }, {
          id: 3,
          name: '王小虎',
          group: '商务部',
          position: '员工',
        }, {
          id: 4,
          name: '王小虎',
          group: '商务部',
          position: '员工',
        }, {
          id: 5,
          name: '王小虎',
          group: '商务部',
          position: '员工',
        }, {
          id: 6,
          name: '王小虎',
          group: '商务部',
          position: '员工',
        }, {
          id: 7,
          name: '王小虎',
          group: '商务部',
          position: '员工',
        }]
      }
    },
    mounted() {

    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      editRow(index, rows) {
        console.log(index, rows);
      },
      pageChange(index) {
        console.log(index);
      },
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
  }
</script>

<style scoped>
  .content {
    margin: 10px 0;
    width: 100%;
    overflow: hidden;
    background: #fff;
  }

  .form {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
  }

  .form-item {
    margin-bottom: 0;
  }

  .el-select {
    width: 100%;
  }

  .page {
    display: flex;
    justify-content: flex-end;
  }
</style>
