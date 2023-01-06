import {Component} from 'react'
import Header from '../Header'
import LeftNav from '../LeftNav'

import './index.css'

class NotFound extends Component {
  render() {
    return (
      <div className="Home-container">
        <Header />
        <div className="body-container">
          <div>
            <LeftNav />
          </div>
          <div className="body">
            <div className="not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
                className="not-found-image"
              />

              <h1>Page Not Found</h1>
              <p>We are sorry, the page you requested could not be found.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound
