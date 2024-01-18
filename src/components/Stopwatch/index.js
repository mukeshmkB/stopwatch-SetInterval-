import {Component} from 'react'
import './index.css'
const initial = {start: false, elapsedSeconds: 0, currentMinutes: 0, disabledBtn:false}

class Stopwatch extends Component {

  state = initial

  clearTimeInterval = () => clearInterval(this.intervalId)

  formatTime = () => {
    const {elapsedSeconds} = this.state
    const seconds = Math.floor(elapsedSeconds % 60)
    const minutes = Math.floor(elapsedSeconds / 60)
    const formatMinutes = minutes > 9 ? `${minutes}` : `0${minutes}`
    const formatSeconds = seconds > 9 ? `${seconds}` : `0${seconds}`
    return `${formatMinutes}:${formatSeconds}`
  }

  incrementSeconds = () => {

    const {elapsedSeconds} = this.state
    this.setState(prevState => ({elapsedSeconds: prevState.elapsedSeconds + 1}))

  }

  onClickStart = () => {

    
    this.intervalId = setInterval(this.incrementSeconds, 1000)

    this.setState({disabledBtn:true})

  }

  onClickStop = () => {
 
    this.clearTimeInterval()
    this.setState({disabledBtn:false})
  }

  onClickReset = () => {
    this.clearTimeInterval()
    this.setState(initial)
  }
  render() {
    const{ disabledBtn} = this.state 
    return (
      <div className="app-container">
        <div className="text-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="controller-container">
            <div className="timer-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="timer-img"
                alt="stopwatch"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="time">{this.formatTime()}</h1>
            <div className="control-container">
              <button className="start-btn" onClick={this.onClickStart} disabled = {disabledBtn}>
                Start
              </button>
              <button className="stop-btn" onClick={this.onClickStop}>
                Stop
              </button>
              <button className="reset-btn" onClick={this.onClickReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
