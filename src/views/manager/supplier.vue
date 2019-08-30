<template>
  <div class="app-container">
    <el-tabs type="border-card">
      <el-tab-pane label="供应商月度工时报表">

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
              <el-input v-model="listQuery.title" placeholder="姓名" style="width: 100px;" class="filter-item" @keyup.enter.native="handleFilter" />
              <el-input v-model="listQuery.title" placeholder="合作项目" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
              <el-select v-model="listQuery.type" placeholder="岗位" clearable class="filter-item" style="width: 160px">
                <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key" />
              </el-select>
              <el-select v-model="listQuery.importance" placeholder="岗位级别" clearable style="width: 120px" class="filter-item">
                <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item" />
              </el-select>
              <el-input v-model="listQuery.title" placeholder="工作年限" style="width: 100px;" class="filter-item" @keyup.enter.native="handleFilter" />
              <el-input v-model="listQuery.title" placeholder="批次" style="width: 120px;" class="filter-item" @keyup.enter.native="handleFilter" />

              <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
                搜索
              </el-button>
            </el-collapse-item>
          </el-collapse><el-table
            :key="tableKey"
            v-loading="listLoading"
            :data="tableList"
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
            <el-table-column label="姓名" width="80" align="center">
              <template slot-scope="">
                李军
              </template>
            </el-table-column>
            <el-table-column label="供应商" align="center">
              <template slot-scope="">
                金税信息技术股份有限公司
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
            <el-table-column label="级别" align="center">
              <template slot-scope="">
                高级
              </template>
            </el-table-column>
            <el-table-column label="人天数" width="80" align="center">
              <template slot-scope="">
                30
              </template>
            </el-table-column>
            <!--<el-table-column width="80px" label="月份" align="center">
              <template slot-scope="">
                12
              </template>
            </el-table-column>
             <el-table-column label="操作" width="160px" align="center">
              <template slot-scope="">
                <router-link to="interviewInfoView">
                  <el-button size="mini" type="primary">
                    查看
                  </el-button>
                </router-link>
              </template>
            </el-table-column> -->
          </el-table>

          <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getList" />

        </div>
      </el-tab-pane>
      <el-tab-pane label="供应商月度考核">
        <div style="text-align:left;font-size:16px;color:#555;margin:10px;">
          供应商：<el-select
            v-model="value"
            placeholder="请选择项目"
            style="width:300px;"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div style="display:flex;justify-content:space-between;color:#666;align-items:center;">
          <p>考核月份：<el-date-picker
            v-model="value4"
            type="month"
            placeholder="选择月"
          /></p>
          <p>总体评分：<em style="color:red;" /></p>
        </div>

        <el-table :data="list" element-loading-text="拼命加载中" border fit highlight-current-row>
          <el-table-column align="center" label="序号" width="50">
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
          <el-table-column label="权重" width="80" align="center">
            <template slot-scope="scope">
              {{ scope.row.weight }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="评分" width="140">
            <template slot-scope="">
              <el-input style="width:100px;" placeholder="请输入评分" />
            </template>
          </el-table-column>
          <el-table-column align="center" label="自动扣分" width="80">
            <template slot-scope="scope">
              {{ scope.row.deduction }}
            </template>
          </el-table-column>
          <el-table-column align="center" label="自动扣分依据" width="180">
            <template slot-scope="scope">
              <div v-if="scope.row.reason == '迟到'">
                <router-link to="/supplier/checkManage">
                  <el-button size="mini" type="primary">
                    查看
                  </el-button>
                </router-link>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin:20px;text-align:center;">
          <el-button class="filter-item" style="width:120px;" type="primary">
            保存
          </el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import obj1 from '@/api/data'
import { fetchList } from '@/api/article'
export default {
  name: 'ExportExcel',
  data() {
    return {
      list: obj1,
      tableList: null,
      listLoading: true,
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
      value: '选项1',

      // listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        education: undefined,
        title: undefined,
        type: undefined,
        status: undefined,
        sort: '+id'
      }
    }
  },
  created() {
    // this.fetchData()
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.tableList = response.data.items
        this.total = response.data.total

        // Just to simulate the time of the request
        setTimeout(() => {
          this.listLoading = false
        }, 1.5 * 1000)
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
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
