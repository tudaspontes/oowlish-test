import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header'
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";

Modal.setAppElement('#root')

export function App() {
  const [isNewInputTimeModalOpen, setIsNewInputTimeModalOpen] = useState(false);

  function handleOpenNewInputTimeModal() {
    setIsNewInputTimeModalOpen(true);
  }

  function handleCloseNewInputTimeModal() {
    setIsNewInputTimeModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTimeInputModal={handleOpenNewInputTimeModal}/>
      <Dashboard />
      <GlobalStyle />
      <Modal
        isOpen={isNewInputTimeModalOpen}
        onRequestClose={handleCloseNewInputTimeModal}
      >
          <h2>Register Time</h2>
      </Modal>
    </>
  );
}
