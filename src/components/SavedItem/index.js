import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import NxtContext from '../../context/NxtContext'

import {ParagraphEl} from './styledcomponents'
import './index.css'

const SavedItem = props => {
  const {savedItem} = props
  const {id, title, thumbnailUrl, viewCount, publishedAt} = savedItem

  const timeAgo = () => {
    const timeForm = formatDistanceToNow(new Date(publishedAt))

    return timeForm
  }

  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <li className="list">
              <div className="trend-item">
                <img src={thumbnailUrl} alt="thumbnail url" className="thumb" />

                <div>
                  <ParagraphEl isDark={isDark}>{title}</ParagraphEl>
                  <div className="row">
                    <ParagraphEl isDark={isDark}>{viewCount} views</ParagraphEl>
                    <ParagraphEl isDark={isDark}>{timeAgo()} ago</ParagraphEl>
                  </div>
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
