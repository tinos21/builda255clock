
import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      break_label: "break",
      session_label: "Sessions",
      breakLength: 5,
      sessionLength: 25, // Represented in minutes
      timer: 25 * 60, // Countdown timer in seconds
      intervalId: null, // Track the timer interval
    };
  }

  // Handle decrement for break length; cannot be lower than 1
  decrementBreak = () => {
    this.setState((prevState) => ({
      breakLength: prevState.breakLength > 1 ? prevState.breakLength - 1 : 1
    }));
  };

  // Handle increment for break length; cannot be higher than 60
  incrementBreak = () => {
    this.setState((prevState) => ({
      breakLength: prevState.breakLength < 60 ? prevState.breakLength + 1 : 60
    }));
  };

  // Handle decrement for session length; cannot be lower than 1 minute
  decrementSession = () => {
    if (this.state.intervalId) return; // Prevent changing session length while timer is running
    this.setState((prevState) => ({
      sessionLength: prevState.sessionLength > 1 ? prevState.sessionLength - 1 : 1,
      timer: (prevState.sessionLength > 1 ? prevState.sessionLength - 1 : 1) * 60,
    }));
  };

  // Handle increment for session length; cannot be higher than 60 minutes
  incrementSession = () => {
    if (this.state.intervalId) return; // Prevent changing session length while timer is running
    this.setState((prevState) => ({
      sessionLength: prevState.sessionLength < 60 ? prevState.sessionLength + 1 : 60,
      timer: (prevState.sessionLength < 60 ? prevState.sessionLength + 1 : 60) * 60,
    }));
  };

  // Reset button should restore initial values
  reset = () => {
    clearInterval(this.state.intervalId); // Clear interval when resetting
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timer: 25 * 60,
      intervalId: null,
    });
    
    const beep = document.getElementById("beep");
    if (beep) {
      beep.pause();
      beep.currentTime = 0;
    }

  };

  formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Control the start/stop timer functionality
  start_stop_timer = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId); // Stop timer
      this.setState({ intervalId: null });
    } else {
      const intervalId = setInterval(() => {
        this.setState((prevState) => {
          if (prevState.timer === 0) {
            
            const beep = document.getElementById("beep"); ///// new audio 
            if (beep) beep.play();  ////// new audio
            
            clearInterval(intervalId); // Stop timer when it reaches 0
            return { intervalId: null };
          }
          return { timer: prevState.timer - 1 }; // Decrease timer every second
        });
      }, 1000); // Decrease session every second
      this.setState({ intervalId });
    }
  };

  render() {
    return (
      <div>
        <h1 className="title">25 + 5 Clock</h1>
        {/* Break control level increase and decrease */}
        <div className="control-break-level">
          <div id="break-label">Break Length</div>
          <button className="btn btn-primary" onClick={this.decrementBreak}>
            <i className="bi bi-arrow-down"></i>
          </button>
          <div className="btn-level" id="break-length">{this.state.breakLength}</div>
          <button className="btn btn-primary" id="break-increment" onClick={this.incrementBreak}>
            <i className="bi bi-arrow-up"></i>
          </button>
        </div>

        {/* Session control level increase and decrease */}
        <div className="session-break-level">
          <div id="session-label">Session Length</div>
          <button className="btn btn-primary" id="session-decrement" onClick={this.decrementSession}>
            <i className="bi bi-arrow-down"></i>
          </button>
          <div className="btn-level" id="session-length">{this.state.sessionLength}</div>
          <button className="btn btn-primary" id="session-increment" onClick={this.incrementSession}>
            <i className="bi bi-arrow-up"></i>
          </button>
        </div>

        {/* Session container */}
        <div id="timer-label">
          <h1>{this.state.session_label}</h1>
          <div id="time-left">{this.formatTime(this.state.timer)}</div>
        </div>
        <div className="timer-control">
          <button id="start_stop" onClick={this.start_stop_timer}>
            Start/Stop
          </button>
          <button id="reset" onClick={this.reset}>
            Reset
          </button>
          {/*Audio beep sound */}
        <audio id="beep" src="https://www.pacdv.com/sounds/interface_sound_effects/beep-9.wav"></audio>
        </div>
      </div>
    );
  }
}

export default Clock;
