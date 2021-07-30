// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onClickButton = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  onClickButton = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const {buttonText} = this.onClickButton()

    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! HappyLearning</p>
        <button className="button1" type="button" onClick="this.onClickButton">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
