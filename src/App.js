import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'

import {Component} from 'react'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import LoginForm from './components/LoginForm'
import VideoPlay from './components/VideoPlay'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'
import NxtContext from './context/NxtContext'

class App extends Component {
  state = {isDark: true, savedList: []}

  addToSavedList = item => {
    const {savedList} = this.state
    const videosItems = savedList.find(each => each.id === item.id)

    if (videosItems) {
      this.setState(prev => ({
        savedList: prev.cartList.map(each => {
          if (each.id === videosItems.id) {
            return {...each}
          }
          return each
        }),
      }))
    } else {
      this.setState(prev => ({cartList: [...prev.cartList, item]}))
    }
  }

  toggleTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  render() {
    const {isDark, savedList} = this.state
    console.log(isDark)
    return (
      <BrowserRouter>
        <NxtContext.Provider
          value={{
            isDark,
            toggleTheme: this.toggleTheme,
            addToSavedList: this.addToSavedList,
            savedList,
          }}
        >
          <Switch>
            <Route exact path="/login" component={LoginForm} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute path="/videos/:id" component={VideoPlay} />
            <ProtectedRoute path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </NxtContext.Provider>
      </BrowserRouter>
    )
  }
}
export default App
