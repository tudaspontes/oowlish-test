import { Container } from './styles'
import Modal from "react-modal";
import closeImg from '../../../assets/close.svg'

interface EntryTimeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function EntryTimeModal({isOpen, onRequestClose}:EntryTimeModalProps) {
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
        <h2>Register Entry Time</h2>

        <input
          type="time" id="entry-time"
        />

        <button type="submit">Register</button>
      
      </Container>
    </Modal>
  );
}