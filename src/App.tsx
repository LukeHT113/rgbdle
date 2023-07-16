import { useState, useEffect } from 'react'
import './App.css'
import StatsModal from './components/StatsModal'
import HelpModal from './components/HelpModal'
import SettingsModal from './components/SettingsModal'
import Game from './components/Game'
import Nav from './components/Nav'

function App() {
  
  const [statsModal, setStatsModal] = useState(false);
  const [helpModal, setHelpModal] = useState(false);
  const [settingsModal, setSettingsModal] = useState(false)
  const [arrowHints, setArrowHints] = useState(true);
  const [colorHints, setColorHints] = useState(true);
  let modalOpen = statsModal || helpModal || settingsModal;

  useEffect(() => {
    const attemptStats = localStorage.getItem('attemptStats');
    if (attemptStats === null)  helpModalToggle(true);

    let arrowHints = localStorage.getItem('arrowHints');
    arrowHints = arrowHints !== null ? JSON.parse(arrowHints) : true;
    if (!arrowHints) {setArrowHints(false)}

    let colorHints = localStorage.getItem('colorHints');
    colorHints = colorHints !== null ? JSON.parse(colorHints) : true;
    if (!colorHints)  setColorHints(false);
  }, [])

  function statsModalToggle(state: boolean) {
    setStatsModal(state);
    if (state) {
      setHelpModal(false);
      setSettingsModal(false);
    }
  }

  function helpModalToggle(state: boolean) {
    setHelpModal(state);
    if (state) {
      setStatsModal(false);
      setSettingsModal(false);
    }
  }

  function settingsModalToggle(state: boolean) {
    setSettingsModal(state);
    if (state) {
      setStatsModal(false);
      setHelpModal(false);
    }
  }

  function arrowHintsToggle() {
    localStorage.setItem('arrowHints', JSON.stringify(!arrowHints))
    setArrowHints(prevState => !prevState);
  }

  function colorHintsToggle() {
    localStorage.setItem('colorHints', JSON.stringify(!colorHints))
    setColorHints(prevState => !prevState);
  }

  return (
    <div className='page'>
      <Nav 
        unfocus={modalOpen}
        settingsModalToggle={settingsModalToggle} 
        statsModalToggle={statsModalToggle} 
        helpModalToggle={helpModalToggle} 
      />
      <Game 
        unfocus={modalOpen}
        arrowHints={arrowHints}
        colorHints={colorHints}
        statsModalToggle={statsModalToggle}
      />
      {statsModal ? <StatsModal statsModalToggle={statsModalToggle} /> : null}
      {helpModal ? <HelpModal helpModalToggle={helpModalToggle} /> : null}
      {settingsModal ? <SettingsModal 
        arrowHints={arrowHints} 
        arrowHintsToggle={arrowHintsToggle} 
        colorHints={colorHints} 
        colorHintsToggle={colorHintsToggle} 
        settingsModalToggle={settingsModalToggle} 
      /> : null}
    </div>
  )
}

export default App
