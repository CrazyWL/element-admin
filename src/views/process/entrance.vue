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
    <div class="block">
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-success" @click="open">
        同意
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-error" @click="open">
        反对
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-document" @click="open">
        审批历史
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-picture-outline" @click="open">
        流程图
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
        挂起
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-warning" @click="open">
        终止流程
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-printer" @click="open">
        打印
      </el-button>
    </div>
    <h2>入场试用考核审核表</h2>
    <div class="flex">
      <p>流水号：NHG32423423</p>
      <p>申请人：袁东峰</p>
      <p>申请部门：信息中心研发出</p>
      <p>申请时间：2019/09/12</p>
    </div>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">合作项目</div></el-col>
      <el-col :span="6"><div class="grid-content">OA自动化办公系统</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">管理部门</div></el-col>
      <el-col :span="6"><div class="grid-content ">信息中心研发处</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">采购编码</div></el-col>
      <el-col :span="6"><div class="grid-content">NA362745732</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">采购合同名称</div></el-col>
      <el-col :span="6"><div class="grid-content ">OA自动化办公系统运维服务采购合同</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">批次</div></el-col>
      <el-col :span="6"><div class="grid-content">2019年度</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">标段</div></el-col>
      <el-col :span="6"><div class="grid-content ">第一标段</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">项目负责人</div></el-col>
      <el-col :span="6"><div class="grid-content">高渐离</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">工作地点</div></el-col>
      <el-col :span="6"><div class="grid-content ">旧机场</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">需求总人数</div></el-col>
      <el-col :span="6"><div class="grid-content ">5</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">总人天数</div></el-col>
      <el-col :span="6"><div class="grid-content ">1500</div></el-col>
    </el-row>
    <el-table
      :data="list"
      fit
      highlight-current-row
      :header-cell-style="{background:'#f1f7ff',color:'#606266'}"
      style="width: 100%"
    >
      <el-table-column label="序号" align="center" width="50">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column width="80px" align="center" label="姓名">
        <template>
          <span>高渐离</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="岗位">
        <template>
          <span>JAVA开发工程师</span>
        </template>
      </el-table-column>
      <el-table-column width="80px" align="center" label="级别">
        <template>
          <span>高级</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="外包公司">
        <template>
          <span>软通动力</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="考核日期" width="95">
        <template>
          <span>2018/09/10</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" align="center" label="考核结果">
        <template>
          <span>合格</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" align="center" label="操作" width="140">
        <template>
          <router-link to="/components/check">
            <el-button type="primary" size="mini">
              详情
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      style="margin-top:20px;"
      layout="prev, pager, next"
      :total="50"
    />
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
    open() {
      this.$message({
        message: '发送成功!',
        type: 'success'
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
h2 {font-size: 28px;color: #666;text-align: center;font-weight: normal;}
.block {
  padding-bottom: 20px;
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

    min-height: 50px;
    line-height: 50px;
    text-align: center;
  }
  .row-bg {
    padding: 0px 0;
    background-color: #f5f5f5;
  }
  .flex {
    display:flex;
    justify-content: space-between;
    color: #444;
    font-size: 14px;
  }
</style>
