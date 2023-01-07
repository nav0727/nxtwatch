import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import './index.css'
import NxtContext from '../../context/NxtContext'
import {LeftNavContainer, Paragraph} from './stylecomponents'

class LeftNav extends Component {
  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <LeftNavContainer isDark={isDark}>
              <ul>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <li>
                    <button type="button" className="btn-icon">
                      <AiFillHome className={isDark ? 'symbols' : 'symbol'} />
                    </button>
                    <Paragraph isDark={isDark}>Home</Paragraph>
                  </li>
                </Link>

                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <li>
                    <button type="button" className="btn-icon">
                      <HiFire className={isDark ? 'symbols' : 'symbol'} />
                    </button>
                    <Paragraph isDark={isDark}>Trending</Paragraph>
                  </li>
                </Link>

                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  <li>
                    <button type="button" className="btn-icon">
                      <SiYoutubegaming
                        className={isDark ? 'symbols' : 'symbol'}
                      />
                    </button>
                    <Paragraph isDark={isDark}>Gaming</Paragraph>
                  </li>
                </Link>

                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  <li>
                    <button type="button" className="btn-icon">
                      <BiListPlus className={isDark ? 'symbols' : 'symbol'} />
                    </button>
                    <Paragraph isDark={isDark}>Saved videos</Paragraph>
                  </li>
                </Link>
              </ul>

              <div className="support">
                <Paragraph isDark={isDark}>CONTACT US</Paragraph>

                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                    className="apps"
                  />

                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                    className="apps"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                    className="apps"
                  />
                </div>
                <Paragraph isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </Paragraph>
              </div>
            </LeftNavContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default LeftNav
