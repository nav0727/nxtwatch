import './index.css'

const EmptyList = () => (
  <div className="empty-list-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
      alt="no videos"
      className="empty-image"
    />

    <h1>No Search results found</h1>
    <p>Try different key words or remove search filter</p>
    <button type="button">Retry</button>
  </div>
)
export default EmptyList
