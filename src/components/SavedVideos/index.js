import Header from '../Header'
import LeftNav from '../LeftNav'

import NoSaved from '../NoSaved'

import {SavedCon} from './stylecomponents'
import NxtContext from '../../context/NxtContext'
import SavedItem from '../SavedItem'

import './index.css'

const SavedVideos = () => {
  const renderSavedItems = savedList => (
    <div>
      {savedList.length === 0 ? (
        <NoSaved />
      ) : (
        <>
          <h1>Saved Videos</h1>
          {savedList.map(each => (
            <SavedItem key={each.id} savedItem={each} />
          ))}
        </>
      )}
    </div>
  )
  return (
    <NxtContext.Consumer>
      {value => {
        const {savedList, isDark} = value

        return (
          <div>
            <Header />
            <div className="row">
              <div className="left">
                <LeftNav />
              </div>
              <SavedCon isDark={isDark}>{renderSavedItems(savedList)}</SavedCon>
            </div>
          </div>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default SavedVideos
