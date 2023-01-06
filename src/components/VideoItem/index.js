import {Link} from 'react-router-dom'

// import differenceInYears from 'date-fns/differenceInYears'

/* 
  const newDate = publishedAt

  // console.log(newDate)

  // monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date1 = newDate.getDate()
  const month1 = 2
  const year1 = newDate.getFullYear()

  const today = new Date()
  console.log(today)
  const date = today.getDate()
  const month = today.getMonth()
  const year = today.getFullYear()

  // console.log(date, month + 1, year)

  const result = differenceInYears(
    new Date(`${year1}, ${month1 + 1}, ${date1}`),
    new Date(`${year}, ${month + 1}, ${date}`),
  )

  console.log(parseInt(result + 2 * -result))
  */

import './index.css'

const VideoItem = props => {
  const {videoItem} = props
  const {
    id,
    title,
    thumbNailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = videoItem
  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <li className="video-list-container">
        <div>
          <img src={thumbNailUrl} alt="thumbnail url" className="thumb-image" />
          <div className="rows">
            <img src={profileImageUrl} alt="profile" className="profileV" />
            <div>
              <p>{title}</p>
              <p>{name}</p>
              <div className="row">
                <p>{viewCount} views</p>
                <p>. {publishedAt} ago</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default VideoItem
