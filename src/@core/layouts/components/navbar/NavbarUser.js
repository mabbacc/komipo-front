import { Fragment } from 'react'
import UserDropdown from './UserDropdown'
// import { useHistory } from 'react-router'
// import { Moon, Sun } from 'react-feather'
import { NavItem, NavLink } from 'reactstrap'

const NavbarUser = (props) => {
  // const history = useHistory()
  // ** Props
  // const { skin, setSkin } = props

  // ** Function to toggle Theme (Light/Dark)
  // const ThemeToggler = () => {
  //   if (skin === 'dark') {
  //     return <Sun className="ficon" onClick={() => setSkin('light')} />
  //   } else {
  //     return <Moon className="ficon" onClick={() => setSkin('dark')} />
  //   }
  // }
/*
  const linkToDashboard = useCallback(() => {
    history.push('/dashboard')
  }, [history])
*/

  return (
    <ul className='nav navbar-nav align-items-center ms-auto'>
      <NavItem className='d-none d-lg-block'>
        <NavLink className='nav-link-style'>
          {/* <ThemeToggler /> */}
        </NavLink>
      </NavItem>
      <UserDropdown />
    </ul>
  )
}
export default NavbarUser
