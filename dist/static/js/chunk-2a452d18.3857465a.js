(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a452d18"],{"133c":function(t,e,a){"use strict";var i=a("d785"),n=a.n(i);n.a},"32a0":function(t,e,a){},"3cbc":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pan-item",style:{zIndex:t.zIndex,height:t.height,width:t.width}},[a("div",{staticClass:"pan-info"},[a("div",{staticClass:"pan-info-roles-container"},[t._t("default")],2)]),t._v(" "),a("div",{staticClass:"pan-thumb",style:{backgroundImage:"url("+t.image+")"}})])},n=[],s=(a("c5f6"),{name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}}),r=s,l=(a("133c"),a("2877")),c=Object(l["a"])(r,i,n,!1,null,"799537af",null);e["a"]=c.exports},"604f":function(t,e,a){},"69c2":function(t,e,a){"use strict";var i=a("604f"),n=a.n(i);n.a},9406:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a(t.currentRole,{tag:"component"})],1)},n=[],s=(a("6762"),a("2fdb"),a("db72")),r=a("2f62"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("github-corner",{staticClass:"github-corner"}),t._v(" "),a("panel-group",{on:{handleSetLineChartData:t.handleSetLineChartData}}),t._v(" "),[t._m(0),t._v(" "),a("div",{staticClass:"row"},[a("el-table",{staticStyle:{width:"48%",height:"360px",float:"left","margin-right":"4%"},attrs:{data:t.tableData,stripe:""}},[a("el-table-column",{staticStyle:{border:"0"},attrs:{prop:"date",align:"center",label:"序号",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"标题",align:"center",width:"260"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",label:"时间",align:"center"}})],1),t._v(" "),a("el-table",{staticStyle:{width:"48%",height:"360px",float:"left"},attrs:{data:t.tableDatas,stripe:""}},[a("el-table-column",{attrs:{prop:"id",width:"80",label:"序号",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"date",label:"项目名",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name",label:"需求人数",width:"85",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"address",align:"center",width:"100",label:"已入场人数"}})],1)],1)],t._v(" "),a("div",{staticStyle:{"background-color":"#fff","margin-top":"40px"}},[a("el-row",{attrs:{gutter:32}},[a("h2",{staticStyle:{"text-align":"center",margin:"40px auto",color:"#666","font-size":"24px"}},[t._v("外包供应商面试合格数量TOP5排行")]),t._v(" "),a("el-date-picker",{staticStyle:{float:"right","margin-right":"20px","margin-bottom":"20px"},attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.value6,callback:function(e){t.value6=e},expression:"value6"}}),t._v(" "),a("el-col",[a("div",{staticClass:"chart-wrapper"},[a("bar-chart")],1)])],1)],1)],2)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("h2",{staticStyle:{width:"48%",height:"50px","line-height":"50px","margin-right":"4%",float:"left"}},[t._v("待办事项\n        "),a("em",[t._v("5")])]),t._v(" "),a("h2",{staticStyle:{width:"48%",height:"50px","line-height":"50px",float:"left"}},[t._v("合作项目入场情况")])])}],o=a("f168"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("router-link",{attrs:{to:"/manager/interviewList"}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("newVisitis")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-people"},[a("svg-icon",{attrs:{"icon-class":"peoples","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("\n            今日面试人数\n          ")]),t._v(" "),a("div",{staticStyle:{"font-size":"20px"}},[t._v(" 20")])])])])],1),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("router-link",{attrs:{to:"/manager/interviewList"}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("messages")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-message",staticStyle:{padding:"10px!important"}},[a("svg-icon",{attrs:{"icon-class":"peoples","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("\n            今日面试合格人数\n          ")]),t._v(" "),a("div",{staticStyle:{"font-size":"20px"}},[t._v(" 15")])])])])],1),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("router-link",{attrs:{to:"/components/checkManage"}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("purchases")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-money"},[a("svg-icon",{attrs:{"icon-class":"peoples","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("\n            今日迟到人数\n          ")]),t._v(" "),a("div",{staticStyle:{"font-size":"20px"}},[t._v(" 10")])])])])],1),t._v(" "),a("el-col",{staticClass:"card-panel-col",attrs:{xs:12,sm:12,lg:6}},[a("router-link",{attrs:{to:"/manager/outList"}},[a("div",{staticClass:"card-panel",on:{click:function(e){return t.handleSetLineChartData("shoppings")}}},[a("div",{staticClass:"card-panel-icon-wrapper icon-shopping"},[a("svg-icon",{attrs:{"icon-class":"peoples","class-name":"card-panel-icon"}})],1),t._v(" "),a("div",{staticClass:"card-panel-description"},[a("div",{staticClass:"card-panel-text"},[t._v("\n            今日退场人数\n          ")]),t._v(" "),a("div",{staticStyle:{"font-size":"20px"}},[t._v(" 5")])])])])],1)],1)},p=[],h={components:{},methods:{handleSetLineChartData:function(t){this.$emit("handleSetLineChartData",t)}}},u=h,v=(a("f626"),a("2877")),f=Object(v["a"])(u,d,p,!1,null,"7b2bc4c2",null),m=f.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},_=[],g=a("313e"),C=a.n(g),x=a("ed08"),y={data:function(){return{$_sidebarElm:null}},mounted:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_resizeHandler:function(){var t=this;return Object(x["b"])(function(){t.chart&&t.chart.resize()},100)()},$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}};a("817d");var w=6e3,S={mixins:[y],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick(function(){t.initChart()})},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){this.chart=C.a.init(this.$el,"macarons"),this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:10,left:"2%",right:"2%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["金税信息技术股份有限公司","软通动力","东软集团股份有限公司","中软国际有限公司","神州泰岳"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value",axisTick:{show:!1}}],series:[{name:"pageA",type:"bar",stack:"vistors",barWidth:"60%",data:[52,42,32,20,10],animationDuration:w}]})}}},$=S,D=Object(v["a"])($,b,_,!1,null,null,null),E=D.exports,z={newVisitis:{expectedData:[100,120,161,134,105],actualData:[120,82,91,154,162]},messages:{expectedData:[200,192,120,144,160],actualData:[180,160,151,106,145]},purchases:{expectedData:[80,100,121,104,105],actualData:[120,90,100,138,142]},shoppings:{expectedData:[130,140,141,142,145],actualData:[120,82,91,154,162]}},L={name:"DashboardAdmin",components:{GithubCorner:o["a"],PanelGroup:m,BarChart:E},data:function(){return{lineChartData:z.newVisitis,tableData:[{date:"1",name:"HR系统-外包人员入场试用申请审批",address:"2019-09-11"},{date:"2",name:"HR系统-外包人员入场试用申请审批",address:"2019-09-11"},{date:"3",name:"HR系统-外包人员入场试用申请审批",address:"2019-09-11"},{date:"4",name:"HR系统-外包人员入场试用申请审批",address:"2019-09-11"},{date:"5",name:"HR系统-外包人员入场试用申请审批",address:"2019-09-11"}],tableDatas:[{id:1,date:"SCC1.5旅客全流程服务系统（2019）",name:"8",address:"7"},{id:2,date:"SCC1.5旅客全流程服务系统（2019）",name:"8",address:"7"},{id:3,date:"SCC1.5旅客全流程服务系统（2019）",name:"8",address:"7"},{id:4,date:"SCC1.5旅客全流程服务系统（2019）",name:"8",address:"7"},{id:5,date:"SCC1.5旅客全流程服务系统（2019）",name:"8",address:"7"}]}},methods:{value:"",handleSetLineChartData:function(t){this.lineChartData=z[t]}}},k=L,R=(a("e2c0"),Object(v["a"])(k,l,c,!1,null,"30ec7a93",null)),O=R.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-editor-container"},[a("div",{staticClass:" clearfix"},[a("pan-thumb",{staticStyle:{float:"left"},attrs:{image:t.avatar}},[t._v("\n      Your roles:\n      "),t._l(t.roles,function(e){return a("span",{key:e,staticClass:"pan-info-roles"},[t._v(t._s(e))])})],2),t._v(" "),a("github-corner",{staticStyle:{position:"absolute",top:"0px",border:"0",right:"0"}}),t._v(" "),a("div",{staticClass:"info-container"},[a("span",{staticClass:"display_name"},[t._v(t._s(t.name))]),t._v(" "),a("span",{staticStyle:{"font-size":"20px","padding-top":"20px",display:"inline-block"}},[t._v("Editor's Dashboard")])])],1),t._v(" "),a("div",[a("img",{staticClass:"emptyGif",attrs:{src:t.emptyGif}})])])},H=[],G=a("3cbc"),P={name:"DashboardEditor",components:{PanThumb:G["a"],GithubCorner:o["a"]},data:function(){return{emptyGif:"https://wpimg.wallstcn.com/0e03b7da-db9e-4819-ba10-9016ddfdaed3"}},computed:Object(s["a"])({},Object(r["b"])(["name","avatar","roles"]))},T=P,N=(a("69c2"),Object(v["a"])(T,j,H,!1,null,"e3426062",null)),A=N.exports,I={name:"Dashboard",components:{adminDashboard:O,editorDashboard:A},data:function(){return{currentRole:"adminDashboard"}},computed:Object(s["a"])({},Object(r["b"])(["roles"])),created:function(){this.roles.includes("admin")||(this.currentRole="editorDashboard")}},M=I,V=Object(v["a"])(M,i,n,!1,null,null,null);e["default"]=V.exports},"96f2":function(t,e,a){"use strict";var i=a("d990"),n=a.n(i);n.a},b83d:function(t,e,a){},d785:function(t,e,a){},d990:function(t,e,a){},e2c0:function(t,e,a){"use strict";var i=a("b83d"),n=a.n(i);n.a},f168:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"github-corner",attrs:{href:"https://github.com/PanJiaChen/vue-element-admin",target:"_blank","aria-label":"View source on Github"}},[a("svg",{staticStyle:{fill:"#40c9c6",color:"#fff"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[a("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),t._v(" "),a("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),t._v(" "),a("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},n=[],s=(a("96f2"),a("2877")),r={},l=Object(s["a"])(r,i,n,!1,null,"09fe1acc",null);e["a"]=l.exports},f626:function(t,e,a){"use strict";var i=a("32a0"),n=a.n(i);n.a}}]);