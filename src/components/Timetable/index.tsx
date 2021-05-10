import { useContext } from "react";
import { TimeTableContext } from "../../TimeTableContext";
import { Container } from "./styles";

export function TimeTable() {
  const {timeTables} = useContext(TimeTableContext)

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Entry time</th>
            <th>Launch break</th>
            <th>Exit time</th>
            <th>Worked time</th>
          </tr>
        </thead>

        <tbody>
          {timeTables.map(timeTable => (
            <tr key={timeTable.id}>
              <td>{new Intl.DateTimeFormat().format(
                new Date(timeTable.day)
                )}
              </td>
              <td className="entry">{new Intl.DateTimeFormat('US-EN', {
                timeStyle: 'medium'
                }).format(
                new Date(timeTable.exit)
                )}
              </td>
              <td>{timeTable.launchbreak} min</td>
              <td>{new Intl.DateTimeFormat('US-EN', {
                timeStyle: 'medium'
                }).format(
                new Date(timeTable.exit)
                )}
              </td>
              <td>{new Intl.DateTimeFormat('US-EN', {
                timeStyle: 'medium'
                }).format(timeTable.worked)
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}