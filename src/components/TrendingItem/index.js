import {Link} from 'react-router-dom'

import './index.css'

const TrendingItem = props => {
  const {trendingItem} = props
  const {id, title, thumbNailUrl, viewCount} = trendingItem
  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <li className="list">
        <div className="trend-item">
          <img src={thumbNailUrl} alt="thumbnail url" className="thumb" />

          <div>
            <p>{title}</p>
            <p>{viewCount} views</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default TrendingItem
