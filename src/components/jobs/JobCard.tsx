import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Job } from "@/types";
import { CalendarIcon, MapPinIcon } from "lucide-react";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Link to={`/jobs/${job.id}`}>
      <Card className="h-full overflow-hidden transition-all hover:border-primary hover:shadow-md">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-md">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{job.title}</h3>
              <p className="text-muted-foreground">{job.company}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPinIcon className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  <span>Posted {new Date(job.postedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t bg-muted/50 px-6 py-3">
          <Badge variant={job.type === "Remote" ? "success" : "default"}>
            {job.type}
          </Badge>
          {job.salary && <span className="text-sm font-medium">{job.salary}</span>}
        </CardFooter>
      </Card>
    </Link>
  );
};

export default JobCard;