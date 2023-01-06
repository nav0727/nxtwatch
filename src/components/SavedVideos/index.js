import {Component} from 'react'
import Header from '../Header'
import LeftNav from '../LeftNav'

import './index.css'
import NoSaved from '../NoSaved'

class SavedVideos extends Component {
  state = {savedList: [], isDark: false}

  onSaveList = product => {
    this.setState(prev => ({savedList: {...prev.savedList, product}}))
  }

  renderSavedList = () => {
    const {savedList} = this.state

    return (
      <div>{savedList.length === 0 ? <NoSaved /> : <h1>Saved Videos</h1>}</div>
    )
  }

  toggleTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <div className={isDark ? 'Home-container' : 'light'}>
        <Header toggleTheme={this.toggleTheme} />
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
