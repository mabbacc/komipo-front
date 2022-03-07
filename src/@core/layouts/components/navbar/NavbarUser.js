// ** Dropdowns Imports
import { Fragment, useCallback } from 'react'
import UserDropdown from './UserDropdown'
import { useHistory } from 'react-router'
import { Moon, Sun } from 'react-feather'
import { NavItem, NavLink } from 'reactstrap'


const NavbarUser = (props) => {
  const history = useHistory()
  // ** Props
  const { skin, setSkin } = props

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className="ficon" onClick={() => setSkin('light')} />
    } else {
      return <Moon className="ficon" onClick={() => setSkin('dark')} />
    }
  }
    
  const linkToDashboard = useCallback(() => {
    history.push('/dashboard')
  }, [history])

  return (
    <Fragment>
      <ul className='nav navbar-nav align-items-center col-1'>
        <div className='align-contents-end'>
          <div>
            logo
          </div>
        </div>
      </ul>
    
      <div className="text-center mr-auto ml-auto d-none d-lg-block col-9 cursor-pointer" onClick={linkToDashboard}>
        <h1>Predictive Diagnosis Monitoring System for Integrated V.M.S</h1>
      </div>

      <div className="text-right col-2 d-flex justify-content-end">
        <div className="bookmark-wrapper d-flex align-items-right">
          <NavItem className="d-none d-lg-block">
            <NavLink className="nav-link-style">
              <ThemeToggler />
            </NavLink>
          </NavItem>
        </div>

        <ul className='nav navbar-nav align-items-center'>
          <UserDropdown />
        </ul>
      </div>


    </Fragment>
  )
}
export default NavbarUser
