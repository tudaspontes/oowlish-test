import logoImg from '../../assets/logo.png'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />
        <button type="button">
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