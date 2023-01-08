import {Component} from 'react'

import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'

import {BiListPlus} from 'react-icons/bi'

import NxtContext from '../../context/NxtContext'

import './index.css'

class VideosPlayItem extends Component {
  state = {isLiked: false, isDisliked: false, isSaved: false}

  onLiked = () => {
    this.setState({isLiked: true, isDisliked: false})
  }

  onDisLiked = () => {
    this.setState({isLiked: false, isDisliked: true})
  }

  onSave = () => {
    this.setState(prev => ({isSaved: !prev.isSaved}))
  }

  onRemove = () => {
    this.setState(prev => ({isSaved: !prev.isSaved}))
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
          const {removeSaveItem, addSavedItem, savedList} = value
          const isSaved = savedList.some(each => each.id === videoItem.id)

          const onSave = () => {
            addSavedItem(videoItem)
          }
          const onRemove = () => {
            removeSaveItem(id)
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
              <div className="row-order" id={id}>
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
                      className={isLiked ? 'like-text' : 'not-like'}
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
                      className={isDisliked ? 'like-text' : 'not-like'}
                    >
                      Dislike
                    </p>
                  </div>
                  <div className="row">
                    {isSaved ? (
                      <>
                        <button
                          type="button"
                          className="btn-icon"
                          onClick={onRemove}
                        >
                          <BiListPlus
                            className={isSaved ? 'liked' : 'symbol'}
                          />
                        </button>
                        <p className={isSaved ? 'like-text' : 'not-like'}>
                          Saved
                        </p>
                      </>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="btn-icon"
                          onClick={onSave}
                        >
                          <BiListPlus
                            className={isSaved ? 'liked' : 'symbol'}
                          />
                        </button>
                        <p className={isSaved ? 'like-text' : 'not-like'}>
                          Save
                        </p>
                      </>
                    )}
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
