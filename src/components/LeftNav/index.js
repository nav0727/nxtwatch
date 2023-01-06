import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import './index.css'

class LeftNav extends Component {
  render() {
    return (
      <nav className="left-container">
        <ul>
          <Link to="/" style={{textDecoration: 'none'}}>
            <li>
              <button type="button" className="btn-icon">
                <AiFillHome className="symbol" />
              </button>
              <p>home</p>
            </li>
          </Link>

          <Link to="/trending" style={{textDecoration: 'none'}}>
            <li>
              <button type="button" className="btn-icon">
                <HiFire className="symbol" />
              </button>
              <p>Trending</p>
            </li>
          </Link>

          <Link to="/gaming" style={{textDecoration: 'none'}}>
            <li>
              <button type="button" className="btn-icon">
                <SiYoutubegaming className="symbol" />
              </button>
              <p>Gaming</p>
            </li>
          </Link>

          <Link to="/saved-videos" style={{textDecoration: 'none'}}>
            <li>
              <button type="button" className="btn-icon">
                <BiListPlus className="symbol" />
              </button>
              <p>Saved videos</p>
            </li>
          </Link>
        </ul>

        <div>
          <p>CONTACT US</p>

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
          <p>Enjoy! Now to see your channels and recommendations!</p>
        </div>
      </nav>
    )
  }
}

export default LeftNav
