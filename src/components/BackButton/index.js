import {withRouter} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
import './index.css'

const BackBtn = props => {
  const toPrevious = () => {
    const {history} = props
    history.goBack()
  }

  return (
    <>
      <button
        data-testid="backButton"
        type="button"
        className="back-btn"
        onClick={toPrevious}
      >
        <FaArrowLeft /> Back
      </button>
    </>
  )
}

export default withRouter(BackBtn)
