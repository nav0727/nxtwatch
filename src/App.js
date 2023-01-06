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

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute path="/videos/:id" component={VideoPlay} />
          <ProtectedRoute path="/not-found" component={NotFound} />

          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App
