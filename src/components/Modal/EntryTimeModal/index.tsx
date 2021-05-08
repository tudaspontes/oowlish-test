import { Container } from './styles'
import Modal from "react-modal";
import closeImg from '../../../assets/close.svg'
import { FormEvent, useState } from 'react';

interface EntryTimeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function EntryTimeModal({isOpen, onRequestClose}:EntryTimeModalProps) {
  const [value, setValue] = useState('0')

  function handleEntryTime(event: FormEvent) {
    event.preventDefault();
  }

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

      <Container onSubmit={handleEntryTime}>
        <h2>Register Entry Time</h2>

        <input
          type="time"
          id="entry-time"
          value={value}
          onChange={event => setValue(event.target.value)}
        />

        <button type="submit">Register</button>
      
      </Container>
    </Modal>
  );
}