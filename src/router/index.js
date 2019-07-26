import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  }
  // {
  //   path: '/tab',
  //   component: Layout,
  //   redirect: '/tab/index',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/tab/index'),
  //       name: 'Tab',
  //       meta: { title: '外包人员详情', icon: 'tab' }
  //     }
  //   ]
  // }
  // {
  //   path: '/profile',
  //   component: Layout,
  //   redirect: '/profile/index',
  //   hidden: true,
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/profile/index'),
  //       name: 'Profile',
  //       meta: { title: 'Profile', icon: 'user', noCache: true }
  //     }
  //   ]
  // }
  /** {
    path: '/documentation',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'Documentation',
        meta: { title: 'Documentation', icon: 'documentation', affix: true }
      }
    ]
  },*/
  /** {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/guide/index'),
        name: 'Guide',
        meta: { title: 'Guide', icon: 'guide', noCache: true }
      }
    ]
  },*/
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // {
  //   path: '/permission',
  //   component: Layout,
  //   redirect: '/permission/page',
  //   alwaysShow: true, // will always show the root menu
  //   name: 'Permission',
  //   meta: {
  //     title: 'Permission',
  //     icon: 'lock',
  //     roles: ['admin', 'editor'] // you can set roles in root nav
  //   },
  //   children: [
  //     {
  //       path: 'page',
  //       component: () => import('@/views/permission/page'),
  //       name: 'PagePermission',
  //       meta: {
  //         title: 'Page Permission',
  //         roles: ['admin'] // or you can only set roles in sub nav
  //       }
  //     },
  //     {
  //       path: 'directive',
  //       component: () => import('@/views/permission/directive'),
  //       name: 'DirectivePermission',
  //       meta: {
  //         title: 'Directive Permission'
  //         // if do not set roles, means: this page does not require permission
  //       }
  //     },
  //     {
  //       path: 'role',
  //       component: () => import('@/views/permission/role'),
  //       name: 'RolePermission',
  //       meta: {
  //         title: 'Role Permission',
  //         roles: ['admin']
  //       }
  //     }
  //   ]
  // },

  /** {
    path: '/icon',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/icons/index'),
        name: 'Icons',
        meta: { title: 'Icons', icon: 'icon', noCache: true }
      }
    ]
  },*/

  {
    path: '/manager',
    component: Layout,
    redirect: '/manager/list',
    name: 'Example',
    meta: {
      title: '项目负责人',
      icon: 'excel'
    },
    children: [

      // {
      //   path: 'edit/:id(\\d+)',
      //   component: () => import('@/views/manager/edit'),
      //   name: 'EditArticle',
      //   meta: { title: 'Edit Article', noCache: true, activeMenu: '/manager/list' },
      //   hidden: true
      // },
      {
        path: 'list',
        component: () => import('@/views/manager/list'),
        name: 'ArticleList',
        meta: { title: '合作项目列表' }
      },
      {
        path: 'tab',
        component: () => import('@/views/manager/tab'),
        name: '',
        hidden: true,
        meta: { title: '合作项目详情' }
      },
      {
        path: 'projecter',
        component: () => import('@/views/manager/projecter'),
        name: '',
        // hidden: true,
        meta: { title: '项目外包人员' }
      },
      // {
      //   path: 'listCompany',
      //   component: () => import('@/views/manager/listCompany'),
      //   name: '',
      //   meta: { title: '合作项目-外包' }
      // },
      {
        path: 'interview',
        component: () => import('@/views/manager/interview'),
        name: '',
        meta: { title: '考试选拔' }
      },
      {
        path: 'interviewInfo',
        component: () => import('@/views/manager/interviewInfo'),
        name: '',
        hidden: true,
        meta: { title: '考试选拔详情' }
      },
      {
        path: 'interviewInfoView',
        component: () => import('@/views/manager/interviewInfoView'),
        name: '',
        hidden: true,
        meta: { title: '考试详情' }
      },
      {
        path: 'interviewList',
        component: () => import('@/views/manager/interviewList'),
        name: '',
        // hidden: true,
        meta: { title: '考试选拔历史记录' }
      },
      {
        path: 'trial',
        component: () => import('@/views/manager/trial'),
        name: '',
        hidden: true,
        meta: { title: '入场试用申请' }
      },
      {
        path: 'trialList',
        component: () => import('@/views/manager/trialList'),
        name: '',
        hidden: true,
        meta: { title: '入场试用申请历史记录' }
      },
      {
        path: 'trialInfo',
        component: () => import('@/views/manager/trialInfo'),
        name: '',
        // hidden: true,
        meta: { title: '入场试用考核列表' }
      },
      {
        path: 'trialView',
        component: () => import('@/views/manager/trialView'),
        name: '',
        // hidden: true,
        meta: { title: '入场试用考核审核结果' }
      },
      {
        path: 'check',
        component: () => import('@/views/manager/check'),
        name: '',
        // hidden: true,
        meta: { title: '入场试用考核' }
      },
      {
        path: 'workManage',
        component: () => import('@/views/manager/workManage'),
        name: '',
        // hidden: true,
        meta: { title: '工时申请审核列表' }
      },
      {
        path: 'workList',
        component: () => import('@/views/manager/workList'),
        name: '',
        // hidden: true,
        meta: { title: '工时历史审核记录' }
      },
      {
        path: 'supplier',
        component: () => import('@/views/manager/supplier'),
        name: '',
        // hidden: true,
        meta: { title: '供应商月度考核' }
      },
      {
        path: 'supplierList',
        component: () => import('@/views/manager/supplierList'),
        name: '',
        // hidden: true,
        meta: { title: '供应商月度考核记录' }
      },
      {
        path: 'out',
        component: () => import('@/views/manager/out'),
        name: '',
        // hidden: true,
        meta: { title: '办理退场' }
      },
      {
        path: 'exitDetail',
        component: () => import('@/views/manager/exitDetail'),
        name: '',
        // hidden: true,
        meta: { title: '外包人员办理退场详情' }
      },
      {
        path: 'checkManage',
        component: () => import('@/views/manager/checkManage'),
        name: '',
        hidden: true,
        meta: { title: '考勤记录' }
      },
      {
        path: 'outList',
        component: () => import('@/views/manager/outList'),
        name: '',
        // hidden: true,
        meta: { title: '退场历史记录' }
      },
      // {
      //   path: 'projectImport',
      //   component: () => import('@/views/manager/projectImport'),
      //   name: '',
      //   meta: { title: '项目导入' }
      // },
      // {
      //   path: 'tab',
      //   component: () => import('@/views/manager/tab'),
      //   name: '',
      //   hidden: true,
      //   meta: { title: '项目详情' }
      // },
      {
        path: 'exit',
        component: () => import('@/views/manager/exit'),
        name: '',
        hidden: true,
        meta: { title: '外包人员退场' }
      }
      // {
      //   path: 'create',
      //   component: () => import('@/views/example/create'),
      //   name: 'CreateArticle',
      //   meta: { title: 'Create Article' }
      // }
    ]
  },

  {
    path: '/supplier',
    component: Layout,
    redirect: '/supplier/list',
    name: 'Example',
    meta: {
      title: '供应商',
      icon: 'excel'
    },
    children: [

      // {
      //   path: 'edit/:id(\\d+)',
      //   component: () => import('@/views/supplier/edit'),
      //   name: 'EditArticle',
      //   meta: { title: 'Edit Article', noCache: true, activeMenu: '/supplier/list' },
      //   hidden: true
      // },
      {
        path: '/supplier/dashboard',
        component: () => import('@/views/supplier/dashboard/index'),
        name: '',
        meta: { title: '首页' }
      },
      {
        path: 'list',
        component: () => import('@/views/supplier/list'),
        name: 'ArticleList',
        meta: { title: '合作项目' }
      },
      {
        path: 'tab',
        component: () => import('@/views/supplier/tab'),
        name: '',
        hidden: true,
        meta: { title: '合作项目详情' }
      },
      {
        path: 'projecter',
        component: () => import('@/views/supplier/projecter'),
        name: '',
        // hidden: true,
        meta: { title: '外派人员' }
      },
      {
        path: 'projecterInfo',
        component: () => import('@/views/supplier/projecterInfo'),
        name: '',
        hidden: true,
        meta: { title: '人员详情' }
      },
      // {
      //   path: 'listCompany',
      //   component: () => import('@/views/supplier/listCompany'),
      //   name: '',
      //   meta: { title: '合作项目-外包' }
      // },
      {
        path: 'interview',
        component: () => import('@/views/supplier/interview'),
        name: '',
        meta: { title: '面试申请' }
      },
      {
        path: 'interviewInfo',
        component: () => import('@/views/supplier/interviewInfo'),
        name: '',
        hidden: true,
        meta: { title: '面试详情' }
      },
      {
        path: 'interviewList',
        component: () => import('@/views/supplier/interviewList'),
        name: '',
        // hidden: true,
        meta: { title: '面试记录' }
      },
      {
        path: 'trial',
        component: () => import('@/views/supplier/trial'),
        name: '',
        hidden: true,
        meta: { title: '入场试用申请' }
      },
      {
        path: 'trialList',
        component: () => import('@/views/supplier/trialList'),
        name: '',
        // hidden: true,
        meta: { title: '入场试用申请记录' }
      },
      {
        path: 'trialInfo',
        component: () => import('@/views/supplier/trialInfo'),
        name: '',
        // hidden: true,
        meta: { title: '入场试用考核查看' }
      },
      {
        path: 'supplierList',
        component: () => import('@/views/supplier/supplierList'),
        name: '',
        hidden: true,
        meta: { title: '月度考核查阅' }
      },
      {
        path: 'trialView',
        component: () => import('@/views/supplier/trialView'),
        name: '',
        hidden: true,
        meta: { title: '入场试用考核审核结果' }
      },
      {
        path: 'check',
        component: () => import('@/views/supplier/check'),
        name: '',
        hidden: true,
        meta: { title: '入场试用考核详情' }
      },
      {
        path: 'workManage',
        component: () => import('@/views/supplier/workManage'),
        name: '',
        hidden: true,
        meta: { title: '工时申请审核列表' }
      },
      {
        path: 'workList',
        component: () => import('@/views/supplier/workList'),
        name: '',
        // hidden: true,
        meta: { title: '外派人员工时查看' }
      },
      {
        path: 'checkManage',
        component: () => import('@/views/supplier/checkManage'),
        name: '',
        // hidden: true,
        meta: { title: '外派人员考勤查看' }
      },
      {
        path: 'supplier',
        component: () => import('@/views/supplier/supplier'),
        name: '',
        hidden: true,
        meta: { title: '月度考核详情查看' }
      },
      {
        path: 'out',
        component: () => import('@/views/supplier/out'),
        name: '',
        // hidden: true,
        meta: { title: '外派人员退场查看' }
      },
      {
        path: 'exitDetail',
        component: () => import('@/views/supplier/exitDetail'),
        name: '',
        hidden: true,
        meta: { title: '外包人员退场办理详情' }
      },
      {
        path: 'file',
        component: () => import('@/views/supplier/file'),
        name: '',
        // hidden: true,
        meta: { title: '归档人员' }
      },
      // {
      //   path: 'outList',
      //   component: () => import('@/views/supplier/outList'),
      //   name: '',
      //   // hidden: true,
      //   meta: { title: '退场历史记录' }
      // },
      // {
      //   path: 'projectImport',
      //   component: () => import('@/views/supplier/projectImport'),
      //   name: '',
      //   meta: { title: '项目导入' }
      // },
      // {
      //   path: 'tab',
      //   component: () => import('@/views/supplier/tab'),
      //   name: '',
      //   hidden: true,
      //   meta: { title: '项目详情' }
      // },
      {
        path: 'exit',
        component: () => import('@/views/supplier/exit'),
        name: '',
        hidden: true,
        meta: { title: '外包人员退场' }
      }
      // {
      //   path: 'create',
      //   component: () => import('@/views/example/create'),
      //   name: 'CreateArticle',
      //   meta: { title: 'Create Article' }
      // }
    ]
  },
  {
    path: '/HR',
    component: Layout,
    redirect: '/hr/list',
    name: 'Example',
    meta: {
      title: 'HR',
      icon: 'excel'
    },
    children: [

      // {
      //   path: 'edit/:id(\\d+)',
      //   component: () => import('@/views/supplier/edit'),
      //   name: 'EditArticle',
      //   meta: { title: 'Edit Article', noCache: true, activeMenu: '/supplier/list' },
      //   hidden: true
      // },
      {
        path: '/HR/dashboard',
        component: () => import('@/views/HR/dashboard/index'),
        name: '',
        meta: { title: '首页' }
      },
      {
        path: 'list',
        component: () => import('@/views/HR/list'),
        name: 'ArticleList',
        meta: { title: '合作项目' }
      },
      {
        path: 'tab',
        component: () => import('@/views/HR/tab'),
        name: '',
        hidden: true,
        meta: { title: '合作项目详情' }
      },
      {
        path: 'projecter',
        component: () => import('@/views/HR/projecter'),
        name: '',
        // hidden: true,
        meta: { title: '外包人员' }
      },
      {
        path: 'projecterInfo',
        component: () => import('@/views/HR/projecterInfo'),
        name: '',
        hidden: true,
        meta: { title: '人员详情' }
      },
      // {
      //   path: 'listCompany',
      //   component: () => import('@/views/HR/listCompany'),
      //   name: '',
      //   meta: { title: '合作项目-外包' }
      // },
      {
        path: 'interview',
        component: () => import('@/views/HR/interview'),
        name: '',
        hidden: true,
        meta: { title: '面试申请' }
      },
      {
        path: 'interviewInfo',
        component: () => import('@/views/HR/interviewInfo'),
        name: '',
        hidden: true,
        meta: { title: '面试详情' }
      },
      {
        path: 'interviewList',
        component: () => import('@/views/HR/interviewList'),
        name: '',
        // hidden: true,
        meta: { title: '面试记录' }
      },
      {
        path: 'trial',
        component: () => import('@/views/HR/trial'),
        name: '',
        hidden: true,
        meta: { title: '入场试用申请' }
      },
      {
        path: 'trialList',
        component: () => import('@/views/HR/trialList'),
        name: '',
        // hidden: true,
        meta: { title: '入场试用审批' }
      },
      {
        path: 'trialListView',
        component: () => import('@/views/HR/trialListView'),
        name: '',
        // hidden: true,
        meta: { title: '入场试用审批记录' }
      },
      {
        path: 'trialInfo',
        component: () => import('@/views/HR/trialInfo'),
        name: '',
        // hidden: true,
        meta: { title: '入场试用考核查看' }
      },
      {
        path: 'supplierList',
        component: () => import('@/views/HR/supplierList'),
        name: '',
        hidden: true,
        meta: { title: '月度考核查阅' }
      },
      {
        path: 'trialView',
        component: () => import('@/views/HR/trialView'),
        name: '',
        hidden: true,
        meta: { title: '入场试用考核审核结果' }
      },
      {
        path: 'check',
        component: () => import('@/views/HR/check'),
        name: '',
        hidden: true,
        meta: { title: '入场试用考核详情' }
      },
      {
        path: 'workManage',
        component: () => import('@/views/HR/workManage'),
        name: '',
        hidden: true,
        meta: { title: '工时申请审核列表' }
      },
      {
        path: 'workList',
        component: () => import('@/views/HR/workList'),
        name: '',
        // hidden: true,
        meta: { title: '外包人员工时查看' }
      },
      {
        path: 'checkManage',
        component: () => import('@/views/HR/checkManage'),
        name: '',
        // hidden: true,
        meta: { title: '外包人员考勤查看' }
      },
      {
        path: 'supplier',
        component: () => import('@/views/HR/supplier'),
        name: '',
        hidden: true,
        meta: { title: '月度考核详情查看' }
      },
      {
        path: 'out',
        component: () => import('@/views/HR/out'),
        name: '',
        // hidden: true,
        meta: { title: '外包人员退场查看' }
      },
      {
        path: 'exitDetail',
        component: () => import('@/views/HR/exitDetail'),
        name: '',
        hidden: true,
        meta: { title: '外包人员退场办理详情' }
      },
      {
        path: 'file',
        component: () => import('@/views/HR/file'),
        name: '',
        // hidden: true,
        meta: { title: '归档人员' }
      },
      // {
      //   path: 'outList',
      //   component: () => import('@/views/HR/outList'),
      //   name: '',
      //   // hidden: true,
      //   meta: { title: '退场历史记录' }
      // },
      // {
      //   path: 'projectImport',
      //   component: () => import('@/views/HR/projectImport'),
      //   name: '',
      //   meta: { title: '项目导入' }
      // },
      // {
      //   path: 'tab',
      //   component: () => import('@/views/HR/tab'),
      //   name: '',
      //   hidden: true,
      //   meta: { title: '项目详情' }
      // },
      {
        path: 'exit',
        component: () => import('@/views/HR/exit'),
        name: '',
        hidden: true,
        meta: { title: '外包人员退场' }
      }
      // {
      //   path: 'create',
      //   component: () => import('@/views/example/create'),
      //   name: 'CreateArticle',
      //   meta: { title: 'Create Article' }
      // }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/list',
    name: 'Example',
    meta: {
      title: '合作项目管理',
      icon: 'example'
    },
    children: [

      {
        path: 'edit/:id(\\d+)',
        component: () => import('@/views/example/edit'),
        name: 'EditArticle',
        meta: { title: 'Edit Article', noCache: true, activeMenu: '/example/list' },
        hidden: true
      },
      {
        path: 'listHR',
        component: () => import('@/views/example/listHR'),
        name: 'ArticleList',
        meta: { title: '合作项目-HR' }
      },
      {
        path: 'listCompany',
        component: () => import('@/views/example/listCompany'),
        name: '',
        meta: { title: '合作项目-外包' }
      },
      {
        path: 'listManage',
        component: () => import('@/views/example/listManage'),
        name: '',
        meta: { title: '合作项目-项目负责人' }
      },
      {
        path: 'projectImport',
        component: () => import('@/views/example/projectImport'),
        name: '',
        meta: { title: '项目导入' }
      },
      {
        path: 'tab',
        component: () => import('@/views/example/tab'),
        name: '',
        hidden: true,
        meta: { title: '项目详情' }
      },
      {
        path: 'exit',
        component: () => import('@/views/example/exit'),
        name: '',
        hidden: true,
        meta: { title: '外包人员退场' }
      }
      // {
      //   path: 'create',
      //   component: () => import('@/views/example/create'),
      //   name: 'CreateArticle',
      //   meta: { title: 'Create Article' }
      // }
    ]
  },
  /** when your routing map is too long, you can split it into small modules **/
  componentsRouter,
  {
    path: '/process',
    component: Layout,
    redirect: 'noRedirect',
    name: 'Process',
    meta: {
      title: '流程管理',
      icon: 'icon'
    },
    children: [
      {
        path: 'entrance',
        component: () => import('@/views/process/entrance'),
        name: 'entrance',
        meta: { title: '入场试用考核审批' }
      },
      {
        path: 'exit',
        component: () => import('@/views/process/exit'),
        name: 'exit',
        meta: { title: '外包人员退场' }
      }
      // {
      //   path: 'create',
      //   component: () => import('@/views/example/create'),
      //   name: 'CreateArticle',
      //   meta: { title: 'Create Article' }
      // }
    ]
  },
  {
    path: '/error-log',
    component: Layout,
    children: [
      {
        path: 'supplier',
        component: () => import('@/views/error-log/supplier'),
        name: 'ErrorLog',
        meta: { title: '供应商管理', icon: 'bug' }
      }
    ]
  },
  // chartsRouter,
  // nestedRouter,
  // tableRouter,

  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'Error Pages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/error-page/401'),
  //       name: 'Page401',
  //       meta: { title: '401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/error-page/404'),
  //       name: 'Page404',
  //       meta: { title: '404', noCache: true }
  //     }
  //   ]
  // },

  // {
  //   path: '/error-log',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'log',
  //       component: () => import('@/views/error-log/index'),
  //       name: 'ErrorLog',
  //       meta: { title: 'Error Log', icon: 'bug' }
  //     }
  //   ]
  // },

  // {
  //   path: '/excel',
  //   component: Layout,
  //   redirect: '/excel/export-excel',
  //   name: 'Excel',
  //   meta: {
  //     title: 'Excel',
  //     icon: 'excel'
  //   },
  //   children: [
  //     {
  //       path: 'export-excel',
  //       component: () => import('@/views/excel/export-excel'),
  //       name: 'ExportExcel',
  //       meta: { title: 'Export Excel' }
  //     },
  //     {
  //       path: 'export-selected-excel',
  //       component: () => import('@/views/excel/select-excel'),
  //       name: 'SelectExcel',
  //       meta: { title: 'Export Selected' }
  //     },
  //     {
  //       path: 'export-merge-header',
  //       component: () => import('@/views/excel/merge-header'),
  //       name: 'MergeHeader',
  //       meta: { title: 'Merge Header' }
  //     },
  //     {
  //       path: 'upload-excel',
  //       component: () => import('@/views/excel/upload-excel'),
  //       name: 'UploadExcel',
  //       meta: { title: 'Upload Excel' }
  //     }
  //   ]
  // },

  // {
  //   path: '/zip',
  //   component: Layout,
  //   redirect: '/zip/download',
  //   alwaysShow: true,
  //   name: 'Zip',
  //   meta: { title: 'Zip', icon: 'zip' },
  //   children: [
  //     {
  //       path: 'download',
  //       component: () => import('@/views/zip/index'),
  //       name: 'ExportZip',
  //       meta: { title: 'Export Zip' }
  //     }
  //   ]
  // },
  /**
  {
    path: '/pdf',
    component: Layout,
    redirect: '/pdf/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/pdf/index'),
        name: 'PDF',
        meta: { title: 'PDF', icon: 'pdf' }
      }
    ]
  },
  {
    path: '/pdf/download',
    component: () => import('@/views/pdf/download'),
    hidden: true
  },

  {
    path: '/theme',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/theme/index'),
        name: 'Theme',
        meta: { title: 'Theme', icon: 'theme' }
      }
    ]
  },

  {
    path: '/clipboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/clipboard/index'),
        name: 'ClipboardDemo',
        meta: { title: 'Clipboard', icon: 'clipboard' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },*/

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
