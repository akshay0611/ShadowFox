// ProfileBio.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Person } from "./types";

interface ProfileBioProps {
  person: Person;
  isStaff: boolean;
}

export function ProfileBio({ person, isStaff }: ProfileBioProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        {person.bio ? (
          <div className="prose dark:prose-invert max-w-none">
            <p>{person.bio}</p>
          </div>
        ) : (
          <div className="prose dark:prose-invert max-w-none">
            {isStaff ? (
              <StaffBio person={person} />
            ) : (
              <PlayerBio person={person} />
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function PlayerBio({ person }: { person: Person }) {
  return (
    <>
      <p>
        {person.name} is a talented {person.role.toLowerCase()} from {person.country}. 
        With a passion for cricket from a young age, {person.name.split(' ')[0]} has 
        established {person.team_type === 'male' ? 'himself' : 'herself'} as a key player in the 
        Mumbai Indians squad.
      </p>
      <p>
        Known for {getPlayerStrengths(person)}, {person.name.split(' ')[0]} continues to be a fan favorite 
        and a crucial member of the team&apos;s success.
      </p>
      <p>
        Throughout {person.team_type === 'male' ? 'his' : 'her'} career spanning over {person.matches_played} matches,
        {person.name.split(' ')[0]} has contributed significantly to the team&apos;s achievements with
        {person.role?.includes('Batsman') ? ` ${person.runs} runs at an average of ${person.average}.` : 
        person.role?.includes('Bowler') ? ` ${person.wickets} wickets at an impressive strike rate.` : 
        ` both bat and ball as a versatile all-rounder.`}
      </p>
    </>
  );
}

function StaffBio({ person }: { person: Person }) {
  return (
    <>
      <p>
        {person.name} serves as the {person.role.toLowerCase()} for Mumbai Indians, bringing {person.experience} years
        of valuable experience to the team.
      </p>
      <p>
        Originally from {person.country}, {person.name.split(' ')[0]} joined Mumbai Indians in {person.joined_year} after
        successful stints with {person.previous_teams}.
      </p>
      <p>
        Specializing in {person.specialization?.toLowerCase()}, {person.name.split(' ')[0]} has played a crucial role in 
        developing the team&apos;s strategies and enhancing player performance. {person.name.split(' ')[0]}&apos;s expertise has 
        been instrumental in the team&apos;s consistent success in recent tournaments.
      </p>
      <p>
        {person.name.split(' ')[0]} is known for {getStaffStrengths(person.role)} and continues to be a respected figure 
        in the cricket world.
      </p>
    </>
  );
}

function getPlayerStrengths(person: Person): string {
  if (person.role?.includes('Batsman')) return 'powerful batting and consistent run-scoring';
  if (person.role?.includes('Bowler')) return 'precise bowling and wicket-taking abilities';
  if (person.role?.includes('All-rounder')) return 'versatility and match-winning performances';
  return 'exceptional skills';
}

function getStaffStrengths(role?: string): string {
  if (!role) return 'dedication and expertise';
  
  if (role.includes('Coach')) return 'innovative training methods and tactical acumen';
  if (role.includes('Analyst')) return 'data-driven insights and strategic planning';
  if (role.includes('Physio')) return 'injury prevention techniques and rehabilitation programs';
  if (role.includes('Manager')) return 'excellent team management and organizational skills';
  
  return 'dedication and expertise';
}