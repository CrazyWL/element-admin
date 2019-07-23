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
    <!-- <el-tag style="font-size:16px;margin-bottom:20px;">基本信息</el-tag> -->
    <!-- <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">姓名</div></el-col>
      <el-col :span="6"><div class="grid-content">高渐离</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">联系方式</div></el-col>
      <el-col :span="6"><div class="grid-content ">13212345328</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">资格证号</div></el-col>
      <el-col :span="6"><div class="grid-content">32123466788896</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">部门</div></el-col>
      <el-col :span="6"><div class="grid-content ">研发部</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">岗位</div></el-col>
      <el-col :span="6"><div class="grid-content">JAVA开发工程师</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">级别</div></el-col>
      <el-col :span="6"><div class="grid-content ">高级</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">所属外包公司</div></el-col>
      <el-col :span="6"><div class="grid-content">金税股份有限公司</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">合作项目</div></el-col>
      <el-col :span="6"><div class="grid-content ">OA办公自动化系统</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">SSO临时账号</div></el-col>
      <el-col :span="6"><div class="grid-content ">435234234124</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple" /></el-col>
      <el-col :span="6"><div class="grid-content " /></el-col>
    </el-row> -->

    <!-- <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">人员合作期限</div></el-col>
      <el-col :span="18"><div class="grid-content">
        <el-date-picker
          v-model="value6"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        /></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">退场原因</div></el-col>
      <el-col :span="18"><div class="grid-content">
        <el-radio v-model="radio" label="1">试用期不合格</el-radio>
        <el-radio v-model="radio" label="2">试用期满</el-radio>
        <el-radio v-model="radio" label="3">人员替换</el-radio>
        <el-radio v-model="radio" label="4">其他</el-radio>
      </div></el-col>
    </el-row> -->
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">上传Excel文件</div></el-col>
      <el-col :span="10"><div class="grid-content">
        <el-input type="file" />
      </div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">温馨提示</div></el-col>
      <el-col :span="10"><div class="grid-content" style="color:red;">
        导入过程需要若干时间，请耐心等待，期间请勿关闭浏览器或者进行其他操作。
      </div></el-col>
    </el-row>
    <div style="margin:20px;text-align:center;">
      <el-button class="filter-item" style="width:120px;" type="primary" @click="open">
        提交
      </el-button>
    </div>
    <!-- <el-row :gutter="20">
      <el-col :span="24"><div class="grid-content">
      </div></el-col>
    </el-row> -->
    <!-- <el-col :span="6"><div class="grid-content bg-purple">进场考核时间</div></el-col>
    <el-col :span="6">
      <div class="grid-content ">
        <el-date-picker
          v-model="value6"
          style="width:90%;margin:0 10px;"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
      </div>
    </el-col>
    <el-col :span="6"><div class="grid-content bg-purple">考核结算人天数</div></el-col>
    <el-col :span="6"><div class="grid-content ">
      <el-input-number v-model="num" style="width:30%;margin:0 10px;" :controls="false" />
    </div></el-col> -->
    <!-- <el-pagination
      background
      style="margin-top:20px;"
      layout="prev, pager, next"
      :total="50"
    /> -->
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
      num: 1,
      radio: '2',
      value1: true,
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
      input: '',
      value6: '',
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
        message: '提交成功!',
        type: 'success'
      })
    },
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    },
    handleChange(value) {
      console.log(value)
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
    justify-content: center;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {

    min-height: 50px;
display: flex;align-items: center;
padding-left: 20px;

  }
  .row-bg {
    padding: 0px 0;
    background-color: #f5f5f5;
  }
   .el-date-editor >>> .el-range-separator {padding: 0 20px;}
  .el-switch >>> .el-switch__label   * {font-size: 22px;}
  .tab-container >>> .el-row {margin-bottom: 0;border-top:0;}
</style>
