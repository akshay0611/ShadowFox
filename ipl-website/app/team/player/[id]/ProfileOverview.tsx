// ProfileOverview.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Person } from "./types";

interface ProfileOverviewProps {
  person: Person;
  isStaff: boolean;
}

export function ProfileOverview({ person, isStaff }: ProfileOverviewProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        {isStaff ? <StaffOverview person={person} /> : <PlayerOverview person={person} />}
      </CardContent>
    </Card>
  );
}

function StaffOverview({ person }: { person: Person }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Background</h3>
        <div className="grid grid-cols-1 gap-4">
          <InfoItem label="Role" value={person.role} />
          <InfoItem label="Specialization" value={person.specialization} />
          <InfoItem label="Nationality" value={person.country} />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Experience</h3>
        <div className="grid grid-cols-1 gap-4">
          <InfoItem label="Years of Experience" value={`${person.experience} years`} />
          <InfoItem label="Joined Mumbai Indians" value={person.joined_year?.toString()} />
          <InfoItem label="Previous Teams" value={person.previous_teams} />
        </div>
      </div>
    </div>
  );
}

function PlayerOverview({ person }: { person: Person }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">Playing Style</h3>
        <div className="grid grid-cols-1 gap-4">
          {person.batting_style && (
            <InfoItem label="Batting Style" value={person.batting_style} />
          )}
          {person.bowling_style && (
            <InfoItem label="Bowling Style" value={person.bowling_style} />
          )}
          <InfoItem label="Role" value={person.role} />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">Career Highlights</h3>
        <div className="grid grid-cols-2 gap-4">
          <InfoItem label="Matches" value={person.matches_played?.toString()} />
          <InfoItem label="Runs" value={person.runs?.toString()} />
          <InfoItem label="Wickets" value={person.wickets?.toString()} />
          <InfoItem label="Average" value={person.average?.toString()} />
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  );
}