// ProfileHeader.tsx
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { LucideFlag, LucideUser, LucideAward, LucideBriefcase } from "lucide-react";
import { Person } from "./types";

interface ProfileHeaderProps {
  person: Person;
  isStaff: boolean;
  profileColor: string;
}

export default function ProfileHeader({ person, isStaff, profileColor }: ProfileHeaderProps) {
  return (
    <div className={`w-full ${profileColor} text-white py-8 mb-8`}>
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={person.image || "/placeholder.svg"}
              alt={person.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <Badge className="mb-2 bg-white text-blue-800">
              {isStaff ? "Staff" : person.team_type === "male" ? "Male Team" : "Female Team"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{person.name}</h1>
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="flex items-center">
                {isStaff ? (
                  <LucideBriefcase className="mr-2 h-5 w-5" />
                ) : (
                  <LucideUser className="mr-2 h-5 w-5" />
                )}
                <span>{person.role}</span>
              </div>
              <div className="flex items-center">
                <LucideFlag className="mr-2 h-5 w-5" />
                <span>{person.country}</span>
              </div>
              <div className="flex items-center">
                <LucideAward className="mr-2 h-5 w-5" />
                <span>{isStaff ? "Coaching Staff" : person.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}