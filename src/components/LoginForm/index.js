import {Component} from 'react'

import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isShow: true,
    errorStatus: false,
    errorMsg: '',
  }

  onChangeUser = event => {
    this.setState({username: event.target.value})
  }

  onChangePass = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheck = () => {
    this.setState(prev => ({isShow: !prev.isShow}))
  }

  onSuccessLog = JWTToken => {
    const {history} = this.props
    Cookies.set('jwt_token', JWTToken, 30, {expires: 30, path: '/'})
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({errorStatus: true, errorMsg})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    // console.log(userDetails)

    const apiUrl = `https://apis.ccbp.in/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response.ok === true) {
      // console.log(data.jwt_token)
      this.onSuccessLog(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  renderLogin = () => {
    const {isShow} = this.state
    return (
      <div className="login">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch"
          className="nxt-login"
        />
        <form onSubmit={this.onLogin}>
          <div className="col">
            <label htmlFor="user">USERNAME</label>
            <input
              type="text"
              placeholder="Username"
              onChange={this.onChangeUser}
            />
          </div>

          <div className="col">
            <label htmlFor="pass">PASSWORD</label>
            <input
              type={isShow ? 'password' : 'text'}
              placeholder="Password"
              onChange={this.onChangePass}
            />
          </div>
          <div>
            <input type="checkbox" id="show" onChange={this.onChangeCheck} />
            <label htmlFor="show">Show Password</label>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    )
  }

  render() {
    const {errorMsg, errorStatus} = this.state
    return (
      <div className="login-bg">
        {this.renderLogin()}
        {errorStatus && <p>* {errorMsg}</p>}
      </div>
    )
  }
}

export default LoginForm
