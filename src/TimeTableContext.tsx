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

interface TimeTableProviderProps {
  children: ReactNode;
}

export const TimeTableContext = createContext<TimeTable[]>([])

export function TimeTableProvider({ children }: TimeTableProviderProps) {

const [timeTables, setTimeTables] = useState<TimeTable[]>([])

  useEffect(() => {
    api.get('timetable')
    .then(response => setTimeTables(response.data.timetables))
  }, []);

  return (
    <TimeTableContext.Provider value={timeTables}>
      {children}
    </TimeTableContext.Provider>
  );
}