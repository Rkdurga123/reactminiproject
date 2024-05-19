import './index.css'

const Failure = props => {
  const {retry} = props

  const btnClicked = () => {
    retry()
  }

  return (
    <div data-testid="failure-view" className="failure-view">
      <div className="failure-content">
        <img
          src="https://res.cloudinary.com/dgga8cymk/image/upload/v1712921765/1Spotify/alert.png"
          alt="failure view"
          className="failure-icon"
        />
        <p className="failure-text">
          Something went wrong. Please try again later
        </p>
        <button type="button" className="failure-btn" onClick={btnClicked}>
          Try Again
        </button>
      </div>
    </div>
  )
}

export default Failure
