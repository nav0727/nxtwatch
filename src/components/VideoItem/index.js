import {Link} from 'react-router-dom'

import {Component} from 'react'

// import {formatDistanceToNow} from 'date-fns'

import {formatDistance} from 'date-fns'

import './index.css'
import NxtContext from '../../context/NxtContext'
import {Paragraph} from './stylecomponents'

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
                        <Paragraph isDark={isDark}>. {publish} ago</Paragraph>
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
