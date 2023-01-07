import {Link} from 'react-router-dom'

import {Component} from 'react'

import {formatDistanceToNow} from 'date-fns'

// import {formatDistance} from 'date-fns'

import './index.css'
import NxtContext from '../../context/NxtContext'
import {Paragraph} from './stylecomponents'

class VideoItem extends Component {
  render() {
    const {videoItem} = this.props
    const {
      id,
      title,
      thumbNailUrl,
      publishedAt,
      name,
      profileImageUrl,
      viewCount,
    } = videoItem

    const dateAgo = formatDistanceToNow(new Date(publishedAt))

    return (
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value

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
                    <img
                      src={profileImageUrl}
                      alt="profile"
                      className="profileV"
                    />
                    <div>
                      <Paragraph isDark={isDark}>{title}</Paragraph>
                      <Paragraph isDark={isDark}>{name}</Paragraph>
                      <div className="row">
                        <Paragraph isDark={isDark}>{viewCount} views</Paragraph>
                        <Paragraph isDark={isDark}>. {dateAgo} ago</Paragraph>
                      </div>
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
}
export default VideoItem
