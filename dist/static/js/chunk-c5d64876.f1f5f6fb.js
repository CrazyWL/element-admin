(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5d64876"],{"0333":function(t,e,a){"use strict";var n=a("8361"),s=a.n(n);s.a},2423:function(t,e,a){"use strict";a.d(e,"c",function(){return s}),a.d(e,"b",function(){return i}),a.d(e,"d",function(){return l}),a.d(e,"a",function(){return c}),a.d(e,"e",function(){return r});var n=a("b775");function s(t){return Object(n["a"])({url:"/article/list",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/article/detail",method:"get",params:{id:t}})}function l(t){return Object(n["a"])({url:"/article/pv",method:"get",params:{pv:t}})}function c(t){return Object(n["a"])({url:"/article/create",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/article/update",method:"post",data:t})}},8361:function(t,e,a){},d54b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-container"},[a("div",{staticClass:"block"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-success"},on:{click:t.open}},[t._v("\n      同意\n    ")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-error"},on:{click:t.open}},[t._v("\n      反对\n    ")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-document"},on:{click:t.open}},[t._v("\n      审批历史\n    ")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-picture-outline"},on:{click:t.open}},[t._v("\n      流程图\n    ")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-bell"},on:{click:t.open}},[t._v("\n      挂起\n    ")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-warning"},on:{click:t.open}},[t._v("\n      终止流程\n    ")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-printer"},on:{click:t.open}},[t._v("\n      打印\n    ")])],1),t._v(" "),a("h2",[t._v("外包人员退场审批表")]),t._v(" "),t._m(0),t._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("合作项目")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content"},[t._v("OA自动化办公系统")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("管理部门")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content "},[t._v("信息中心研发处")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("采购编码")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content"},[t._v("NA362745732")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("采购合同名称")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content "},[t._v("OA自动化办公系统运维服务采购合同")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("批次")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content"},[t._v("2019年度")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("标段")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content "},[t._v("第一标段")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("项目负责人")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content"},[t._v("高渐离")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("工作地点")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content "},[t._v("旧机场")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("需求总人数")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content "},[t._v("5")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content bg-purple"},[t._v("总人天数")])]),t._v(" "),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"grid-content "},[t._v("1500")])])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,fit:"","highlight-current-row":"","header-cell-style":{background:"#f1f7ff",color:"#606266"}}},[a("el-table-column",{attrs:{label:"序号",align:"center",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"80px",align:"center",label:"姓名"}},[[a("span",[t._v("高渐离")])]],2),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"岗位"}},[[a("span",[t._v("JAVA开发工程师")])]],2),t._v(" "),a("el-table-column",{attrs:{width:"80px",align:"center",label:"级别"}},[[a("span",[t._v("高级")])]],2),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"外包公司"}},[[a("span",[t._v("软通动力")])]],2),t._v(" "),a("el-table-column",{attrs:{width:"100px",align:"center",label:"退场原因"}},[[a("span",[t._v("合作期满")])]],2),t._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",align:"center",label:"操作",width:"140"}},[[a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("\n          详情\n        ")])]],2)],1),t._v(" "),a("el-pagination",{staticStyle:{"margin-top":"20px"},attrs:{background:"",layout:"prev, pager, next",total:50}})],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex"},[a("p",[t._v("流水号：NHG32423423")]),t._v(" "),a("p",[t._v("申请人：袁东峰")]),t._v(" "),a("p",[t._v("申请部门：信息中心研发出")]),t._v(" "),a("p",[t._v("申请时间：2019/09/12")])])}],i=a("2423"),l={name:"Tab",filters:{statusFilter:function(t){var e={published:"success",draft:"info",deleted:"danger"};return e[t]}},data:function(){return{tabMapOptions:[{label:"基本详情",key:"CN"},{label:"项目经历",key:"US"},{label:"面试经历",key:"JP"}],activeName:"基本详情",createdTimes:0,total:0,list:null,listQuery:{page:1,limit:5,type:this.type,sort:"+id"},loading:!1}},watch:{activeName:function(t){this.$router.push("".concat(this.$route.path,"?tab=").concat(t))}},created:function(){var t=this.$route.query.tab;t&&(this.activeName=t),this.getList()},methods:{open:function(){this.$message({message:"保存成功!",type:"success"})},showCreatedTimes:function(){this.createdTimes=this.createdTimes+1},getList:function(){var t=this;this.loading=!0,this.showCreatedTimes(),Object(i["c"])(this.listQuery).then(function(e){t.list=e.data.items,t.total=e.data.total,t.loading=!1})}}},c=l,r=(a("0333"),a("2877")),o=Object(r["a"])(c,n,s,!1,null,"b0b525ca",null);e["default"]=o.exports}}]);