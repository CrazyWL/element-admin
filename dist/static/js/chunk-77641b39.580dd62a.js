(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77641b39"],{2423:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"b",function(){return l}),a.d(t,"d",function(){return s}),a.d(t,"a",function(){return r}),a.d(t,"e",function(){return o});var i=a("b775");function n(e){return Object(i["a"])({url:"/article/list",method:"get",params:e})}function l(e){return Object(i["a"])({url:"/article/detail",method:"get",params:{id:e}})}function s(e){return Object(i["a"])({url:"/article/pv",method:"get",params:{pv:e}})}function r(e){return Object(i["a"])({url:"/article/create",method:"post",data:e})}function o(e){return Object(i["a"])({url:"/article/update",method:"post",data:e})}},"333d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},n=[];a("c5f6");Math.easeInOutQuad=function(e,t,a,i){return e/=i/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var l=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function s(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function o(e,t,a){var i=r(),n=e-i,o=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=o;var r=Math.easeInOutQuad(c,i,n,t);s(r),c<t?l(e):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&o(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&o(0,800)}}},u=c,p=(a("e498"),a("2877")),d=Object(p["a"])(u,i,n,!1,null,"6af373ef",null);t["a"]=d.exports},5070:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"block"},[a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-circle-plus-outline"},on:{click:function(t){return e.handleCreate()}}},[e._v("\n      新增\n    ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-bell"},on:{click:e.open}},[e._v("\n      同意\n    ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-bell"},on:{click:e.open}},[e._v("\n      不同意\n    ")])],1),e._v(" "),a("div",{staticClass:"filter-container"},[a("el-collapse",{attrs:{accordion:""}},[a("el-collapse-item",[a("template",{slot:"title"},[a("div",{staticStyle:{width:"100%","font-size":"14px",color:"#666",display:"flex","justify-content":"space-between"}},[a("div",[a("i",{staticClass:"header-icon el-icon-search",staticStyle:{"margin-right":"5px"}}),e._v("筛选查询\n            ")]),e._v(" "),a("span",{staticStyle:{"margin-right":"10px"}},[e._v("收起筛选")])])]),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"姓名"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"合作项目"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"任务类型",clearable:""},model:{value:e.listQuery.importance,callback:function(t){e.$set(e.listQuery,"importance",t)},expression:"listQuery.importance"}},e._l(e.importanceOptions,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}),1),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"任务名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFilter(t)}},model:{value:e.listQuery.type,callback:function(t){e.$set(e.listQuery,"type",t)},expression:"listQuery.type"}}),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"120px"},attrs:{placeholder:"状态",clearable:""},model:{value:e.listQuery.status,callback:function(t){e.$set(e.listQuery,"status",t)},expression:"listQuery.status"}},e._l(e.statusOptions,function(e){return a("el-option",{key:e,attrs:{label:e,value:e}})}),1),e._v(" "),a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n          搜索\n        ")])],2)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"拼命加载中",fit:"","highlight-current-row":"","header-cell-style":{background:"#f1f7ff",color:"#606266"}},on:{"sort-change":e.sortChange}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"38"}}),e._v(" "),a("el-table-column",{attrs:{label:"序号",align:"center",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"姓名",width:"100px",align:"center"}},[[e._v("\n        高渐离\n      ")]],2),e._v(" "),a("el-table-column",{attrs:{label:"合作项目",align:"center"}},[[e._v("\n        OA办公自动化系统\n      ")]],2),e._v(" "),a("el-table-column",{attrs:{label:"任务名称",align:"center"}},[[e._v("\n        考勤管理开发\n      ")]],2),e._v(" "),a("el-table-column",{attrs:{label:"任务类型",width:"100px",align:"center"}},[[e._v("\n        功能开发\n      ")]],2),e._v(" "),a("el-table-column",{attrs:{label:"申请工时",width:"100px",align:"center"}},[[e._v("\n        8\n      ")]],2),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"申请日期",width:"95"}},[[a("span",[e._v("2019/09/10")])]],2),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作日期",width:"95"}},[[a("span",[e._v("2019/09/11")])]],2),e._v(" "),a("el-table-column",{attrs:{label:"状态",width:"70px",align:"center"}},[[e._v("\n        待评估\n      ")]],2),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handleView(i)}}},[e._v("\n          查看\n        ")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(t){return e.handleModifyStatus(i,"deleted")}}},[e._v("\n          同意\n        ")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.limit},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"limit",t)},pagination:e.getList}}),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],center:"",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"right","label-width":"110px"}},[a("el-form-item",{attrs:{label:"任务名称",prop:"title"}},["新建"!==e.textMap[e.dialogStatus]?a("el-input",{model:{value:e.person.name,callback:function(t){e.$set(e.person,"name",t)},expression:"person.name"}}):a("el-input",{model:{value:e.person.name1,callback:function(t){e.$set(e.person,"name1",t)},expression:"person.name1"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"任务类型",prop:"type"}},[a("el-select",{staticClass:"filter-item",attrs:{placeholder:"任务类型"},model:{value:e.person.importance,callback:function(t){e.$set(e.person,"importance",t)},expression:"person.importance"}},e._l(e.importanceOptions,function(e){return a("el-option",{key:e.key,attrs:{label:e.display_name,value:e}})}),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"任务描述"}},[a("el-input",{attrs:{type:"textarea"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申请日期",prop:"title"}},["新建"==e.textMap[e.dialogStatus]?a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}):a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.person.date,callback:function(t){e.$set(e.person,"date",t)},expression:"person.date"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申请工时",prop:"title"}},["新建"==e.textMap[e.dialogStatus]?a("el-input",{model:{value:e.person.tel1,callback:function(t){e.$set(e.person,"tel1",t)},expression:"person.tel1"}}):a("el-input",{model:{value:e.person.hours,callback:function(t){e.$set(e.person,"hours",t)},expression:"person.hours"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"问题"}},[(e.textMap[e.dialogStatus],a("el-input",{model:{value:e.person.name1,callback:function(t){e.$set(e.person,"name1",t)},expression:"person.name1"}}))],1),e._v(" "),a("el-form-item",{attrs:{label:"问题描述"}},[a("el-input",{attrs:{type:"textarea"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},["create"===e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        保存\n      ")]):[a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n          同意\n        ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n          调整工时\n        ")])]],2)],1),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogPvVisible,title:"Reading statistics"},on:{"update:visible":function(t){e.dialogPvVisible=t}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),e._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogPvVisible=!1}}},[e._v("Confirm")])],1)],1)],1)},n=[],l=(a("ac4d"),a("8a81"),a("ac6a"),a("2423")),s=a("6724"),r=a("ed08"),o=a("333d"),c=[{key:"CN",display_name:"JAVA开发工程师"},{key:"US",display_name:".NET开发工程师"},{key:"JP",display_name:"WEB开发工程师"},{key:"EU",display_name:"UI设计师"}],u=c.reduce(function(e,t){return e[t.key]=t.display_name,e},{}),p={name:"ComplexTable",components:{Pagination:o["a"]},directives:{waves:s["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"info",deleted:"danger"};return t[e]},typeFilter:function(e){return u[e]}},data:function(){return{value1:"",value4:"",value5:"",radio:1,value6:!0,tableKey:0,list:null,total:0,person:{name:"考勤管理开发",project:"OA办公自动化系统",importance:"功能开发",post:"JAVA开发工程师",level:"高级",education:"本科",school:"华南理工大学",workYear:"3",hours:"8",date:"2018/09/10",userID:0x5e184700fe8c700,tel:13676543212},listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,education:void 0,title:void 0,type:void 0,status:void 0,sort:"+id"},importanceOptions:["功能开发","原型设计"],educationOptions:["研究生","本科","大专"],statusOptions:["完成","未完成","待评估"],projectOptions:["OA办公自动化系统","南航地服系统"],calendarTypeOptions:c,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"编辑",create:"新建",view:"查看"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(l["c"])(this.listQuery).then(function(t){e.list=t.data.items,e.total=t.data.total,setTimeout(function(){e.listLoading=!1},1500)})},open:function(){this.$message({message:"发送成功!",type:"success"})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作Success",type:"success"}),e.status=t},sortChange:function(e){var t=e.prop,a=e.order;"id"===t&&this.sortByID(a)},sortByID:function(e){this.listQuery.sort="ascending"===e?"+id":"-id",this.handleFilter()},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs["dataForm"].clearValidate()})},createData:function(){var e=this;this.$refs["dataForm"].validate(function(t){t&&(e.temp.id=parseInt(100*Math.random())+1024,e.temp.author="vue-element-admin",Object(l["a"])(e.temp).then(function(){e.list.unshift(e.temp),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})}))})},handleView:function(e){var t=this;this.temp=Object.assign({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="view",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},handleUpdate:function(e){var t=this;this.temp=Object.assign({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},updateData:function(){var e=this;this.$refs["dataForm"].validate(function(t){if(t){var a=Object.assign({},e.temp);a.timestamp=+new Date(a.timestamp),Object(l["e"])(a).then(function(){var t=!0,a=!1,i=void 0;try{for(var n,l=e.list[Symbol.iterator]();!(t=(n=l.next()).done);t=!0){var s=n.value;if(s.id===e.temp.id){var r=e.list.indexOf(s);e.list.splice(r,1,e.temp);break}}}catch(o){a=!0,i=o}finally{try{t||null==l.return||l.return()}finally{if(a)throw i}}e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})})}})},handleDelete:function(e){this.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3});var t=this.list.indexOf(e);this.list.splice(t,1)},handleFetchPv:function(e){var t=this;Object(l["d"])(e).then(function(e){t.pvData=e.data.pvData,t.dialogPvVisible=!0})},handleDownload:function(){var e=this;this.downloadLoading=!0,Promise.all([a.e("chunk-41515614"),a.e("chunk-581b2547")]).then(a.bind(null,"4bf8d")).then(function(t){var a=["timestamp","title","type","importance","status"],i=["timestamp","title","type","importance","status"],n=e.formatJson(i,e.list);t.export_json_to_excel({header:a,data:n,filename:"table-list"}),e.downloadLoading=!1})},formatJson:function(e,t){return t.map(function(t){return e.map(function(e){return"timestamp"===e?Object(r["f"])(t[e]):t[e]})})}}},d=p,m=(a("8512"),a("2877")),f=Object(m["a"])(d,i,n,!1,null,"4d67d726",null);t["default"]=f.exports},6724:function(e,t,a){"use strict";a("8d41");var i="@@wavesContext";function n(e,t){function a(a){var i=Object.assign({},t.value),n=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),l=n.ele;if(l){l.style.position="relative",l.style.overflow="hidden";var s=l.getBoundingClientRect(),r=l.querySelector(".waves-ripple");switch(r?r.className="waves-ripple":(r=document.createElement("span"),r.className="waves-ripple",r.style.height=r.style.width=Math.max(s.width,s.height)+"px",l.appendChild(r)),n.type){case"center":r.style.top=s.height/2-r.offsetHeight/2+"px",r.style.left=s.width/2-r.offsetWidth/2+"px";break;default:r.style.top=(a.pageY-s.top-r.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",r.style.left=(a.pageX-s.left-r.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return r.style.backgroundColor=n.color,r.className="waves-ripple z-active",!1}}return e[i]?e[i].removeHandle=a:e[i]={removeHandle:a},a}var l={bind:function(e,t){e.addEventListener("click",n(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[i].removeHandle,!1),e.addEventListener("click",n(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[i].removeHandle,!1),e[i]=null,delete e[i]}},s=function(e){e.directive("waves",l)};window.Vue&&(window.waves=l,Vue.use(s)),l.install=s;t["a"]=l},7456:function(e,t,a){},8512:function(e,t,a){"use strict";var i=a("d5a4"),n=a.n(i);n.a},"8d41":function(e,t,a){},d5a4:function(e,t,a){},e498:function(e,t,a){"use strict";var i=a("7456"),n=a.n(i);n.a}}]);