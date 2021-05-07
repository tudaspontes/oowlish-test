import logoImg from '../../assets/logo.png'

import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewTimeInputModal: () => void;
}

export function Header({onOpenNewTimeInputModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <button type="button" onClick={onOpenNewTimeInputModal}>
          Entry time
        </button>
        <button type="button">
          Launch break
        </button>
        <button type="button">
          Exit time
        </button>
      </Content>
    </Container>
  )
}