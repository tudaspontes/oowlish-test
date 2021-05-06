import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TimeTable() {
  useEffect(() => {
    api.get('timetable')
    .then(response => console.log(response.data))
  }, []);
  
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
          <tr>
            <td>02/05/2021</td>
            <td className="entry">09:00</td>
            <td>40min</td>
            <td>17:00</td>
            <td>07:20</td>
          </tr>
          <tr>
            <td>02/05/2021</td>
            <td>09:00</td>
            <td>40min</td>
            <td className="exit">17:00</td>
            <td>07:20</td>
          </tr>
          <tr>
            <td>02/05/2021</td>
            <td>09:00</td>
            <td>40min</td>
            <td>17:00</td>
            <td>07:20</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}