import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {BiListPlus} from 'react-icons/bi'

import './index.css'

const VideosPlayItem = props => {
  const {videoItem} = props

  const {
    title,
    videoUrl,
    // thumbnailUrl,
    name,
    profileImageUrl,
    subscriberCount,
    viewCount,
    publishedAt,
    description,
  } = videoItem

  return (
    <div>
      <ReactPlayer
        url={videoUrl}
        controls="controls"
        width="100%"
        loop="true"
        autoplay="autoplay"
        muted
        type="video/mp4"
      />
      <p>{title}</p>
      <div className="row-order">
        <div className="row">
          <p>{viewCount} views</p>
          <p>.{publishedAt} ago</p>
        </div>
        <div className="row">
          <div className="row">
            <button type="button" className="btn-icon">
              <AiOutlineLike className="symbol" />
            </button>
            <p>Like</p>
          </div>
          <div className="row">
            <button type="button" className="btn-icon">
              <AiOutlineDislike className="symbol" />
            </button>
            <p>Dislike</p>
          </div>
          <div className="row">
            <button type="button" className="btn-icon">
              <BiListPlus className="symbol" />
            </button>
            <p>Save</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <img src={profileImageUrl} alt="profile" className="cri-logo" />
        <div className="col">
          <div>
            <p>{name}</p>
            <p>{subscriberCount} subscribers</p>
          </div>

          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
export default VideosPlayItem
