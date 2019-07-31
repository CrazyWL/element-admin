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
    <el-tag style="font-size:16px;margin-bottom:20px;">基本信息</el-tag>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">姓名</div></el-col>
      <el-col :span="6"><div class="grid-content">高渐离</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">项目</div></el-col>
      <el-col :span="6"><div class="grid-content ">地服资源管理系统</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">资格证号</div></el-col>
      <el-col :span="6"><div class="grid-content">32123466788896</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">部门</div></el-col>
      <el-col :span="6"><div class="grid-content ">中台研发处</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">岗位</div></el-col>
      <el-col :span="6"><div class="grid-content">JAVA开发工程师</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">级别</div></el-col>
      <el-col :span="6"><div class="grid-content ">高级</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">所属外包公司</div></el-col>
      <el-col :span="6"><div class="grid-content">金税股份有限公司</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">考核出勤人天数</div></el-col>
      <el-col :span="6"><div class="grid-content ">
        <!-- <el-input-number v-model="num" style="width:30%;margin:0 10px;" :controls="false" /> -->1
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">进场考核时间</div></el-col>
      <el-col :span="6">
        <div class="grid-content ">
          2018/09/10 - 2018/09/11
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple">考核结算人天数</div></el-col>
      <el-col :span="6"><div class="grid-content ">
        <!-- <el-input v-model="input" style="width:50%;margin:0 10px;" placeholder="请输入天数" /> -->
        <!-- <el-input-number v-model="num" :disabled="fasle" :min="1" :max="10" label="描述文字" @change="handleChange" /> -->
        <!-- <el-input-number v-model="num" style="width:30%;margin:0 10px;" :controls="false" /> -->1
      </div></el-col>
    </el-row>

    <el-tag style="font-size:16px;margin-bottom:10px;">考核信息</el-tag>
    <div class="block" style="display:flex;justify-content:center;height:50px;align-items:center;margin-bottom:20px;">
      <!-- <el-switch
        v-model="value1"
        style="height:40px;font-size:16px;"
        active-text=""
        inactive-text="总评价"
      /> -->
      总评价 <strong>合格</strong>
    </div>
    <el-table
      :data="list"
      fit
      highlight-current-row
      :header-cell-style="{background:'#f1f7ff',color:'#606266'}"
      style="width: 100%"
    >

      <el-table-column label="序号" align="center" width="200">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-loading="loading"
        align="center"
        label="考核标准"
        element-loading-text="请给我点时间！"
      >
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="考核结果">
        <template>
          <!-- <el-switch
            v-model="value1"
            style="height:40px;font-size:16px;"
            active-text=""
          /> -->
          合格
        </template>
      </el-table-column>
    </el-table>
    <div style="margin:20px 0;color:#555;"><i class="el-icon-warning" style="color:red;" /> 备注：1.不符合上述情形之一的，视为不合格。2.总评价不合格的，结算人天数为0。</div>

    <!-- <div style="margin:20px;text-align:center;">
      <el-button class="filter-item" style="width:120px;" type="primary" @click="open1">
        保存
      </el-button>
      <el-button class="filter-item" type="primary" @click="open">
        送部门经理审核
      </el-button>
    </div> -->
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
      // list: null,
      list: [
        { id: 1, title: '按时按质完成交办的任务，且必须是本人独自完成。' },
        { id: 2, title: '交付物符合信息中心技术规范和相关技术要求' },
        { id: 3, title: '技术水平和技术路线符合符合信息中心合同要求。' },
        { id: 4, title: '遵守信息中心行政管理规定，无无故旷工行为。' },
        { id: 5, title: '有良好的沟通协调能力、客户服务意识和团队合作精神。' },
        { id: 6, title: '其他补充情况' }
      ],
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
    // this.getList()
  },
  methods: {
    open1() {
      this.$message({
        message: '保存成功!',
        type: 'success'
      })
    },
    open() {
      this.$message({
        message: '发送成功!',
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
   .el-date-editor >>> .el-range-separator {padding: 0 20px;}
  .el-switch >>> .el-switch__label   * {font-size: 22px;}
  .block {color:#666;font-size: 20px;}
  .block strong {color:#1890ff;margin-left: 20px;}
</style>
