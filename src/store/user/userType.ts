import { Crew } from "../crew/crewType";

export interface User {
  userId: string;
  name: string;
  join_crew: Crew[];
  preference_crew: Crew[];
}
