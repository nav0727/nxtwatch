import {Component} from 'react'

import Cookies from 'js-cookie'
// `https://apis.ccbp.in/videos/:id`

import VideoPlayItem from '../VideoPlayItem'
import Header from '../Header'
import LeftNav from '../LeftNav'

class VideoPlay extends Component {
  state = {videoPlayList: []}

  componentDidMount() {
    this.getVideoItem()
  }

  getVideoItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const JWTToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${JWTToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)

    //  console.log(response.json())

    if (response.ok === true) {
      const updateData = await response.json()

      const videoItemList = {
        id: updateData.video_details.id,
        title: updateData.video_details.title,
        videoUrl: updateData.video_details.video_url,
        thumbnailUrl: updateData.video_details.thumbnail_url,
        name: updateData.video_details.channel.name,
        profileImageUrl: updateData.video_details.channel.profile_image_url,
        subscriberCount: updateData.video_details.channel.subscriber_count,

        viewCount: updateData.video_details.view_count,
        publishedAt: updateData.video_details.published_at,
        description: updateData.video_details.description,
      }

      this.setState({videoPlayList: videoItemList})
    }
  }

  render() {
    const {videoPlayList} = this.state
    console.log(videoPlayList)
    return (
      <div className="Home-container">
        <Header />
        <div className="body-container">
          <div>
            <LeftNav />
          </div>

          <div className="body">
            <VideoPlayItem videoItem={videoPlayList} />
          </div>
        </div>
      </div>
    )
  }
}

export default VideoPlay
