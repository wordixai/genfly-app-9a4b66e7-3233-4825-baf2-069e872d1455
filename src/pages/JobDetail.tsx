import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/layout/Layout";
import { jobs } from "@/data/jobs";
import { CalendarIcon, MapPinIcon, BriefcaseIcon, ExternalLinkIcon, ArrowLeftIcon } from "lucide-react";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobs.find((j) => j.id === id);

  if (!job) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-2xl font-bold">Job Not Found</h1>
            <p className="mt-4 text-muted-foreground">
              The job you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild className="mt-6">
              <Link to="/">Back to Jobs</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <Link
          to="/"
          className="mb-6 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          <ArrowLeftIcon className="mr-2 h-4 w-4" />
          Back to Jobs
        </Link>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-md">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold">{job.title}</h1>
                  <Link
                    to={`/companies/${job.companyId}`}
                    className="text-lg hover:text-primary"
                  >
                    {job.company}
                  </Link>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BriefcaseIcon className="h-4 w-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="h-4 w-4" />
                      <span>Posted {new Date(job.postedAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold">Job Description</h2>
                  <p className="mt-2 text-muted-foreground">{job.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold">Requirements</h2>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    {job.requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-semibold">Responsibilities</h2>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Job Overview</h2>
              <Separator className="my-4" />
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Job Type
                  </dt>
                  <dd className="mt-1">
                    <Badge variant={job.type === "Remote" ? "success" : "default"}>
                      {job.type}
                    </Badge>
                  </dd>
                </div>
                {job.salary && (
                  <div>
                    <dt className="text-sm font-medium text-muted-foreground">
                      Salary Range
                    </dt>
                    <dd className="mt-1 font-medium">{job.salary}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Location
                  </dt>
                  <dd className="mt-1">{job.location}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">
                    Posted Date
                  </dt>
                  <dd className="mt-1">
                    {new Date(job.postedAt).toLocaleDateString()}
                  </dd>
                </div>
              </dl>
              <Separator className="my-4" />
              <Button className="w-full">Apply Now</Button>
              <Button
                variant="outline"
                className="mt-3 w-full"
                onClick={() => window.print()}
              >
                Save Job
              </Button>
            </div>

            <div className="mt-6 rounded-lg border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Company Information</h2>
              <Separator className="my-4" />
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-md">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{job.company}</h3>
                  <Link
                    to={`/companies/${job.companyId}`}
                    className="mt-1 inline-flex items-center text-sm text-primary hover:underline"
                  >
                    View Company Profile
                    <ExternalLinkIcon className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobDetail;