import { faChartSimple, faCircleQuestion, faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface Props {
  unfocus: boolean;
  statsModalToggle: Function;
  helpModalToggle: Function;
  settingsModalToggle: Function;
}

export default function Nav(props: Props) {

  return (
    <div className={'nav' + (props.unfocus ? ' unfocus' : '')}>
      <div className="nav-container">
        <div style={{justifyContent: "flex-start"}} className="nav-section">
          <button disabled={props.unfocus} className="nav-button" onClick={() => props.settingsModalToggle(true)}><FontAwesomeIcon icon={faGear} /></button>
        </div>
        <h1 className="nav-title">
          <span style={{color: 'rgb(255, 50, 50)'}}>R</span>
          <span style={{color: 'rgb(70, 255, 50)'}}>G</span>
          <span style={{color: 'rgb(50, 70, 255)'}}>B</span>dle
        </h1>
        <div className="nav-section">
          <button disabled={props.unfocus} className="nav-button" onClick={() => props.helpModalToggle(true)}><FontAwesomeIcon icon={faCircleQuestion} /></button>
          <button disabled={props.unfocus} className="nav-button" onClick={() => props.statsModalToggle(true)}><FontAwesomeIcon icon={faChartSimple} /></button>
        </div>
      </div>
    </div>
  )
}
