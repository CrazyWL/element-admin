<template>
  <div class="app-container">
    <div class="block">
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
        同意入场
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
        不同意入场
      </el-button>
    </div>
    <div class="filter-container">
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title">
            <div style="width:100%;font-size:14px;color:#666;display:flex;justify-content: space-between;">
              <div>
                <i class="header-icon el-icon-search" style="margin-right:5px;" />筛选查询
              </div>
              <span style="margin-right:10px;">收起筛选</span>
            </div>
          </template>
          <el-input v-model="listQuery.title" placeholder="姓名" style="width: 120px;" class="filter-item" @keyup.enter.native="handleFilter" />
          <el-input v-model="listQuery.title" placeholder="合作项目" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
          <el-select v-model="listQuery.importance" placeholder="岗位" clearable style="width: 120px" class="filter-item">
            <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
          </el-select>
          <el-select v-model="listQuery.type" placeholder="岗位级别" clearable class="filter-item" style="width: 160px">
            <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
          </el-select>
          <el-select v-model="listQuery.importance" placeholder="学历" clearable style="width: 120px" class="filter-item">
            <el-option v-for="item in educationOptions" :key="item" :label="item" :value="item" />
          </el-select>
          <!-- <el-select v-model="listQuery.status" placeholder="状态" clearable style="width: 120px" class="filter-item">
            <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item" />
          </el-select> -->
          <!-- <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
            <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
          </el-select> -->
          <el-input v-model="listQuery.title" placeholder="工作年限" style="width: 120px;" class="filter-item" @keyup.enter.native="handleFilter" />

          <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
            搜索
          </el-button>
        </el-collapse-item>
      </el-collapse>

      <!-- <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        Export
      </el-button>
      <el-checkbox v-model="showReviewer" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
        reviewer
      </el-checkbox> -->
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      element-loading-text="拼命加载中"
      fit
      highlight-current-row
      style="width: 100%;"
      :header-cell-style="{background:'#f1f7ff',color:'#606266'}"
      @sort-change="sortChange"
    >
      <el-table-column
        type="selection"
        align="center"
        width="38"
      />
      <el-table-column label="序号" align="center" width="50">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="90px" align="center">
        <template slot-scope="">
          高渐离
        </template>
      </el-table-column>
      <el-table-column label="合作项目" align="center">
        <template slot-scope="">
          OA办公自动化系统
        </template>
      </el-table-column>
      <el-table-column label="岗位" align="center">
        <template slot-scope="">
          JAVA开发工程师
        </template>
      </el-table-column>
      <el-table-column label="级别" width="70px" align="center">
        <template slot-scope="">
          高级
        </template>
      </el-table-column>
      <el-table-column label="学历" width="70px" align="center">
        <template slot-scope="">
          本科
        </template>
      </el-table-column>
      <el-table-column label="专业" width="140px" align="center">
        <template slot-scope="">
          计算机科学与技术
        </template>
      </el-table-column>
      <!-- <el-table-column label="毕业院校" width="120px" align="center">
        <template slot-scope="">
          华南理工大学
        </template>
      </el-table-column> -->
      <el-table-column label="工作年限" width="85px" align="center">
        <template slot-scope="">
          3
        </template>
      </el-table-column>
      <el-table-column label="状态" width="85px" align="center">
        <template slot-scope="">
          申请入场
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220px" align="center">
        <template slot-scope="{row}">

          <router-link to="/components/tab">
            <el-button size="mini" type="primary">
              查看
            </el-button>
          </router-link>
          <!-- <el-button type="primary" size="mini" @click="handleUpdate(row)">
            编辑
          </el-button> -->
          <!-- <el-button v-if="row.status!='published'" size="mini" type="success" @click="handleModifyStatus(row,'published')">
            Publish
          </el-button>
          <el-button v-if="row.status!='draft'" size="mini" @click="handleModifyStatus(row,'draft')">
            Draft
          </el-button>
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(row,'deleted')">
            删除
          </el-button>-->
          <el-button size="mini" type="success" @click="handleModifyStatus(row,'deleted')">
            同意入场
          </el-button>
        </template>
      </el-table-column>
      <!-- <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Date" width="150px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Title" min-width="150px">
        <template slot-scope="{row}">
          <span class="link-type" @click="handleUpdate(row)">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110px" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="showReviewer" label="Reviewer" width="110px" align="center">
        <template slot-scope="scope">
          <span style="color:red;">{{ scope.row.reviewer }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Imp" width="80px">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="meta-item__icon" />
        </template>
      </el-table-column>
      <el-table-column label="Readings" align="center" width="95">
        <template slot-scope="{row}">
          <span v-if="row.pageviews" class="link-type" @click="handleFetchPv(row.pageviews)">{{ row.pageviews }}</span>
          <span v-else>0</span>
        </template>
      </el-table-column>
      <el-table-column label="Status" class-name="status-col" width="100">
        <template slot-scope="{row}">
          <el-tag :type="row.status | statusFilter">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            Edit
          </el-button>
          <el-button v-if="row.status!='published'" size="mini" type="success" @click="handleModifyStatus(row,'published')">
            Publish
          </el-button>
          <el-button v-if="row.status!='draft'" size="mini" @click="handleModifyStatus(row,'draft')">
            Draft
          </el-button>
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(row,'deleted')">
            Delete
          </el-button>
        </template>
      </el-table-column> -->
    </el-table>

    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="right"
        label-width="110px"
        style="width: 400px;margin-left:50px;"
      >
        <el-form-item label="姓名" prop="title">
          <el-input v-if="textMap[dialogStatus] !== '新建'" v-model="person.name" />
          <el-input v-else v-model="person.name1" />
        </el-form-item>
        <el-form-item label="性别" prop="title">
          <el-radio-group v-model="radio">
            <el-radio :label="1">保密</el-radio>
            <el-radio :label="2">男</el-radio>
            <el-radio :label="3">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="身份证号" prop="title">
          <el-input v-if="textMap[dialogStatus] !== '新建'" v-model="person.userID" />
          <el-input v-else v-model="person.userID1" />
        </el-form-item>
        <el-form-item label="手机号" prop="title">
          <el-input v-if="textMap[dialogStatus] !== '新建'" v-model="person.tel" />
          <el-input v-else v-model="person.tel1" />
        </el-form-item>
        <el-form-item label="合作项目" prop="type">
          <el-select v-model="person.project" class="filter-item" placeholder="合作项目">
            <el-option v-for="item of projectOptions" :key="item.key" :label="item.display_name" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="岗位" prop="type">
          <el-select v-model="person.post" class="filter-item" placeholder="岗位">
            <el-option v-for="item of calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="级别" prop="type">
          <el-select v-model="person.level" class="filter-item" placeholder="级别">
            <el-option v-for="item of importanceOptions" :key="item.key" :label="item.display_name" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="学历" prop="type">
          <el-select v-model="person.education" class="filter-item" placeholder="学历">
            <el-option v-for="item of educationOptions" :key="item.key" :label="item.display_name" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="毕业院校" prop="title">
          <el-input v-if="textMap[dialogStatus] !== '新建'" v-model="person.school" />
          <el-input v-else v-model="person.school1" />
        </el-form-item>
        <el-form-item label="专业" prop="title">
          <el-input v-if="textMap[dialogStatus] !== '新建'" v-model="person.name" />
          <el-input v-else v-model="person.userID1" />
        </el-form-item>
        <el-form-item label="工作年限" prop="title">
          <el-input v-if="textMap[dialogStatus] !== '新建'" v-model="person.workYear" />
          <el-input v-else v-model="person.workYear1" />
        </el-form-item>
        <el-form-item label="身份证明" prop="title">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload" />
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="学历证明" prop="title">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload" />
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="社保证明" prop="title">
          <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload" />
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="账户启用状态" prop="title">
          <el-switch v-model="value6" disabled />
        </el-form-item>
        <!-- <el-form-item label="合作项目" prop="title">
          <el-input v-if="textMap[dialogStatus] !== '新建'" v-model="person.project" />
          <el-input v-else v-model="person.project1" />
        </el-form-item>
        <el-form-item label="岗位" prop="title">
          <el-input v-if="textMap[dialogStatus] !== '新建'" v-model="person.post" />
          <el-input v-else v-model="person.post1" />
        </el-form-item>
        <el-form-item label="级别" prop="title">
          <el-input v-if="textMap[dialogStatus] !== '新建'" v-model="person.level" />
          <el-input v-else v-model="person.level1" />
        </el-form-item>
        <el-form-item label="学历" prop="title">
          <el-input v-if="textMap[dialogStatus] !== '新建'" v-model="person.education" />
          <el-input v-else v-model="person.education1" />
        </el-form-item>-->
        <!-- <el-form-item label="Type" prop="type">
          <el-select v-model="temp.type" class="filter-item" placeholder="Please select">
            <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
          </el-select>
        </el-form-item>
        <el-form-item label="Date" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date" />
        </el-form-item>
        <el-form-item label="Title" prop="title">
          <el-input v-model="temp.title" />
        </el-form-item>
        <el-form-item label="Status">
          <el-select v-model="temp.status" class="filter-item" placeholder="Please select">
            <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="Imp">
          <el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3" style="margin-top:8px;" />
        </el-form-item>
        <el-form-item label="Remark">
          <el-input v-model="temp.remark" :autosize="{ minRows: 2, maxRows: 4}" type="textarea" placeholder="Please input" />
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <router-link to="">
          <el-button @click="dialogFormVisible = false">
            取消
          </el-button>
        </router-link>
        <el-button v-if="textMap[dialogStatus] !== '查看'" type="primary" @click="dialogStatus==='create'?createData():updateData()">
          确认
        </el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogPvVisible" title="Reading statistics">
      <el-table :data="pvData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pv" label="Pv" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import waves from '@/directive/waves' // waves directive
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination

const calendarTypeOptions = [
  { key: 'CN', display_name: 'JAVA开发工程师' },
  { key: 'US', display_name: '.NET开发工程师' },
  { key: 'JP', display_name: 'WEB开发工程师' },
  { key: 'EU', display_name: 'UI设计师' }
]

// arr to obj, such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'ComplexTable',
  components: { Pagination },
  directives: { waves },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  data() {
    return {
      radio: 1,
      value6: true,
      tableKey: 0,
      list: null,
      total: 0,
      person: {
        name: '高渐离',
        project: 'OA办公自动化系统',
        post: 'JAVA开发工程师',
        level: '高级',
        education: '本科',
        school: '华南理工大学',
        workYear: '3',
        userID: 423765456787654431,
        tel: 13676543212
      },
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        education: undefined,
        title: undefined,
        type: undefined,
        status: undefined,
        sort: '+id'
      },
      importanceOptions: ['高级', '中级', '初级'],
      educationOptions: ['研究生', '本科', '大专'],
      statusOptions: ['待审批', '不同意入场'],
      projectOptions: ['OA办公自动化系统', '南航地服系统'],
      calendarTypeOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      // statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: '编辑',
        create: '新建',
        view: '查看'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    open() {
      this.$message({
        message: '发送成功!',
        type: 'success'
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    handleModifyStatus(row, status) {
      this.$message({
        message: '操作Success',
        type: 'success'
      })
      row.status = status
    },
    sortChange(data) {
      const { prop, order } = data
      if (prop === 'id') {
        this.sortByID(order)
      }
    },
    sortByID(order) {
      if (order === 'ascending') {
        this.listQuery.sort = '+id'
      } else {
        this.listQuery.sort = '-id'
      }
      this.handleFilter()
    },
    resetTemp() {
      this.temp = {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
      }
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.temp.author = 'vue-element-admin'
          createArticle(this.temp).then(() => {
            this.list.unshift(this.temp)
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Created Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleView(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'view'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.temp)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateArticle(tempData).then(() => {
            for (const v of this.list) {
              if (v.id === this.temp.id) {
                const index = this.list.indexOf(v)
                this.list.splice(index, 1, this.temp)
                break
              }
            }
            this.dialogFormVisible = false
            this.$notify({
              title: 'Success',
              message: 'Update Successfully',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleDelete(row) {
      this.$notify({
        title: 'Success',
        message: 'Delete Successfully',
        type: 'success',
        duration: 2000
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    },
    handleFetchPv(pv) {
      fetchPv(pv).then(response => {
        this.pvData = response.data.pvData
        this.dialogPvVisible = true
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['timestamp', 'title', 'type', 'importance', 'status']
        const filterVal = ['timestamp', 'title', 'type', 'importance', 'status']
        const data = this.formatJson(filterVal, this.list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: 'table-list'
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
</script>
<style scoped>
.block {
  padding-bottom: 10px;
}
</style>

