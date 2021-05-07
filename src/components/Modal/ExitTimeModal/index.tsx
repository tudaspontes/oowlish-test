import { Container } from './styles'
import Modal from "react-modal";
import closeImg from '../../../assets/close.svg'

interface ExitTimeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ExitTimeModal({isOpen, onRequestClose}:ExitTimeModalProps) {
  return(
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Close button" />
      </button>

      <Container>
        <h2>Register Time</h2>

        <input
          type="time" id="exit-time"
          placeholder="exit time"
        />

        <button type="submit">Register</button>
      
      </Container>
    </Modal>
  );
}