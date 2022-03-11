import { lazy } from 'react'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/dashboard'

// ** Merge Routes
const Routes = [
  {
    path: '/home',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/second-page',
    component: lazy(() => import('../../views/SecondPage'))
  },
  {
    path: '/login',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  },
  // komipo pages
  {
    path: '/dashboard',
    component: lazy(() => import('../../views/dashboard')),
    layout: 'HorizontalLayout',
    meta: {
      resource: 'Auth',
      action: 'read'
    }
  },
  {
    path: '/subboard',
    component: lazy(() => import('../../views/subboard')),
    layout: 'HorizontalLayout',
    meta: {
      resource: 'Auth',
      action: 'read'
    }
  },
  {
    path: '/detailmachine',
    component: lazy(() => import('../../views/detailmachine')),
    layout: 'HorizontalLayout',
    meta: {
      resource: 'Auth',
      action: 'read'
    }
  }
]

export { DefaultRoute, TemplateTitle, Routes }
