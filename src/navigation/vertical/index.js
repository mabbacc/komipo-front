import { Mail, Home } from 'react-feather'

export default [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: <Home size={20} />,
    navLink: '/dashboard'
  },
  {
    id: 'subboard',
    title: 'Subboard',
    icon: <Home size={20} />,
    navLink: '/subboard'
  },
  {
    id: 'detailmachine',
    title: 'DetailMachine',
    icon: <Home size={20} />,
    navLink: '/detailmachine'
  }
  // {
  //   id: 'home',
  //   title: 'Home',
  //   icon: <Home size={20} />,
  //   navLink: '/home'
  // },
  // {
  //   id: 'secondPage',
  //   title: 'Second Page',
  //   icon: <Mail size={20} />,
  //   navLink: '/second-page'
  // }
]
