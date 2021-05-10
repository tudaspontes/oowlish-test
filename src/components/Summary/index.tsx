import { useContext } from "react";
import { TimeTableContext } from "../../TimeTableContext";
import { Container } from "../Summary/styles";

export function Summary() {
  const { timeTables } = useContext(TimeTableContext)

  return (
    <Container>
      <div>
        <header>
          <p>Worked Hours</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-1 w-1" fill="none" viewBox="0 0 24 24" stroke="orange">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </header>
        <strong>40h</strong>
      </div>
      <div>
        <header>
          <p>Expected Work Hours</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-1 w-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </header>
        <strong>120h</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Remaining Work Hours</p>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-1 w-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </header>
        <strong>80h</strong>
      </div>
    </Container>
  )
}