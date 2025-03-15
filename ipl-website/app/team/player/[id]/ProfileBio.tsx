// ProfileBio.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Person } from "./types";

interface ProfileBioProps {
  person: Person;
}

export function ProfileBio({ person }: ProfileBioProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        {person.bio ? (
          <div className="prose dark:prose-invert max-w-none">
            <p>{person.bio}</p>
          </div>
        ) : (
          <div className="prose dark:prose-invert max-w-none">
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
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function getPlayerStrengths(person: Person): string {
  if (person.role?.includes('Batsman')) return 'powerful batting and consistent run-scoring';
  if (person.role?.includes('Bowler')) return 'precise bowling and wicket-taking abilities';
  if (person.role?.includes('All-rounder')) return 'versatility and match-winning performances';
  return 'exceptional skills';
}