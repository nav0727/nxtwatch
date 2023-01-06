import {Component} from 'react'
import Header from '../Header'
import LeftNav from '../LeftNav'

import './index.css'
import NoSaved from '../NoSaved'

class SavedVideos extends Component {
  state = {savedList: []}

  renderSavedList = () => {
    const {savedList} = this.state

    return (
      <div>{savedList.length === 0 ? <NoSaved /> : <h1>Saved Videos</h1>}</div>
    )
  }

  render() {
    return (
      <div className="Home-container">
        <Header />
        <div className="row">
          <div>
            <LeftNav />
          </div>
          <div className="body-con">{this.renderSavedList()}</div>
        </div>
      </div>
    )
  }
}

export default SavedVideos
