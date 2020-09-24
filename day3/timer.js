import React from 'react'
import Sound from 'react-sound';

class Timer extends React.Component {
  state = {
    value: 30
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(count => ({ value: count.value-- }))
      if (this.state.value === 0) {
        alert("Timer Stop")
        clearInterval(this.interval)
         this.playAudio();
        }

    }, 1000)

  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
   

    const { value } = this.state
    return (
      
      <div>
        <h1>Timer</h1>
        <div>
          {value}
        </div>
        <audio className="audio-element">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
      </div>
    );
  }
}
export default Timer