import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import JobCard from "@/components/jobs/JobCard";
import JobFilter from "@/components/jobs/JobFilter";
import { jobs } from "@/data/jobs";
import { Job } from "@/types";

const Index = () => {
  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    type: "",
  });

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchesSearch =
        !filters.search ||
        job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.company.toLowerCase().includes(filters.search.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.search.toLowerCase());

      const matchesLocation =
        !filters.location || job.location === filters.location;

      const matchesType = !filters.type || job.type === filters.type;

      return matchesSearch && matchesLocation && matchesType;
    });

    setFilteredJobs(filtered);
  }, [filters]);

  const handleFilter = (newFilters: {
    search: string;
    location: string;
    type: string;
  }) => {
    setFilters(newFilters);
  };

  return (
    <Layout>
      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Find Your Dream Job
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Browse thousands of job listings from top companies and find the perfect role for your career.
            </p>
            <div className="mt-8">
              <JobFilter onFilter={handleFilter} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="mb-6 text-2xl font-bold">
            {filteredJobs.length} {filteredJobs.length === 1 ? "Job" : "Jobs"} Available
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          {filteredJobs.length === 0 && (
            <div className="mt-12 text-center">
              <h3 className="text-lg font-medium">No jobs found</h3>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your search filters to find more results.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Index;