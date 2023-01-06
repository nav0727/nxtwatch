import {Component} from 'react'

import {GrClose} from 'react-icons/gr'

import Header from '../Header'
import LeftNav from '../LeftNav'

import './index.css'
import Videos from '../Video'

class Home extends Component {
  state = {hide: false}

  closeBtn = () => {
    this.setState({hide: true})
  }

  render() {
    const {hide} = this.state
    return (
      <div className="Home-container">
        <Header />
        <div className="body-container">
          <div>
            <LeftNav />
          </div>

          <div className="body">
            <div className={hide ? 'hide' : 'home-bg-wallpaper'}>
              <div>
                <div className="row ">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch"
                    className="nxt-watch"
                  />
                  <GrClose onClick={this.closeBtn} />
                </div>
              </div>
              <p>Buy Nxt watch Premium prepaid plans with UPI</p>
              <button type="button">GET IT NOW</button>
            </div>

            <Videos />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
