(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-595127a9"],{2423:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"b",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return l}),n.d(e,"e",function(){return d});var a=n("b775");function r(t){return Object(a["a"])({url:"/article/list",method:"get",params:t})}function i(t){return Object(a["a"])({url:"/article/detail",method:"get",params:{id:t}})}function o(t){return Object(a["a"])({url:"/article/pv",method:"get",params:{pv:t}})}function l(t){return Object(a["a"])({url:"/article/create",method:"post",data:t})}function d(t){return Object(a["a"])({url:"/article/update",method:"post",data:t})}},"7e1e":function(t,e,n){"use strict";var a=[{id:1,standard:"技术水平和技术路线符合合同要求，交付物符合信息中心技术规范和相关技术要求。项目质量完全符合标准100分，与标准有少量差距85分，基本达到标准70分,与标准有较大差距40分,完全达不到标准0分。",project:"项目质量",weight:"25%",grade:"25"},{id:2,standard:"外包公司与项目组双方分解制定项目月度计划，按时完成月度目标。项目进度完全符合标准100分，与标准有少量差距85分，基本达到标准70分,与标准有较大差距40分,完全达不到标准0分",project:"项目进度",weight:"25%",grade:"25"},{id:3,standard:"考试通过率低于50%，低于一个百分点，扣1分。考试合格的外包人员在考试后一周内进场服务，超时一天扣1分/人，超时两天扣2分/人，以此类推。考试合格的外包人员不进场，扣10分/人。在到位日期无法派人进场考核，扣10分/人，且超时一天扣1分/人，超时两天扣2分/人，以此类推",project:"进场及时性",weight:"20%",grade:"20"},{id:4,standard:"人员出勤：每月请假人均达到3人天后，超1人天扣2分，加班补休不计入请假不扣分。人员退场：非合作期满的退场10分/人/次",project:"人员稳定性",weight:"10%",grade:"10"},{id:5,standard:"外包公司规范管理外包人员，人员退场没有提前通知，进场考核期提前三个工作日，工作期提前一个月通知，导致未提前交接或交接不清：扣10分/人/次。",project:"合作态度",weight:"10%",grade:"10"},{id:6,standard:"遵守信息中心规章制度，出现以下行为进行扣分：旷工20分/人/次；迟到或早退5分/人/次；着装不合规扣10分/人/次；上班时间发现与工作无关的行为10分/人/次。",project:"行政纪律",weight:"10%",grade:"8"}];e["a"]=a},"91a6":function(t,e,n){"use strict";var a=n("e21d"),r=n.n(a);r.a},a247:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticStyle:{"text-align":"center","font-size":"22px",color:"#555",margin:"10px"}},[t._v("\n    金税信息技术股份有限公司-南航地服系统月度考核\n  ")]),t._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-between",color:"#666","align-items":"center"}},[n("p",[t._v("考核月份："),n("el-date-picker",{attrs:{type:"month",placeholder:"选择月"},model:{value:t.value4,callback:function(e){t.value4=e},expression:"value4"}})],1),t._v(" "),t._m(0)]),t._v(" "),n("el-table",{attrs:{data:t.list,"element-loading-text":"拼命加载中",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.id)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"考核项目",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.project)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"考核标准"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.standard)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"权重",width:"115",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.weight)+"\n      ")]}}])}),t._v(" "),n("el-table-column",{attrs:{align:"center",label:"评分",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.grade)+"\n      ")]}}])})],1)],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("总体评分："),n("em",{staticStyle:{color:"red"}},[t._v("98")]),t._v(" 分")])}],i=n("7e1e"),o=n("2423"),l=n("ed08"),d={name:"ExportExcel",data:function(){return{obj:i["a"],list:i["a"],listLoading:!0,downloadLoading:!1,filename:"",autoWidth:!0,bookType:"xlsx",value4:"",options:[{value:"选项1",label:"金税信息技术股份有限公司"},{value:"选项2",label:"软通动力有限公司"}],value:"选项1"}},created:function(){},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(o["c"])().then(function(e){t.list=e.data.items,t.listLoading=!1})},handleDownload:function(){var t=this;this.downloadLoading=!0,Promise.all([n.e("chunk-41515614"),n.e("chunk-581b2547")]).then(n.bind(null,"4bf8d")).then(function(e){var n=["Id","Title","Author","Readings","Date"],a=["id","title","author","pageviews","display_time"],r=t.list,i=t.formatJson(a,r);e.export_json_to_excel({header:n,data:i,filename:t.filename,autoWidth:t.autoWidth,bookType:t.bookType}),t.downloadLoading=!1})},formatJson:function(t,e){return e.map(function(e){return t.map(function(t){return"timestamp"===t?Object(l["f"])(e[t]):e[t]})})}}},c=d,u=(n("91a6"),n("2877")),s=Object(u["a"])(c,a,r,!1,null,null,null);e["default"]=s.exports},e21d:function(t,e,n){}}]);