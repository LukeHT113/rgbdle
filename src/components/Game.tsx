import { useEffect, useState } from "react"
import colors from "./Colors";
import { faArrowDown, faArrowRightToBracket, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Color = {
  red: number;
  green: number;
  blue: number;
}

interface Props {
  unfocus: boolean;
  arrowHints: boolean;
  colorHints: boolean;
  statsModalToggle: Function;
}

export default function Game(props : Props) {

  const [color, setColor] = useState<Color>({red: 255, green: 255, blue: 255});
  const [inputs, setInputs] = useState(new Array(6).fill('').map(() => new Array(3).fill(undefined)));
  const [outputs, setOutputs] = useState(new Array(6).fill('').map(() => new Array(3).fill(undefined)));
  const [hasWon, setHasWon] = useState(false);
  const [guesses, setGuesses] = useState(0);
  const initialDate = Math.floor(new Date().getTime() / 1000 / 60 / 60 / 24);

  useEffect(() => {
    const newColor = colors[initialDate % colors.length];
    setColor(newColor);
    if (JSON.stringify(initialDate) !== localStorage.getItem('date')) {
      localStorage.setItem('hasWon', 'false')
      document.getElementById('00')?.focus();
      return
    }

    const savedInputs = localStorage.getItem('inputs');
    const savedOutputs = localStorage.getItem('outputs');
    const savedHasWon = localStorage.getItem('hasWon');
    const savedAttempts = localStorage.getItem('attempts');
    if (savedInputs !== null)  setInputs(JSON.parse(savedInputs))
    if (savedOutputs !== null)  setOutputs(JSON.parse(savedOutputs))
    if (savedHasWon === 'true')   {
      setHasWon(true)
      if (savedAttempts !== null)   { 
        setGuesses(JSON.parse(savedAttempts));
        props.statsModalToggle(true);
      }
    }

  }, []);

  function evaluateDifference(difference: number) {
    if (difference > 50) {
      return 'var(--color-wrong)'
    } else if (difference > 10) {
      return 'var(--color-far)'
    } else if (difference > 0) {
      return 'var(--color-close)'
    }
    else {
      return 'var(--color-correct)'
    }
  }
  
  function checkVictory(sumOfDifference: number, attempts: number) {
    if (sumOfDifference === 0 || attempts >= inputs.length) {
      const winHistory = localStorage.getItem('winHistory');
      if (sumOfDifference === 0) {
        setHasWon(true);
        localStorage.setItem('hasWon', JSON.stringify(true));
        if (winHistory !== null) {
          const prevWinHistory: [] = JSON.parse(winHistory);
          const newWinHistory = [...prevWinHistory, 1];
          localStorage.setItem('winHistory', JSON.stringify(newWinHistory));
        } else {
          localStorage.setItem('winHistory', JSON.stringify([1]))
        }
      }
      else {
        localStorage.setItem('hasWon', JSON.stringify(false));
        if (winHistory !== null) {
          const prevWinHistory: [] = JSON.parse(winHistory);
          const newWinHistory = [...prevWinHistory, 0];
          localStorage.setItem('winHistory', JSON.stringify(newWinHistory));
        } else {
          localStorage.setItem('winHistory', JSON.stringify([0]))
        }
      }
      setTimeout(() => {
        props.statsModalToggle(true);
        setGuesses(attempts);
      }, 1000)
      localStorage.setItem('attempts', JSON.stringify(attempts));
      var prevAttemptStats = localStorage.getItem('attemptStats');
      if (prevAttemptStats !== null) {
        prevAttemptStats: [] = JSON.parse(prevAttemptStats);
        const newAttemptStats = [...prevAttemptStats, attempts];
        localStorage.setItem('attemptStats', JSON.stringify(newAttemptStats));
      }
      else {
        localStorage.setItem('attemptStats', JSON.stringify([attempts]))
      }
    }
    return;
  }

  function handleSubmit(e: React.SyntheticEvent, rowIndex: number) {
    e.preventDefault();
    if(
    (!inputs[rowIndex][0] && inputs[rowIndex][0] !== 0) ||
    (!inputs[rowIndex][1] && inputs[rowIndex][1] !== 0) ||
    (!inputs[rowIndex][2] && inputs[rowIndex][2] !== 0)
    ) return
    const difference: Color = {
      red: Math.abs(color.red - inputs[rowIndex][0]),
      green: Math.abs(color.green - inputs[rowIndex][1]),
      blue: Math.abs(color.blue - inputs[rowIndex][2])
    }
    const sumOfDiff = difference.red + difference.green + difference.blue;
    const newOutputs = outputs;
    outputs[rowIndex][0] = evaluateDifference(difference.red);
    outputs[rowIndex][1] = evaluateDifference(difference.green);
    outputs[rowIndex][2] = evaluateDifference(difference.blue);
    setOutputs([...newOutputs]);
    setTimeout(() => {
      if (rowIndex < inputs.length - 1) {
        document.getElementById(`${rowIndex + 1}0`)?.focus();
      }
    }, 0)
    checkVictory(sumOfDiff, rowIndex + 1)
    localStorage.setItem("inputs", JSON.stringify(inputs));
    localStorage.setItem("outputs", JSON.stringify(outputs));
    localStorage.setItem("date", JSON.stringify(initialDate));
  }

  function handleBackspace(e: React.KeyboardEvent<HTMLInputElement>, rowIndex: number, colIndex: number) {
    if (e.code !== 'Backspace') { return }
    else {
      if (colIndex > 0 && (Number.isNaN(inputs[rowIndex][colIndex]) || inputs[rowIndex][colIndex] === undefined || inputs[rowIndex][colIndex] === null) ) {
        document.getElementById(`${rowIndex}${colIndex - 1}`)?.focus();
      }
    }
  }
  
  function handleInputChange(rowIndex: number, colIndex: number, newValue: number) {
    if (newValue.toString().length > 3) {return}
    var newInputs = [...inputs];
    newInputs[rowIndex][colIndex] = newValue;
    setInputs([...newInputs]);
    if (newValue.toString().length >= 3 && !Number.isNaN(newValue)) {
      if (colIndex < inputs[rowIndex].length - 1) {
        document.getElementById(`${rowIndex}${colIndex + 1}`)?.focus();
      }
      else {
        return
      }
    }
  }

  return (
    <div className={'game-container' + (props.unfocus ? ' unfocus' : '')}>
      {guesses > 0 ? <h3>RGB ({color.red}, {color.green}, {color.blue})</h3> : null}
      <div className="color-container" style={{background: `RGB(${color.red}, ${color.green}, ${color.blue})`}}></div>
      <div className="header-row">
        <h2 className="header-value">R</h2>
        <h2 className="header-value">G</h2>
        <h2 className="header-value">B</h2>
        {props.colorHints ? <h2 className="color-hint-label">Color Hints</h2> : null}
      </div>
      <div className="input-grid">
        {inputs.map((row, rowIndex) => (
          <form
            onSubmit={(e) => handleSubmit(e, rowIndex)} 
            className='input-row' 
            key={rowIndex}
          >
          {outputs[rowIndex][0] && props.colorHints ? <div className={hasWon || guesses >= inputs.length ? 'color-hint-post' : 'color-hint'} style={{background: `rgb(${row[0]}, ${row[1]}, ${row[2]}`}}></div> : null}
            {row.map((value: number, colIndex) => (
              <div key={colIndex + 'con'} className="input-container">
                {inputs[rowIndex][colIndex] < Object.values(color)[colIndex] && outputs[rowIndex][colIndex] && props.arrowHints ? <FontAwesomeIcon className="arrow-up" key={colIndex + 'up'} icon={faArrowUp} /> : null}
                <input
                  onKeyDown={(e) => handleBackspace(e, rowIndex, colIndex)}
                  id={`${rowIndex}${colIndex}`}
                  disabled={(rowIndex > 0 ? !outputs[rowIndex -1 ][colIndex] : false) || outputs[rowIndex][colIndex] || hasWon || props.unfocus}
                  style={{background: `${outputs[rowIndex][colIndex]}`, borderColor: `${outputs[rowIndex][colIndex]}`}}
                  type="number"
                  value={value === undefined || Number.isNaN(value) || value === null ? '' : value} 
                  onChange={(e) => handleInputChange(rowIndex, colIndex, parseInt(e.target.value))}
                  className='value-input'
                  min={0}
                  max={255}
                  key={colIndex}
                >
                </input>
                {inputs[rowIndex][colIndex] > Object.values(color)[colIndex] && outputs[rowIndex][colIndex] && props.arrowHints ? <FontAwesomeIcon className="arrow-down" key={colIndex + 'up'} icon={faArrowDown} /> : null}
              </div>
            ))}
            <button
              className="submit-button"
              type="submit" 
              value='submit'
            >
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </button>
          </form>
        ))}
      </div>
    </div>
  )
}