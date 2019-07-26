<template>
  <div class="app-container">
    <div style="text-align:center;font-size:22px;color:#555;margin:10px;">
      <!-- <el-select
        v-model="value"
        placeholder="请选择供应商"
        style="width:300px;"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select> 月度考核 -->
      金税信息技术股份有限公司-南航地服系统月度考核
    </div>
    <div style="display:flex;justify-content:space-between;color:#666;align-items:center;">
      <p>考核月份：<el-date-picker
        v-model="value4"
        type="month"
        placeholder="选择月"
      /></p>
      <!-- <el-button :loading="downloadLoading" style="margin:0 0 20px 20px;" type="primary" icon="document" @click="handleDownload">
        Export Excel
      </el-button>
      <a href="https://panjiachen.github.io/vue-element-admin-site/feature/component/excel.html" target="_blank" style="margin-left:15px;">
        <el-tag type="info">Documentation</el-tag>
      </a> -->
      <p>总体评分：<em style="color:red;">98</em> 分</p>
    </div>

    <el-table :data="list" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="考核项目" width="200" align="center">
        <template slot-scope="scope">
          {{ scope.row.project }}
        </template>
      </el-table-column>
      <el-table-column label="考核标准">
        <template slot-scope="scope">
          {{ scope.row.standard }}
        </template>
      </el-table-column>
      <el-table-column label="权重" width="115" align="center">
        <template slot-scope="scope">
          {{ scope.row.weight }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="评分" width="160">
        <!-- <template slot-scope="">
          <el-input style="width:100px;" placeholder="请输入评分" />
        </template> -->
        <template slot-scope="scope">
          {{ scope.row.grade }}
        </template>
      </el-table-column>
    </el-table>
    <!-- <div style="margin:20px;text-align:center;">
      <el-button class="filter-item" style="width:120px;" type="primary">
        保存
      </el-button>
    </div> -->
  </div>
</template>

<script>
import obj1 from '@/api/data'
import { fetchList } from '@/api/article'
import { parseTime } from '@/utils'

export default {
  name: 'ExportExcel',
  data() {
    return {
      obj: obj1,
      list: obj1,
      listLoading: true,
      downloadLoading: false,
      filename: '',
      autoWidth: true,
      bookType: 'xlsx',
      value4: '',
      options: [{
        value: '选项1',
        label: '金税信息技术股份有限公司'
      }, {
        value: '选项2',
        label: '软通动力有限公司'
      }],
      value: '选项1'
    }
  },
  created() {
    // this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      fetchList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
        const filterVal = ['id', 'title', 'author', 'pageviews', 'display_time']
        const list = this.list
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
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

<style>
.radio-label {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 30px;
}
</style>
