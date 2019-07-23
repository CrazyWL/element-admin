/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: '外包人员管理',
    icon: 'component'
  },
  children: [
    /** {
      path: 'tinymce',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'TinymceDemo',
      meta: { title: 'Tinymce' }
    },
    {
      path: 'markdown',
      component: () => import('@/views/components-demo/markdown'),
      name: 'MarkdownDemo',
      meta: { title: 'Markdown' }
    },
    {
      path: 'json-editor',
      component: () => import('@/views/components-demo/json-editor'),
      name: 'JsonEditorDemo',
      meta: { title: 'JSON Editor' }
    },
    {
      path: 'split-pane',
      component: () => import('@/views/components-demo/split-pane'),
      name: 'SplitpaneDemo',
      meta: { title: 'SplitPane' }
    },
    {
      path: 'avatar-upload',
      component: () => import('@/views/components-demo/avatar-upload'),
      name: 'AvatarUploadDemo',
      meta: { title: 'Upload' }
    },
    {
      path: 'dropzone',
      component: () => import('@/views/components-demo/dropzone'),
      name: 'DropzoneDemo',
      meta: { title: 'Dropzone' }
    },
    {
      path: 'sticky',
      component: () => import('@/views/components-demo/sticky'),
      name: 'StickyDemo',
      meta: { title: 'Sticky' }
    },
    {
      path: 'count-to',
      component: () => import('@/views/components-demo/count-to'),
      name: 'CountToDemo',
      meta: { title: 'Count To' }
    },
    {
      path: 'mixin',
      component: () => import('@/views/components-demo/mixin'),
      name: 'ComponentMixinDemo',
      meta: { title: 'Component Mixin' }
    },
    {
      path: 'back-to-top',
      component: () => import('@/views/components-demo/back-to-top'),
      name: 'BackToTopDemo',
      meta: { title: 'Back To Top' }
    },
    {
      path: 'drag-dialog',
      component: () => import('@/views/components-demo/drag-dialog'),
      name: 'DragDialogDemo',
      meta: { title: 'Drag Dialog' }
    },
    {
      path: 'drag-select',
      component: () => import('@/views/components-demo/drag-select'),
      name: 'DragSelectDemo',
      meta: { title: 'Drag Select' }
    },*/
    // {
    //   path: 'projectManage',
    //   component: () => import('@/views/components-demo/projectManage'),
    //   name: 'DndListDemo',
    //   meta: { title: '人员管理' }
    // },
    {
      path: 'listHR',
      component: () => import('@/views/components-demo/listHR'),
      name: '',
      meta: { title: '人员管理-HR' }
    },
    {
      path: 'listCompany',
      component: () => import('@/views/components-demo/listCompany'),
      name: '',
      meta: { title: '人员管理-外包' }
    },
    {
      path: 'listManage',
      component: () => import('@/views/components-demo/listManage'),
      name: '',
      meta: { title: '人员管理-项目负责人' }
    },
    {
      path: 'checkManage',
      component: () => import('@/views/components-demo/checkManage'),
      name: '',
      meta: { title: '考勤管理' }
    },
    {
      path: 'check',
      component: () => import('@/views/components-demo/check'),
      name: '',
      hidden: true,
      meta: { title: '外包人员考核' }
    },
    {
      path: 'tab',
      component: () => import('@/views/components-demo/tab'),
      name: '',
      hidden: true,
      meta: { title: '外包人员详情' }
    },
    {
      path: 'workManage',
      component: () => import('@/views/components-demo/workManage'),
      name: '',
      meta: { title: '工时管理' }
    },
    {
      path: 'interviewManage',
      component: () => import('@/views/components-demo/interviewManage'),
      name: 'DndListDemo',
      meta: { title: '面试管理' }
    }
    /** {
      path: 'dnd-list',
      component: () => import('@/views/components-demo/dnd-list'),
      name: 'DndListDemo',
      meta: { title: 'Dnd List' }
    },
    {
      path: 'drag-kanban',
      component: () => import('@/views/components-demo/drag-kanban'),
      name: 'DragKanbanDemo',
      meta: { title: 'Drag Kanban' }
    }*/
  ]
}

export default componentsRouter
