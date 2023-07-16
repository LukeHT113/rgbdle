import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  arrowHints: boolean;
  colorHints: boolean;
  arrowHintsToggle: Function;
  colorHintsToggle: Function;
  settingsModalToggle: Function;
}

export default function EndModal(props: Props) {

  return (
    <div className="modal settings-modal">
      <button onClick={() => props.settingsModalToggle(false)} className="modal-close">
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <h3 className="settings-title">Settings</h3>
      <label className="settings-toggle">
        Arrow Hints?
        <input className="settings-checkbox" type="checkbox" defaultChecked={props.arrowHints} onClick={() => props.arrowHintsToggle()} />
      </label>
      <label className="settings-toggle">
        Color Hints?
        <input className="settings-checkbox" type="checkbox" defaultChecked={props.colorHints} onClick={() => props.colorHintsToggle()} />
      </label>
    </div>
  )
}