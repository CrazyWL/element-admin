<template>
  <div class="dashboard-editor-container">
    <github-corner class="github-corner" />

    <panel-group @handleSetLineChartData="handleSetLineChartData" />

    <!-- <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData" />
    </el-row> -->

    <!-- <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <bar-chart />
        </div>
      </el-col>
    </el-row> -->

    <!-- <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <todo-list />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <box-card />
      </el-col>
    </el-row> -->
    <template>
      <div class="row">

        <h2 style="width: 48%;height:50px;line-height:50px; margin-right:4%; float:left;">待办事项
          <em>5</em>
        </h2>

        <h2 style="width: 48%;height:50px;line-height:50px; float:left;">合作项目入场情况</h2>
      </div>
      <div class="row">

        <el-table
          :data="tableData"
          stripe
          style="width: 48%;height:360px;float:left;margin-right:4%;"
        >
          <el-table-column
            prop="date"
            align="center"
            label="序号"
            width="80"
            style="border:0;"
          />
          <el-table-column
            prop="name"
            label="标题"
            align="center"
            width="260"
          />
          <el-table-column
            prop="address"
            label="时间"
            align="center"
          />
        </el-table>
        <el-table
          :data="tableDatas"
          stripe
          style="width: 48%;height:360px; float:left;"
        >

          <el-table-column
            prop="id"
            width="80"
            label="序号"
            align="center"
          />
          <el-table-column
            prop="date"
            label="项目名"
            align="center"
          />
          <el-table-column
            prop="name"
            label="需求人数"
            width="85"
            align="center"
          />
          <el-table-column
            prop="address"
            align="center"
            width="100"
            label="已入场人数"
          />
        </el-table>
      </div>

    </template>
    <div style="background-color:#fff;margin-top:40px;">
      <el-row :gutter="32">
        <h2 style="text-align:center;margin:40px auto;color:#666;font-size:24px;">外包供应商面试合格数量TOP5排行</h2>
        <el-date-picker
          v-model="value6"
          style="float:right;margin-right:20px;margin-bottom:20px;"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
        <!-- <el-col :xs="24" :sm="24" :lg="8"> -->
        <el-col>
          <div class="chart-wrapper">
            <bar-chart />
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
// import LineChart from './components/LineChart'
// import RaddarChart from './components/RaddarChart'
// import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
// import TransactionTable from './components/TransactionTable'
// import TodoList from './components/TodoList'
// import BoxCard from './components/BoxCard'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105],
    actualData: [120, 82, 91, 154, 162]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160],
    actualData: [180, 160, 151, 106, 145]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105],
    actualData: [120, 90, 100, 138, 142]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145],
    actualData: [120, 82, 91, 154, 162]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    GithubCorner,
    PanelGroup,
    // LineChart,
    // RaddarChart,
    // PieChart,
    BarChart
    // TransactionTable,
    // TodoList,
    // BoxCard
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      tableData: [{
        date: '1',
        name: 'HR系统-外包人员入场试用申请审批',
        address: '2019-09-11'
      }, {
        date: '2',
        name: 'HR系统-外包人员入场试用申请审批',
        address: '2019-09-11'
      }, {
        date: '3',
        name: 'HR系统-外包人员入场试用申请审批',
        address: '2019-09-11'
      }, {
        date: '4',
        name: 'HR系统-外包人员入场试用申请审批',
        address: '2019-09-11'
      }, {
        date: '5',
        name: 'HR系统-外包人员入场试用申请审批',
        address: '2019-09-11'
      }],
      tableDatas: [{
        id: 1,
        date: 'SCC1.5旅客全流程服务系统（2019）',
        name: '8',
        address: '7'
      }, {
        id: 2,
        date: 'SCC1.5旅客全流程服务系统（2019）',
        name: '8',
        address: '7'
      }, {
        id: 3,
        date: 'SCC1.5旅客全流程服务系统（2019）',
        name: '8',
        address: '7'
      }, {
        id: 4,
        date: 'SCC1.5旅客全流程服务系统（2019）',
        name: '8',
        address: '7'
      }, {
        id: 5,
        date: 'SCC1.5旅客全流程服务系统（2019）',
        name: '8',
        address: '7'
      }]
    }
  },
  methods: {
    value: '',
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
// .row {display: flex;justify-content: space-between;}
.row {overflow: hidden;}
.row h2 {background-color: #ddd;margin: 0;padding-left:15px;line-height: 40px;color: #666;font-size: 16px;position: relative; }
.row em {width: 22px;height:22px;line-height: 22px;display: flex;justify-content: center;align-items: center; border-radius: 50%;background-color: red;color: #fff;font-size: 14px;position: absolute;left:80px;top:2px;font-weight: bold;font-style:normal ;}
</style>
