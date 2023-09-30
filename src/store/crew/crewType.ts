export interface Crew {
  crewId: number;
  leaderName: string;
  crewName: string;
  tags: string[];
  type: boolean;
  cost: boolean;
  introduction: string;
  headcount: number;
  capacity: number;
  thumbnail: string | null;
}
