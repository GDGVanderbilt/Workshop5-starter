import { useState } from 'react'
import './App.css'

function App() {

  // Calculate end time
  function getEndTime() {
    if (!isRunning) {
      return null;
    }

    const now = new Date();
    const remainingMs = (minutes * 60 + seconds) * 1000;
    const endTime = new Date(now.getTime() + remainingMs);

    return endTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit'
    });
  }




  // Play notification sound
  // const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  // const oscillator = audioContext.createOscillator();
  // const gainNode = audioContext.createGain();

  // oscillator.connect(gainNode);
  // gainNode.connect(audioContext.destination);

  // oscillator.frequency.value = 800; // Frequency in Hz
  // gainNode.gain.value = 0.3; // Volume (0 to 1)

  // oscillator.start();
  // oscillator.stop(audioContext.currentTime + 0.5); // Duration in seconds


  return (
    <>
      <h2>Pomodoro Timer</h2>

      {/* Customize section */}
      <div className="customize-section">
        <button
          className="customize-toggle-btn"
          onClick={() => setShowCustomize(!showCustomize)}
        >
          Customize
        </button>


        {/* Customize form */}
        {showCustomize && (
          <div className="customize-form">
            <h3>Customize Times</h3>
            <form onSubmit={handleCustomizeSubmit}>
              <div className="form-group">
                <label>Pomodoro Duration (minutes)</label>
                <input
                  type="number"
                  min="1"
                  value={customPomodoro}
                  onChange={(e) => setCustomPomodoro(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Break Duration (minutes)</label>
                <input
                  type="number"
                  min="1"
                  value={customBreak}
                  onChange={(e) => setCustomBreak(e.target.value)}
                />
              </div>
              <div className="form-buttons">
                <button type="submit" className="save-btn">Save</button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowCustomize(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );

}

export default App
