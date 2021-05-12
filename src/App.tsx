import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { EntryTimeModal } from "./components/Modal/EntryTimeModal";
import { ExitTimeModal } from "./components/Modal/ExitTimeModal";
import { LaunchBreakModal } from "./components/Modal/LaunchBreakModal";
import { GlobalStyle } from "./styles/global";
import { TimeTableProvider } from "./TimeTableContext";

Modal.setAppElement("#root");

export function App() {
  const [qualAmodalQueEstaAbertaAgora, setQualAmodalQueEstaAbertaAgora] =
    useState("EntryTime");
  const [isNewInputTimeModalOpen, setIsNewInputTimeModalOpen] = useState(false);

  function handleOpenNewInputTimeModal() {
    setIsNewInputTimeModalOpen(true);
  }

  function handleCloseNewInputTimeModal() {
    setIsNewInputTimeModalOpen(false);
    setQualAmodalQueEstaAbertaAgora("LaunchBreak");
  }

  const [IsLaunchBreakModal, setIsLaunchBreakModal] = useState(false);

  function handleOpenLaunchBreakModal() {
    setIsLaunchBreakModal(true);
  }

  function handleCloseLaunchBreakModal() {
    setIsLaunchBreakModal(false);
    setQualAmodalQueEstaAbertaAgora("ExitTime");
  }

  const [IsExitTimeModal, setIsExitTimeModal] = useState(false);

  function handleOpenExitTimeModal() {
    setIsExitTimeModal(true);
  }

  function handleCloseExitTimeModal() {
    setIsExitTimeModal(false);
    setQualAmodalQueEstaAbertaAgora("acabou");
  }
  return (
    <TimeTableProvider>
      <Header
        onOpenNewTimeInputModal={handleOpenNewInputTimeModal}
        onLaunchBreakModal={handleOpenLaunchBreakModal}
        onExitTimeModal={handleOpenExitTimeModal}
        qualAmodalQueEstaAbertaAgora={qualAmodalQueEstaAbertaAgora}
      />

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
