<template>
  <div class="tab-container">
    <!-- <el-tag>mounted times ：{{ createdTimes }}</el-tag>
    <el-alert :closable="false" style="width:200px;display:inline-block;vertical-align: middle;margin-left:30px;" title="Tab with keep-alive" type="success" />
    -->
    <!-- <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">
        <keep-alive>
          <tab-pane v-if="activeName==item.key" :type="item.key" @create="showCreatedTimes" />
        </keep-alive>
      </el-tab-pane>
    </el-tabs> -->
    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">
      <el-tab-pane label="基本详情" name="基本详情">
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content bg-purple">姓名</div></el-col>
          <el-col :span="6"><div class="grid-content">高渐离</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">性别</div></el-col>
          <el-col :span="6"><div class="grid-content ">男</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">身份证号</div></el-col>
          <el-col :span="6"><div class="grid-content">421332123466788896</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">手机号</div></el-col>
          <el-col :span="6"><div class="grid-content ">13122223344</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">毕业院校</div></el-col>
          <el-col :span="6"><div class="grid-content">华南理工大学</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">学历</div></el-col>
          <el-col :span="6"><div class="grid-content ">本科</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">专业</div></el-col>
          <el-col :span="6"><div class="grid-content">计算机科学与技术</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">工作年限</div></el-col>
          <el-col :span="6"><div class="grid-content ">5</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">资格证号</div></el-col>
          <el-col :span="6"><div class="grid-content ">986372678768</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">SSO账号</div></el-col>
          <el-col :span="6"><div class="grid-content ">WL</div></el-col>
        </el-row>

      </el-tab-pane>

      <el-tab-pane label="项目经历" name="项目经历">
        <el-table
          :data="list"
          fit
          highlight-current-row
          :header-cell-style="{background:'#f1f7ff',color:'#606266'}"
          style="width: 100%"
        >
          <el-table-column
            v-loading="loading"
            align="center"
            label="合作项目"
            element-loading-text="请给我点时间！"
          >
            <template>
              <span>OA办公自动化系统</span>
            </template>
          </el-table-column>

          <el-table-column width="100px" align="center" label="批次">
            <template>
              <span>2019年度</span>
            </template>
          </el-table-column>

          <el-table-column width="180px" align="center" label="外包公司">
            <template>
              <span>软通动力</span>
            </template>
          </el-table-column>

          <el-table-column width="140px" align="center" label="岗位">
            <template>
              <span>JAVA开发工程师</span>
            </template>
          </el-table-column>

          <el-table-column width="80px" align="center" label="级别">
            <template>
              <span>高级</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="入场日期" width="95">
            <template>
              <span>2018/09/10</span>
            </template>
          </el-table-column>

          <el-table-column class-name="status-col" align="center" label="退场日期" width="110">
            <template>
              <span>2019/09/10</span>
            </template>
          </el-table-column>
          <el-table-column class-name="status-col" align="center" label="操作" width="110">
            <template>
              <el-button type="primary" size="mini">
                查看
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          style="margin-top:20px;"
          layout="prev, pager, next"
          :total="50"
        />
      </el-tab-pane>
      <el-tab-pane label="面试经历" name="面试经历">
        <el-table
          :data="list"
          fit
          highlight-current-row
          :header-cell-style="{background:'#f1f7ff',color:'#606266'}"
          style="width: 100%"
        >
          <el-table-column
            v-loading="loading"
            align="center"
            label="合作项目"
            element-loading-text="请给我点时间！"
          >
            <template>
              <span>OA办公自动化系统</span>
            </template>
          </el-table-column>

          <el-table-column width="100px" align="center" label="批次">
            <template>
              <span>2019年度</span>
            </template>
          </el-table-column>

          <el-table-column width="180px" align="center" label="外包公司">
            <template>
              <span>软通动力</span>
            </template>
          </el-table-column>

          <el-table-column width="140px" align="center" label="岗位">
            <template>
              <span>JAVA开发工程师</span>
            </template>
          </el-table-column>

          <el-table-column width="80px" align="center" label="级别">
            <template>
              <span>高级</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="面试日期" width="95">
            <template>
              <span>2018/09/01</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="面试结果" width="110">
            <template>
              <span>合格</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="面试成绩" width="110">
            <template>
              <span>83</span>
            </template>
          </el-table-column>
          <el-table-column class-name="status-col" align="center" label="操作" width="110">
            <template>
              <el-button type="primary" size="mini">
                查看
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          background
          style="margin-top:20px;"
          layout="prev, pager, next"
          :total="50"
        />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// import tabPane from './components/TabPane'
import { fetchList } from '@/api/article'
export default {
  name: 'Tab',
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  // components: { tabPane },
  data() {
    return {
      tabMapOptions: [
        { label: '基本详情', key: 'CN' },
        { label: '项目经历', key: 'US' },
        { label: '面试经历', key: 'JP' }
        // { label: 'Eurozone', key: 'EU' }
      ],
      activeName: '基本详情',
      createdTimes: 0,
      total: 0,
      list: null,
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: '+id'
      },
      loading: false
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // init the default  selected tab
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
    this.getList()
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    },
    getList() {
      this.loading = true
      this.showCreatedTimes() // for test
      fetchList(this.listQuery).then(response => {
        this.list = response.data.items
        this.total = response.data.total
        this.loading = false
      })
    }
  }
}
</script>

<style scoped>
  .tab-container {
    margin: 30px;
  }
  .el-row {
    margin-bottom: 20px;

    border-bottom:1px solid #e7ebf3;
    border-top:1px solid #e7ebf3;
  }
  .el-row:last-child {margin-bottom: 0;}
  .el-col {color:#444;border-bottom:1px solid #e7ebf3;padding: 0!important;}
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #eef4fb;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {

    min-height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .row-bg {
    padding: 0px 0;
    background-color: #f5f5f5;
  }
  .tab-container >>>.el-tabs__item {height:50px;line-height:50px;}
</style>
