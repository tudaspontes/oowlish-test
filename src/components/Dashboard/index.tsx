import { Summary } from '../Summary'
import { TimeTable } from '../Timetable'
import { Container } from './styles'

export function Dashboard() {
  return(
    <Container>
      <Summary />
      <TimeTable />
    </Container>
  );
}