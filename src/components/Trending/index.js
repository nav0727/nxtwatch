import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import Header from '../Header'
import LeftNav from '../LeftNav'

import Failure from '../Failure'
import Loading from '../Loading'
import EmptyList from '../ListEmptyView'
import TrendingItem from '../TrendingItem'

import './index.css'
import NxtContext from '../../context/NxtContext'
import {TrendingContainer, TrendingBody} from './stylecomponents'
import {Game, GamingHead} from '../Gaming/styledcomponents'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {trendingList: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const JWTToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`

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

      const updateVideos = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbNailUrl: each.thumbnail_url,
        viewCount: each.view_count,
      }))
      // console.log(updateVideos)
      this.setState(
        {trendingList: updateVideos, apiStatus: apiConstants.success},
        this.getVideos,
      )
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderTrending = () => {
    const {trendingList} = this.state

    return (
      <div>
        {trendingList.length > 0 ? (
          <ul className="trend">
            {trendingList.map(each => (
              <TrendingItem trendingItem={each} key={each.id} />
            ))}
          </ul>
        ) : (
          <EmptyList />
        )}
      </div>
    )
  }

  renderTrend = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderTrending()
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
      <NxtContext.Consumer>
        {value => {
          const {isDark} = value

          return (
            <TrendingContainer isDark={isDark}>
              <Header />
              <div className="body-container">
                <div>
                  <LeftNav />
                </div>
                <div className="tre">
                  <div className="col-dir">
                    <Game isDark={isDark}>
                      <div className="bg-dark">
                        <HiFire />
                      </div>
                      <GamingHead isDark={isDark}>Trending</GamingHead>
                    </Game>
                    <TrendingBody isDark={isDark} className="body">
                      {this.renderTrend()}
                    </TrendingBody>
                  </div>
                </div>
              </div>
            </TrendingContainer>
          )
        }}
      </NxtContext.Consumer>
    )
  }
}

export default Trending
