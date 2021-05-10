import { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from './components/Header'
import { Dashboard } from "./components/Dashboard";
import { EntryTimeModal } from "./components/Modal/EntryTimeModal";
import { LaunchBreakModal } from "./components/Modal/LaunchBreakModal";
import { ExitTimeModal } from "./components/Modal/ExitTimeModal";
import { TimeTableProvider } from "./TimeTableContext";

import Modal from 'react-modal'

Modal.setAppElement('#root')

export function App() {
  const [isNewInputTimeModalOpen, setIsNewInputTimeModalOpen] = useState(false);

  function handleOpenNewInputTimeModal() {
    setIsNewInputTimeModalOpen(true);
  }

  function handleCloseNewInputTimeModal() {
    setIsNewInputTimeModalOpen(false);
  }

  const [IsLaunchBreakModal, setIsLaunchBreakModal] = useState(false);

  function handleOpenLaunchBreakModal() {
    setIsLaunchBreakModal(true)
  }

  function handleCloseLaunchBreakModal() {
    setIsLaunchBreakModal(false)
  }

  const [IsExitTimeModal, setIsExitTimeModal] = useState(false);

  function handleOpenExitTimeModal() {
    setIsExitTimeModal(true)
  }

  function handleCloseExitTimeModal() {
    setIsExitTimeModal(false)
  }
  return (
    <TimeTableProvider>
      <Header
        onOpenNewTimeInputModal={handleOpenNewInputTimeModal}
        onLaunchBreakModal={handleOpenLaunchBreakModal}
        onExitTimeModal={handleOpenExitTimeModal}/>
        
      <Dashboard />
      <GlobalStyle />
      <EntryTimeModal
        isOpen={isNewInputTimeModalOpen}
        onRequestClose={handleCloseNewInputTimeModal}
      />
      <LaunchBreakModal 
        isOpen={IsLaunchBreakModal}
        onRequestClose={handleCloseLaunchBreakModal}
      />
      <ExitTimeModal 
        isOpen={IsExitTimeModal}
        onRequestClose={handleCloseExitTimeModal}
      />
    </TimeTableProvider>
  );
}
