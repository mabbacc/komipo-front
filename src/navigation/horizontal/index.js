import { Mail, Home, Monitor, Grid, Tool } from 'react-feather'

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
    icon: <Monitor size={20} />,
    navLink: '/subboard'
  },
  {
    id: 'detailmachine',
    title: 'DetailMachine',
    icon: <Grid size={20} />,
    navLink: '/detailmachine'
  },
  {
    id: 'TEMPORARY',
    title: '이 메뉴 영역은 임시로 만든 영역입니다.',
    icon: <Tool size={20} />
  }
  /*
  {
    id: 'home',
    title: 'Home',
    icon: <Home size={20} />,
    navLink: '/home'
  },
  {
    id: 'secondPage',
    title: 'Second Page',
    icon: <Mail size={20} />,
    navLink: '/second-page'
  }
  */
]
