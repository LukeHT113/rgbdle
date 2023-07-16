import { faArrowDown, faArrowUp, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  helpModalToggle: Function;
}

export default function EndModal(props: Props) {

  return (
    <div className="modal">
      <button onClick={() => props.helpModalToggle(false)} className="modal-close">
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <h3 className="htp-title">How to Play!</h3>
      <p className="htp-p">
        Guess the RGB color in 6 tries. Each value will be between 0 & 255, inclusive.
        The color of the tiles will change depending on how close your guess is.
      </p>
      <p className="htp-p">
        Each guess will also give you a visualization of the color represented by the values that 
        you guessed & an arrow indicating if the target value is higher or lower than your guess.
      </p>
      <h3 className="htp-title">Examples</h3>
      <div className="htp-example-container">
        <div className="htp-example">
          <FontAwesomeIcon className="example-arrow-up" icon={faArrowUp} />
          83
        </div>
        <p className="htp-p">The target value is <b>greater than 83</b> by up to <b>50</b>.</p>
      </div>
      <div className="htp-example-container">
        <div style={{background: 'var(--color-close)', borderColor: 'var(--color-close)'}} className="htp-example">
          <FontAwesomeIcon className="example-arrow-down" icon={faArrowDown} />
          112
        </div>
        <p className="htp-p">The target value is <b>less than 112</b> by up to <b>10</b>.</p>
      </div>
      <div className="htp-example-container">
        <div style={{background: 'var(--color-correct)', borderColor: 'var(--color-correct)'}} className="htp-example">
          102
        </div>
        <p className="htp-p">The target value is <b>correct</b> (102).</p>
      </div>
    </div>
  )
}