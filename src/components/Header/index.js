import {withRouter} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'
import {TiWeatherSunny} from 'react-icons/ti'
import Cookies from 'js-cookie'

import NxtContext from '../../context/NxtContext'

import './index.css'
import {HeadContainer} from './stylecomponents'

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

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark, toggleTheme} = value

        const changeTheme = () => {
          toggleTheme()
        }

        return (
          <HeadContainer isDark={isDark}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch"
              className="nxt-watch"
            />

            <div className="header-items">
              <button type="button" className="marg bg" onClick={changeTheme}>
                {isDark ? (
                  <FaMoon className="moon" />
                ) : (
                  <TiWeatherSunny className="font" />
                )}
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
          </HeadContainer>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default withRouter(Header)
