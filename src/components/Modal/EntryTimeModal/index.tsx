import { Container } from './styles'
import Modal from "react-modal";
import closeImg from '../../../assets/close.svg'
import { FormEvent, useState, useContext } from 'react';
import { TimeTableContext } from '../../../TimeTableContext';

interface EntryTimeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function EntryTimeModal({isOpen, onRequestClose}:EntryTimeModalProps) {
  const { createTimeTable } = useContext(TimeTableContext)
  
  const [entry, setEntry] = useState('')

  async function handleEntryTime(event: FormEvent) {
    event.preventDefault();

    await createTimeTable({
      entry
    })

    onRequestClose();
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
          value={entry}
          onChange={event => setEntry(event.target.value)}
        />

        <button type="submit">Register</button>
      
      </Container>
    </Modal>
  );
}