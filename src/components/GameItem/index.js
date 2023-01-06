import {Link} from 'react-router-dom'

import './index.css'

const GameItem = props => {
  const {videoItem} = props
  const {id, title, thumbNailUrl, viewCount} = videoItem
  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <li className="mar">
        <div>
          <img src={thumbNailUrl} alt="thumbnail url" className="thumb-img" />
          <p>{title}</p>
          <p>{viewCount} views</p>
        </div>
      </li>
    </Link>
  )
}

export default GameItem
