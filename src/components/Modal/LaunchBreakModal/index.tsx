import { Container } from './styles'
import Modal from "react-modal";
import closeImg from '../../../assets/close.svg'

interface LaunchBreakModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function LaunchBreakModal({isOpen, onRequestClose}:LaunchBreakModalProps) {
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
        <h2>Register Launch Break</h2>

        <input
          type="number"
          placeholder="Minutes"
        />
        
        <button type="submit">Register</button>
      
      </Container>
    </Modal>
  );
}