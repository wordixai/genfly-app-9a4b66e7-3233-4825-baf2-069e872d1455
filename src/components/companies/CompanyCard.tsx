import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Company } from "@/types";
import { MapPinIcon } from "lucide-react";

interface CompanyCardProps {
  company: Company;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  return (
    <Link to={`/companies/${company.id}`}>
      <Card className="h-full overflow-hidden transition-all hover:border-primary hover:shadow-md">
        <CardContent className="p-0">
          <div className="h-32 w-full overflow-hidden">
            <img
              src={company.coverImage || "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8fHww"}
              alt={`${company.name} office`}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-md border bg-white p-1">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{company.name}</h3>
                <p className="text-muted-foreground">{company.industry}</p>
                <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPinIcon className="h-4 w-4" />
                  <span>{company.location}</span>
                </div>
              </div>
            </div>
            <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">
              {company.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CompanyCard;