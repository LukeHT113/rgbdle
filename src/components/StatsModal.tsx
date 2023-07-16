import { useEffect, useState } from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  statsModalToggle: Function;
}

export default function StatsModal(props: Props) {

  const [winHistory, setWinHistory] = useState<[]>([]);

  useEffect(() => {
    const wh = localStorage.getItem('winHistory');
    if (wh !== null) {
      setWinHistory(JSON.parse(wh));
    }
  }, [])

  function getWinPercentage() {
    if (winHistory.length === 0) {return 0}
    const winPercentage = Math.floor((getTotalWins() / winHistory.length * 100));
    return winPercentage;
  }

  function getTotalWins() {
    const totalWins = winHistory.reduce((partialSum, a) => partialSum + a, 0);
    return totalWins;
  }

  function getCurrentStreak() {
    if (winHistory.length === 0) {return 0}
    const tempWinHistory = [...winHistory];
    let streakCounter = 0;
    while (tempWinHistory[tempWinHistory.length - 1] === 1) {
      streakCounter++;
      tempWinHistory.pop();
    }
    return streakCounter;
  }

  return (
    <div className="modal">
      <button onClick={() => props.statsModalToggle(false)} className="modal-close">
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <h3>Statistics</h3>
      <hr style={{width: '70%'}}></hr>
      <div className="stats-display">
        <p>Win %:</p>
        <p>{getWinPercentage()}%</p>
      </div>
      <div className="stats-display">
        <p>Total Wins:</p>
        <p>{getTotalWins()}</p>
      </div>
      <div className="stats-display">
        <p>Current Streak:</p>
        <p>{getCurrentStreak()}</p>
      </div>
    </div>
  )
}
