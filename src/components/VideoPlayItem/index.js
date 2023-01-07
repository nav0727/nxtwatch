import {Component} from 'react'

import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {BiListPlus} from 'react-icons/bi'

import './index.css'
import NxtContext from '../../context/NxtContext'

class VideosPlayItem extends Component {
  state = {isLiked: false, isDisliked: false}

  onLiked = () => {
    this.setState({isLiked: true, isDisliked: false})
  }

  onDisLiked = () => {
    this.setState({isLiked: false, isDisliked: true})
  }

  render() {
    const {videoItem} = this.props
    const {isLiked, isDisliked} = this.state

    const {
      title,
      id,
      videoUrl,
      name,
      profileImageUrl,
      subscriberCount,
      viewCount,
      publishedAt,
      description,
    } = videoItem

    return (
      <NxtContext.Consumer>
        {value => {
          const {addToSavedList} = value

          const onSave = () => {
            addToSavedList(id)
          }

          return (
            <div className="video-margin">
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
                  <p>. {publishedAt} ago</p>
                </div>
                <div className="row">
                  <div className="row">
                    <button
                      type="button"
                      className="btn-icon"
                      onClick={this.onLiked}
                      value={isLiked}
                    >
                      <AiOutlineLike className={isLiked ? 'liked' : 'symbol'} />
                    </button>
                    <p
                      onClick={this.onLiked}
                      className={isLiked ? 'liked' : 'symbol'}
                    >
                      Like
                    </p>
                  </div>
                  <div className="row">
                    <button
                      type="button"
                      className="btn-icon"
                      onClick={this.onDisLiked}
                      value={isDisliked}
                    >
                      <AiOutlineDislike
                        className={isDisliked ? 'liked' : 'symbol'}
                      />
                    </button>

                    <p
                      onClick={this.onDisLiked}
                      className={isDisliked ? 'liked' : 'symbol'}
                    >
                      Dislike
                    </p>
                  </div>
                  <div className="row">
                    <button type="button" className="btn-icon" onClick={onSave}>
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
        }}
      </NxtContext.Consumer>
    )
  }
}
export default VideosPlayItem
