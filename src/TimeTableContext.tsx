import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface TimeTable {
  id: number;
  day: string;
  entry: string;
  launchbreak: number;
  exit: string;
  worked: number;
}

type TimeTableInput = Pick<TimeTable, 'entry'>;

interface TimeTableProviderProps {
  children: ReactNode;
}

interface timeTablesContextData {
  timeTables: TimeTable[];
  createTimeTable: (timeTable: TimeTableInput) => void;
}

export const TimeTableContext = createContext<timeTablesContextData>(
  {} as timeTablesContextData
)

export function TimeTableProvider({ children }: TimeTableProviderProps) {

const [timeTables, setTimeTables] = useState<TimeTable[]>([])

  useEffect(() => {
    api.get('timetable')
    .then(response => setTimeTables(response.data.timetables))
  }, []);

  function createTimeTable (timeTable: TimeTableInput) {
    api.post('/timetable', timeTable)
  }

  return (
    <TimeTableContext.Provider value={{timeTables, createTimeTable}}>
      {children}
    </TimeTableContext.Provider>
  );
}