import {Component} from 'react'
import Header from '../Header'
import LeftNav from '../LeftNav'

import NoSaved from '../NoSaved'
import NxtContext from '../../context/NxtContext'

import './index.css'
import {SavedCon} from './stylecomponents'

class SavedVideos extends Component {
  render() {
    return (
      <NxtContext.Consumer>
        {value => {
          const {savedList, isDark} = value

          return (
            <div>
              <Header toggleTheme={this.toggleTheme} />
              <div className="row">
                <div className="left">
                  <LeftNav />
                </div>
                <SavedCon isDark={isDark}>
                  {savedList.length === 0 ? <NoSaved /> : <h1>No Saved</h1>}
                </SavedCon>
              </div>
            </div>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default SavedVideos
