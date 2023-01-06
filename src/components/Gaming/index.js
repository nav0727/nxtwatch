import {Component} from 'react'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import Header from '../Header'
import LeftNav from '../LeftNav'

import Failure from '../Failure'
import Loading from '../Loading'
import EmptyList from '../ListEmptyView'
import GameItem from '../GameItem'

import './index.css'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {gamesList: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const JWTToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`

    const options = {
      headers: {
        Authorization: `Bearer ${JWTToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()

      // console.log(data)

      const updateVideos = await data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbNailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      // console.log(updateVideos)
      this.setState(
        {gamesList: updateVideos, apiStatus: apiConstants.success},
        this.getVideos,
      )
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderGame = () => {
    const {gamesList} = this.state

    return (
      <div>
        {gamesList.length > 0 ? (
          <ul className="ul-con">
            {gamesList.map(each => (
              <GameItem videoItem={each} key={each.id} />
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    )
  }

  renderGames = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderGame()
      case apiConstants.failure:
        return <Failure />
      case apiConstants.inProgress:
        return <Loading />
      default:
        return null
    }
  }

  render() {
    return (
      <div className="Home-container">
        <Header />
        <div className="body-container">
          <div>
            <LeftNav />
          </div>
          <div className="col-dir">
            <div className="game">
              <div className="bg-dark">
                <SiYoutubegaming />
              </div>
              <h1>Gaming</h1>
            </div>
            <div className="body">{this.renderGames()}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gaming
