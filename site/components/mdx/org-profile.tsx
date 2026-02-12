import { Building2, MapPin, Calendar, Users, Globe } from "lucide-react";
import { StageBadge } from "./stage-badge";

interface OrgProfileProps {
  partner: string;
  location: string;
  founded: string;
  headcount: string;
  website: string;
  funding?: string;
  stage: "proposal" | "incubation" | "active";
}

export function OrgProfile({
  partner,
  location,
  founded,
  headcount,
  website,
  stage,
}: OrgProfileProps) {
  return (
    <div className="my-8 p-6 bg-card border border-border/50 rounded-xl">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
            <Building2 className="w-6 h-6 text-muted-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground !mt-0 !mb-0">
              {partner}
            </h3>
          </div>
        </div>
        <StageBadge stage={stage} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-sm text-muted-foreground">{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-sm text-muted-foreground">Founded {founded}</span>
        </div>
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-muted-foreground shrink-0" />
          <span className="text-sm text-muted-foreground">{headcount}</span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-4 h-4 text-muted-foreground shrink-0" />
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            Website
          </a>
        </div>
      </div>
    </div>
  );
}
