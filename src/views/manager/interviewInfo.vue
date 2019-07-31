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
          <el-col :span="6"><div class="grid-content">MAP3.2统一移动平台(2019)</div></el-col>
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

          <el-table-column width="180px" align="center" label="工作年限要求">
            <template>
              <span>5</span>
            </template>
          </el-table-column>

          <!-- <el-table-column class-name="status-col" align="center" label="操作" width="110">
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
      <el-tab-pane label="外包人员" name="外包人员">

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
        </div> -->
        <div class="block">

          <!-- <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            入场试用
          </el-button> -->
          <!-- <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            考试合格
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            考试不合格
          </el-button> -->
          <span style="color:red; font-size:12px;margin-left:20px;">（ 温馨提示：评语为必填项，其它为非必填项 ）</span>
          <!-- <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            入场考核合格
          </el-button>
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-bell" @click="open">
            送部门经理审核
          </el-button> -->
        </div>
        <template v-if="role==2">
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
            <!-- <el-table-column label="批次" width="80px" align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.pc }}</span>
              </template>
            </el-table-column> -->
            <el-table-column width="80px" align="center" label="姓名">
              <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="岗位">
              <template slot-scope="scope">
                <span>{{ scope.row.gw }}</span>
              </template>
            </el-table-column>
            <el-table-column width="80px" align="center" label="级别">
              <template slot-scope="scope">
                <span>{{ scope.row.jb }}</span>
              </template>
            </el-table-column>
            <el-table-column width="80px" align="center" label="学历">
              <template slot-scope="scope">
                <span>{{ scope.row.xl }}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="毕业院校">
              <template slot-scope="scope">
                <span>{{ scope.row.byyx }}</span>
              </template>
            </el-table-column>

            <el-table-column width="80px" align="center" label="工作年限">
              <template slot-scope="scope">
                <span>{{ scope.row.gznx }}</span>
              </template>
            </el-table-column>

            <!-- <el-table-column align="center" label="评语" width="150">
              <template>
                <el-input type="input" />
              </template>
            </el-table-column>
            <el-table-column align="center" label="笔试成绩" width="80">
              <template>
                <el-input type="input" />
              </template>
            </el-table-column>
            <el-table-column align="center" label="机试成绩" width="80">
              <template>
                <el-input type="input" />
              </template>
            </el-table-column>
            <el-table-column align="center" label="面试成绩" width="80">
              <template>
                <el-input type="input" />
              </template>
            </el-table-column>
            <el-table-column align="center" label="考试合格" width="80">
              <template>
                <el-switch
                  v-model="value1"
                  style="height:40px;font-size:16px;"
                  active-text=""
                />
              </template>
            </el-table-column> -->
            <el-table-column align="center" label="操作" width="210">
              <template slot-scope="">
                <el-button size="mini" type="primary" @click="handleUpdate(1)">
                  录入成绩
                </el-button>
                <el-button size="mini" type="primary" @click="handleUpdate(2)">
                  重新定岗
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- <div style="margin:20px;text-align:center;">
            <el-button class="filter-item" style="width:120px;" type="primary" @click="open1">
              保存
            </el-button>
          </div> -->
        </template>
        <template v-else>
          <el-table
            :data="lists"
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
              <template slot-scope="scope">
                <span>{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="岗位">
              <template slot-scope="scope">
                <span>{{ scope.row.gw }} </span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="级别">
              <template slot-scope="scope">
                <span>{{ scope.row.jb }}</span>
              </template>
            </el-table-column>
            <el-table-column align="center" label="学历">
              <template slot-scope="scope">
                <span>{{ scope.row.xl }}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="毕业院校">
              <template slot-scope="scope">
                <span>{{ scope.row.byyx }}</span>
              </template>
            </el-table-column>

            <el-table-column width="80px" align="center" label="工作年限">
              <template slot-scope="scope">
                <span>{{ scope.row.gznx }}</span>
              </template>
            </el-table-column>

            <!-- <el-table-column align="center" label="评语" width="150">
              <template>
                <el-input type="input" />
              </template>
            </el-table-column>
            <el-table-column align="center" label="笔试成绩" width="80">
              <template>
                <el-input type="input" />
              </template>
            </el-table-column>
            <el-table-column align="center" label="机试成绩" width="80">
              <template>
                <el-input type="input" />
              </template>
            </el-table-column>
            <el-table-column align="center" label="面试成绩" width="80">
              <template>
                <el-input type="input" />
              </template>
            </el-table-column>
            <el-table-column align="center" label="考试合格" width="80">
              <template>
                <el-switch
                  v-model="value1"
                  style="height:40px;font-size:16px;"
                  active-text=""
                />
              </template>
            </el-table-column> -->
            <el-table-column align="center" label="操作" width="210">
              <template slot-scope="">
                <el-button size="mini" type="primary" @click="handleUpdate(1)">
                  录入成绩
                </el-button>
                <el-button size="mini" type="primary" @click="handleUpdate(2)">
                  重新定岗
                </el-button>
              </template>
            </el-table-column>
          </el-table>

          <!-- <div style="margin:20px;text-align:center;">
            <el-button class="filter-item" style="width:120px;" type="primary" @click="open1">
              保存
            </el-button>
          </div> -->
        </template>
        <!-- <el-pagination
          background
          style="margin-top:20px;"
          layout="prev, pager, next"
          :total="50"
        /> -->
      </el-tab-pane>
    </el-tabs>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="temp"
        label-position="right"
        label-width="110px"
        style="width: 400px;margin-left:50px;"
      >

        <template v-if="dialogType">
          <el-form-item label="笔试成绩">
            <el-input v-model="person.name1" />
          </el-form-item>
          <el-form-item label="机试成绩">
            <el-input v-model="person.name2" />
          </el-form-item>
          <el-form-item label="面试成绩">
            <el-input v-model="person.name3" />
          </el-form-item>
          <el-form-item label="评语">
            <el-input v-model="person.name4" type="textarea" />
          </el-form-item>
          <el-form-item label="考试合格">
            <el-switch
              v-model="value1"
              active-text=""
            />
          </el-form-item>
        </template>
        <template v-else>
          <el-form-item label="面试岗位" prop="title">
            <el-select v-model="person.post" class="filter-item" placeholder="岗位">
              <el-option v-for="item of calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item" />
            </el-select>
          </el-form-item>
          <el-form-item label="级别" prop="title">
            <el-select v-model="person.level" class="filter-item" placeholder="级别">
              <el-option v-for="item of importanceOptions" :key="item.key" :label="item.display_name" :value="item" />
            </el-select>
          </el-form-item>
          <el-form-item label="调整原因" prop="title">
            <!-- <el-input v-if="textMap[dialogStatus] !== '新建'" v-model="person.education" /> -->
            <el-input v-model="person.education1" type="textarea" />
          </el-form-item>
        </template>
        <!-- <el-table-column align="center" label="评语" width="150">
          <template>
            <el-input type="input" />
          </template>
        </el-table-column>
        <el-table-column align="center" label="笔试成绩" width="80">
          <template>
            <el-input type="input" />
          </template>
        </el-table-column>
        <el-table-column align="center" label="机试成绩" width="80">
          <template>
            <el-input type="input" />
          </template>
        </el-table-column>
        <el-table-column align="center" label="面试成绩" width="80">
          <template>
            <el-input type="input" />
          </template>
        </el-table-column>
        <el-table-column align="center" label="考试合格" width="80">
          <template>
            <el-switch
              v-model="value1"
              style="height:40px;font-size:16px;"
              active-text=""
            />
          </template>
        </el-table-column> -->
        <!-- <el-form-item label="姓名" prop="title">
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
        </el-form-item> -->
        <!-- <el-form-item label="学历" prop="type">
          <el-select v-model="person.education" class="filter-item" placeholder="学历">
            <el-option v-for="item of educationOptions" :key="item.key" :label="item.display_name" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item label="毕业院校" prop="title">
          <el-input v-if="textMap[dialogStatus] !== '新建'" v-model="person.school" />
          <el-input v-else v-model="person.school1" />
        </el-form-item>
        <el-form-item label="专业" prop="title">
          <el-input v-if="textMap[dialogStatus] !== '新建'" v-model="person.major" />
          <el-input v-else v-model="person.major1" />
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
        </el-form-item> -->
        <!-- <el-form-item label="账户启用状态" prop="title">
          <el-switch v-model="value6" disabled />
        </el-form-item> -->
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
        <el-button @click="dialogFormVisible = false">
          取消
        </el-button>
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
// import tabPane from './components/TabPane'
import { fetchList } from '@/api/article'

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
  name: 'Tab',
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
  // components: { tabPane },
  data() {
    return {
      radio: 0,
      value1: false,
      tabMapOptions: [
        { label: '基本信息', key: 'CN' },
        { label: '用工信息', key: 'US' },
        { label: '外包人员', key: 'JP' }
        // { label: 'Eurozone', key: 'EU' }
      ],
      activeName: '外包人员',
      createdTimes: 0,
      total: 0,
      role: this.$route.query.id,
      // list: null,
      list: [
        {
          id: 1,
          pc: '第一批次',
          name: '李庆',
          gw: 'JAVA开发工程师',
          jb: '高级',
          xl: '本科',
          byyx: '华南理工大学',
          gznx: '3'
        },
        {
          id: 2,
          pc: '第一批次',
          name: '高渐离',
          gw: 'JAVA开发工程师',
          jb: '高级',
          xl: '本科',
          byyx: '中山大学',
          gznx: '4'
        }
      ],
      lists: [
        {
          id: 1,
          pc: '第一批次',
          name: '李庆',
          gw: 'JAVA开发工程师',
          jb: '高级',
          xl: '本科',
          byyx: '华南理工大学',
          gznx: '3'
        }
      ],
      listQuery: {
        page: 1,
        limit: 5,
        type: this.type,
        sort: '+id'
      },
      person: {
        name: '高渐离',
        major: '计算机科学与技术',
        project: 'MAP3.2统一移动平台',
        post: 'JAVA开发工程师',
        level: '高级',
        education: '本科',
        school: '华南理工大学',
        workYear: '3',
        userID: 423765456787654431,
        tel: 13676543212
      },
      loading: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },

      importanceOptions: ['高级', '中级', '初级'],
      educationOptions: ['研究生', '本科', '大专'],
      calendarTypeOptions,
      projectOptions: ['MAP3.2统一移动平台(2019)', '地服资源管理系统'],
      dialogFormVisible: false,
      dialogStatus: '',
      dialogType: true, // 默认 录入成绩 false为重新定岗
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
    open() {
      this.$message({
        message: '发送成功!',
        type: 'success'
      })
    },
    open1() {
      this.$message({
        message: '保存成功!',
        type: 'success'
      })
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
    handleUpdate(row) {
      // this.temp = Object.assign({}, row) // copy obj
      // this.temp.timestamp = new Date(this.temp.timestamp)
      row === 1 ? this.dialogType = true : this.dialogType = false
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
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
