import logoImg from "../../assets/logo.png";
import { Container, Content } from "./styles";

interface HeaderProps {
  qualAmodalQueEstaAbertaAgora: string;
  onOpenNewTimeInputModal: () => void;
  onLaunchBreakModal: () => void;
  onExitTimeModal: () => void;
}

export function Header({
  qualAmodalQueEstaAbertaAgora,
  onOpenNewTimeInputModal,
  onLaunchBreakModal,
  onExitTimeModal,
}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />

        {qualAmodalQueEstaAbertaAgora === "EntryTime" && (
          <button type="button" onClick={onOpenNewTimeInputModal}>
            Entry time
          </button>
        )}

        {qualAmodalQueEstaAbertaAgora === "LaunchBreak" && (
          <button type="button" onClick={onLaunchBreakModal}>
            Launch break
          </button>
        )}

        {qualAmodalQueEstaAbertaAgora === "ExitTime" && (
          <button type="button" onClick={onExitTimeModal}>
            Exit time
          </button>
        )}

        {qualAmodalQueEstaAbertaAgora === "acabou" && (
          <button disabled type="button" onClick={onExitTimeModal}>
            Exit time
          </button>
        )}
      </Content>
    </Container>
  );
}
