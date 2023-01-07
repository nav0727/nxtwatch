import {Link} from 'react-router-dom'

import NxtContext from '../../context/NxtContext'
import {GameListItem} from './styledcomponents'

import './index.css'

const GameItem = props => {
  const {videoItem} = props
  const {id, title, thumbNailUrl, viewCount} = videoItem
  return (
    <NxtContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <GameListItem isDark={isDark}>
              <div>
                <img
                  src={thumbNailUrl}
                  alt="thumbnail url"
                  className="thumb-img"
                />
                <p>{title}</p>
                <p>{viewCount} views</p>
              </div>
            </GameListItem>
          </Link>
        )
      }}
    </NxtContext.Consumer>
  )
}

export default GameItem
