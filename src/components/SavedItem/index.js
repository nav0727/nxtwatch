import {Link} from 'react-router-dom'
import NxtContext from '../../context/NxtContext'

import {ParagraphEl} from './styledcomponents'
import './index.css'

const SavedItem = props => {
  const {savedItem} = props
  const {id, title, thumbNailUrl, viewCount} = savedItem

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <li className="list">
              <div className="trend-item">
                <img src={thumbNailUrl} alt="thumbnail url" className="thumb" />

                <div>
                  <ParagraphEl isDark={isDark}>{title}</ParagraphEl>
                  <ParagraphEl isDark={isDark}>{viewCount} views</ParagraphEl>
                </div>
              </div>
            </li>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default SavedItem
