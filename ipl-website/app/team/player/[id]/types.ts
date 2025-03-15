// types.ts
export interface Person {
    id: string;
    name: string;
    image: string;
    role: string;
    country: string;
    category: string;
    team_type: string;
    bio?: string;
  
    // Player specific fields
    batting_style?: string;
    bowling_style?: string;
    matches_played?: number;
    runs?: number;
    wickets?: number;
    average?: number;
    strike_rate?: number;
  
    // Staff specific fields
    experience?: number;
    previous_teams?: string;
    joined_year?: number;
    specialization?: string;
  }