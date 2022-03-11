// ** React Imports
import { Link } from 'react-router-dom'
// import { Fragment, useEffect, useState } from 'react'
import { Fragment } from 'react'

// ** Third Party Components
import * as Icon from 'react-feather'
// import classnames from 'classnames'

// ** Custom Component
import Autocomplete from '@components/autocomplete'

// ** Configs
import themeConfig from '@configs/themeConfig'

// ** Reactstrap Imports
import { NavItem, NavLink, DropdownMenu, DropdownItem, DropdownToggle, UncontrolledTooltip, UncontrolledDropdown } from 'reactstrap'

// ** Store & Actions
// import { useDispatch, useSelector } from 'react-redux'
// import { getBookmarks, updateBookmarked, handleSearchQuery } from '@store/navbar'

const NavbarBookmarks = (props) => {
  // ** Props
  const { setMenuVisibility } = props

  // ** State
  // const [value, setValue] = useState('')
  // const [openSearch, setOpenSearch] = useState(false)

  // ** Store Vars
  // const dispatch = useDispatch()
  // const store = useSelector(state => state.navbar)
  const store = {
    bookmarks: [
      {
        id: 3,
        target: 'mainlogo',
        isBookmarked: true,
        title: 'KOMIPO',
        icon: 'Home',
        link: '/dashboard'
      }
    ]
  }

  // ** ComponentDidMount
  // useEffect(() => {
  //   dispatch(getBookmarks())
  // }, [])

  // ** Loops through Bookmarks Array to return Bookmarks
  const renderBookmarks = () => {
    if (store.bookmarks.length) {
      return store.bookmarks
        .map((item) => {
          const IconTag = Icon[item.icon]
          return (
            <NavItem key={item.target} className="d-none d-lg-block">
              <NavLink tag={Link} to={item.link} id={item.target} >
                {/* <IconTag className="ficon" /> */}
                  <span className='brand-logo'>
                    <img src={themeConfig.app.appLogoImage} alt='logo' style={{maxWidth: '36px'}} />
                  </span>
                <UncontrolledTooltip target={item.target}>{item.title}</UncontrolledTooltip>
              </NavLink>
            </NavItem>
          )
        })
        .slice(0, 10)
    } else {
      return null
    }
  }

  return (
    <Fragment>
      <ul className="navbar-nav d-xl-none">
        <NavItem className="mobile-menu me-auto">
          <NavLink className="nav-menu-main menu-toggle hidden-xs is-active" onClick={() => setMenuVisibility(true)}>
            <Icon.Menu className="ficon" />
          </NavLink>
        </NavItem>
      </ul>
      <ul className="nav navbar-nav bookmark-icons">
        {renderBookmarks()}
      </ul>
    </Fragment>
  )
}

export default NavbarBookmarks
