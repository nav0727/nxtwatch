import {Link} from 'react-router-dom'

import {Component} from 'react'

// import {formatDistanceToNow} from 'date-fns'

import {formatDistance} from 'date-fns'

import './index.css'

class VideoItem extends Component {
  state = {publish: ''}

  componentDidMount() {
    this.getYears()
  }

  getYears = () => {
    const {videoItem} = this.props
    const {publishedAt} = videoItem

    const timestamp = publishedAt ? new Date(publishedAt) : ''
    const distance = formatDistance(Date.now(), timestamp, {
      addSuffix: true,
    })

    this.setState({
      publish: distance.substring(distance.indexOf(distance.match(/\d+/g))),
    })
  }

  render() {
    const {videoItem} = this.props
    const {
      id,
      title,
      thumbNailUrl,
      name,
      profileImageUrl,
      viewCount,
    } = videoItem
    const {publish} = this.state

    return (
      <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
        <li className="video-list-container">
          <div>
            <img
              src={thumbNailUrl}
              alt="thumbnail url"
              className="thumb-image"
            />
            <div className="rows">
              <img src={profileImageUrl} alt="profile" className="profileV" />
              <div>
                <p>{title}</p>
                <p>{name}</p>
                <div className="row">
                  <p>{viewCount} views</p>
                  <p>. {publish} ago</p>
                </div>
              </div>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}
export default VideoItem
