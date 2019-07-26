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
      <el-tab-pane label="基本信息" name="基本信息">
        <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content bg-purple">合作项目</div></el-col>
          <el-col :span="6"><div class="grid-content">统一移动平台</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">管理部门</div></el-col>
          <el-col :span="6"><div class="grid-content ">中台研发处</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">采购编码</div></el-col>
          <el-col :span="6"><div class="grid-content">NA362745732</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">采购合同名称</div></el-col>
          <el-col :span="6"><div class="grid-content ">MAP3.2统一移动平台采购合同</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">批次</div></el-col>
          <el-col :span="6"><div class="grid-content">2019年度</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">标段</div></el-col>
          <el-col :span="6"><div class="grid-content ">第一标段</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">项目负责人</div></el-col>
          <el-col :span="6"><div class="grid-content">陈一峰</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">工作地点</div></el-col>
          <el-col :span="6"><div class="grid-content ">旧机场</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">需求总人数</div></el-col>
          <el-col :span="6"><div class="grid-content ">5</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">总人天数</div></el-col>
          <el-col :span="6"><div class="grid-content ">1500</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">已用人天数</div></el-col>
          <el-col :span="6"><div class="grid-content ">1200</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">剩余人天数</div></el-col>
          <el-col :span="6"><div class="grid-content ">500</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">已入场试用人数</div></el-col>
          <el-col :span="6"><div class="grid-content ">2</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">正式入场人数</div></el-col>
          <el-col :span="6"><div class="grid-content ">2</div></el-col>
          <!-- <el-col :span="6"><div class="grid-content bg-purple">个人简历</div></el-col>
          <el-col :span="18"><div class="grid-content ">陈一峰个人简历.pdf</div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">学历证明</div></el-col>
          <el-col :span="18"><div class="grid-content ">陈一峰学历证明.png</div></el-col>
          <el-col :span="6" style="border:0;"><div class="grid-content bg-purple">社保证明</div></el-col>
          <el-col :span="18" style="border:0;"><div class="grid-content ">陈一峰社保证明.png</div></el-col> -->
        </el-row>

      </el-tab-pane>

      <el-tab-pane label="用工信息" name="用工信息">
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
            label="外包公司"
            element-loading-text="请给我点时间！"
          >
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
          <el-table-column width="80px" align="center" label="需求人数">
            <template>
              <span>5</span>
            </template>
          </el-table-column>
          <el-table-column width="80px" align="center" label="人天数">
            <template>
              <span>1500</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="期望到岗日期" width="125">
            <template>
              <span>2018/09/10</span>
            </template>
          </el-table-column>

          <el-table-column width="100px" align="center" label="学历要求">
            <template>
              <span>本科</span>
            </template>
          </el-table-column>
          <el-table-column width="120px" align="center" label="专业要求">
            <template>
              <span>计算机相关专业</span>
            </template>
          </el-table-column>
          <el-table-column width="150px" align="center" label="工作年限要求">
            <template>
              <span>5</span>
            </template>
          </el-table-column>

          <!-- <el-table-column class-name="status-col" align="center" label="操作" width="90">
            <template>
              <el-button type="primary" size="mini">
                查看
              </el-button>
            </template>
          </el-table-column> -->
        </el-table>
        <el-pagination
          background
          style="margin-top:20px;"
          layout="prev, pager, next"
          :total="50"
        />
      </el-tab-pane>
      <el-tab-pane label="面试记录" name="面试记录">

        <!-- <div v-if="role == '1'" class="block">
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            同意入场
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            不同意入场
          </el-button>
        </div>
        <div v-else-if="role == '2'" class="block">
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-circle-plus" @click="handleCreate">
            新建
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            选择面试人员
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            入场试用考核申请
          </el-button>
        </div>
        <div v-else class="block">
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            入场试用
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            面试合格
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            面试不合格
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            入场考核合格
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            送部门经理审核
          </el-button>
        </div> -->
        <el-table
          :data="list"
          fit
          highlight-current-row
          :header-cell-style="{background:'#f1f7ff',color:'#606266'}"
          style="width: 100%"
        >
          <!-- <el-table-column
            type="selection"
            align="center"
            width="38"
          /> -->
          <el-table-column label="序号" align="center" width="50">
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column width="80px" align="center" label="姓名">
            <template>
              <span>陈一峰</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="合作项目">
            <template>
              <span>MAP3.2统一移动平台</span>
            </template>
          </el-table-column>
          <!-- <el-table-column width="90px" align="center" label="批次">
            <template>
              <span>第一批次</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="外包公司">
            <template>
              <span>金税信息技术股份有限公司</span>
            </template>
          </el-table-column> -->
          <el-table-column align="center" label="面试岗位">
            <template>
              <span>JAVA开发工程师</span>
            </template>
          </el-table-column>
          <el-table-column width="70px" align="center" label="级别">
            <template>
              <span>高级</span>
            </template>
          </el-table-column>
          <!-- <el-table-column width="80px" align="center" label="学历">
            <template>
              <span>本科</span>
            </template>
          </el-table-column> -->

          <el-table-column align="center" label="考试日期">
            <template>
              <span>2019-09-11</span>
            </template>
          </el-table-column>

          <!-- <el-table-column width="80px" align="center" label="工作年限">
            <template>
              <span>5</span>
            </template>
          </el-table-column> -->

          <el-table-column align="center" label="面试分数" width="80">
            <template>
              <span>87</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="笔试成绩" width="80">
            <template>
              <span>93</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="机试成绩" width="80">
            <template>
              <span>83</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="考试结果" width="80">
            <template>
              <span>合格</span>
            </template>
          </el-table-column>
          <!-- <el-table-column class-name="status-col" width="150" align="center" label="操作">
            <template>
              <el-button type="primary" size="mini">
                查看
              </el-button>
              <router-link to="/example/exit">
                <el-button type="primary" size="mini">
                  退场
                </el-button>
              </router-link>
            </template>
          </el-table-column> -->
        </el-table>
        <el-pagination
          background
          style="margin-top:20px;"
          layout="prev, pager, next"
          :total="50"
        />
      </el-tab-pane>
      <el-tab-pane label="正式入场人员" name="正式入场人员">

        <!-- <div v-if="role == '1'" class="block">
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            同意入场
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            不同意入场
          </el-button>
        </div>
        <div v-else-if="role == '2'" class="block">
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-circle-plus" @click="handleCreate">
            新建
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            选择面试人员
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            入场试用考核申请
          </el-button>
        </div>
        <div v-else class="block">
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            入场试用
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            面试合格
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            面试不合格
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            入场考核合格
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            送部门经理审核
          </el-button>
        </div> -->
        <el-table
          :data="list"
          fit
          highlight-current-row
          :header-cell-style="{background:'#f1f7ff',color:'#606266'}"
          style="width: 100%"
        >
          <!-- <el-table-column
            type="selection"
            align="center"
            width="38"
          /> -->
          <el-table-column label="序号" align="center" width="50">
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>
          <el-table-column width="80px" align="center" label="姓名">
            <template>
              <span>陈一峰</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="资格证号">
            <template>
              <span>98798798789</span>
            </template>
          </el-table-column>
          <el-table-column align="center" width="120px" label="手机号码">
            <template>
              <span>13176554433</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="合作项目">
            <template>
              <span>MAP3.2统一移动平台</span>
            </template>
          </el-table-column>
          <!-- <el-table-column align="center" width="100px" label="批次">
            <template>
              <span>第一批</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="外包公司">
            <template>
              <span>金税信息技术股份有限公司</span>
            </template>
          </el-table-column> -->
          <el-table-column align="center" label="入场日期">
            <template>
              <span>2019-09-12</span>
            </template>
          </el-table-column>
          <el-table-column width="160px" align="center" label="岗位">
            <template>
              <span>JAVA开发工程师</span>
            </template>
          </el-table-column>
          <el-table-column width="80px" align="center" label="级别">
            <template>
              <span>高级</span>
            </template>
          </el-table-column>
          <!-- <el-table-column width="80px" align="center" label="学历">
            <template>
              <span>本科</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="毕业院校">
            <template>
              <span>华南理工大学</span>
            </template>
          </el-table-column>

          <el-table-column width="80px" align="center" label="工作年限">
            <template>
              <span>5</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="面试分数" width="80">
            <template>
              <span>87</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="笔试成绩" width="80">
            <template>
              <span>93</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="机试成绩" width="80">
            <template>
              <span>83</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="状态" width="80">
            <template>
              <span>面试入围</span>
            </template>
          </el-table-column>-->
          <!-- <el-table-column class-name="status-col" width="150" align="center" label="操作">
            <template>
              <el-button type="primary" size="mini">
                查看
              </el-button>
              <router-link to="/example/exit">
                <el-button type="primary" size="mini">
                  退场
                </el-button>
              </router-link>
            </template>
          </el-table-column> -->
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
        { label: '基本信息', key: 'CN' },
        { label: '用工信息', key: 'US' },
        { label: '面试记录', key: 'EU' },
        { label: '正式入场人员', key: 'JP' }
        // { label: 'Eurozone', key: 'EU' }
      ],
      activeName: '基本信息',
      createdTimes: 0,
      total: 0,
      role: this.$route.query.role,
      list: null,
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: '+id'
      },
      loading: false,
      dialogFormVisible: false,
      dialogStatus: ''
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
    open() {
      this.$message({
        message: '发送成功!',
        type: 'success'
      })
    },
    handleCreate() {
      this.resetTemp()
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
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
.block {
  padding-bottom: 10px;
}
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
  .tab-container >>> .el-tabs__item {height:50px;line-height:50px;}
</style>
