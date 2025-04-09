import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/layout/Layout";
import JobCard from "@/components/jobs/JobCard";
import { companies } from "@/data/companies";
import { jobs } from "@/data/jobs";
import { MapPinIcon, GlobeIcon, BuildingIcon, CalendarIcon, ArrowLeftIcon } from "lucide-react";

const CompanyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const company = companies.find((c) => c.id === id);
  const companyJobs = jobs.filter((job) => job.companyId === id);

  if (!company) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-2xl font-bold">Company Not Found</h1>
            <p className="mt-4 text-muted-foreground">
              The company you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild className="mt-6">
              <Link to="/companies">Back to Companies</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="relative h-64 w-full overflow-hidden bg-muted md:h-80">
        <img
          src={company.coverImage || "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlfGVufDB8fDB8fHww"}
          alt={`${company.name} office`}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container py-8">
        <Link
          to="/companies"
          className="mb-6 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Companies
        </Link>

        <div className="relative -mt-20 mb-8 flex items-end">
          <div className="h-24 w-24 overflow-hidden rounded-md border-4 border-background bg-white p-1 md:h-32 md:w-32">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="ml-4 pb-1">
            <h1 className="text-2xl font-bold md:text-3xl">{company.name}</h1>
            <p className="text-muted-foreground">{company.industry}</p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">About {company.name}</h2>
              <Separator className="my-4" />
              <p className="text-muted-foreground">{company.description}</p>

              {companyJobs.length > 0 && (
                <>
                  <h2 className="mt-8 text-xl font-semibold">
                    Open Positions at {company.name}
                  </h2>
                  <Separator className="my-4" />
                  <div className="grid gap-6 md:grid-cols-2">
                    {companyJobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Company Information</h2>
              <Separator className="my-4" />
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Website
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      <GlobeIcon className="mr-1 h-4 w-4" />
                      {company.website.replace(/^https?:\/\//, "")}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Location
                  </dt>
                  <dd className="mt-1 flex items-center">
                    <MapPinIcon className="mr-1 h-4 w-4 text-muted-foreground" />
                    {company.location}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Company Size
                  </dt>
                  <dd className="mt-1 flex items-center">
                    <BuildingIcon className="mr-1 h-4 w-4 text-muted-foreground" />
                    {company.size}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Founded
                  </dt>
                  <dd className="mt-1 flex items-center">
                    <CalendarIcon className="mr-1 h-4 w-4 text-muted-foreground" />
                    {company.founded}
                  </dd>
                </div>
              </dl>
              <Separator className="my-4" />
              <Button className="w-full">Visit Website</Button>
            </div>

            {companyJobs.length > 0 && (
              <div className="mt-6 rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-semibold">
                  {companyJobs.length} Open {companyJobs.length === 1 ? "Position" : "Positions"}
                </h2>
                <Separator className="my-4" />
                <Button asChild variant="outline" className="w-full">
                  <Link to="/">View All Jobs</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompanyDetail;