import {withRouter} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'
import {TiWeatherSunny} from 'react-icons/ti'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onLogout = () => {
    const {history} = props

    const JWTToken = Cookies.remove('jwt_token')
    console.log(JWTToken)
    if (JWTToken === undefined) {
      return history.replace('/login')
    }
    return history.replace(...props)
  }

  const {toggleTheme} = props
  const changeTheme = () => {
    toggleTheme()
  }

  return (
    <nav className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
        alt="nxt watch"
        className="nxt-watch"
      />

      <div className="header-items">
        <button type="button" className="marg bg" onClick={changeTheme}>
          <TiWeatherSunny className="font" />
          <FaMoon className="font" />
        </button>

        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
          alt="profile"
          className="profile marg"
        />

        <button type="button" className="log-out" onClick={onLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
