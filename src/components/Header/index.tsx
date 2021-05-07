import logoImg from '../../assets/logo.png'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTimeInputModal: () => void;
  onLaunchBreakModal: () => void;
  onExitTimeModal: () => void;
}

export function Header({onOpenNewTimeInputModal, onLaunchBreakModal, onExitTimeModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <button type="button" onClick={onOpenNewTimeInputModal}>
          Entry time
        </button>
        <button type="button" onClick={onLaunchBreakModal}>
          Launch break
        </button>
        <button type="button" onClick={onExitTimeModal}>
          Exit time
        </button>
      </Content>
    </Container>
  )
}