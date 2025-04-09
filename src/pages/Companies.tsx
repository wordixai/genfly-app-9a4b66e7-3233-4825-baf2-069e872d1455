import Layout from "@/components/layout/Layout";
import CompanyCard from "@/components/companies/CompanyCard";
import { companies } from "@/data/companies";

const Companies = () => {
  return (
    <Layout>
      <section className="bg-muted py-12 md:py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Top Companies Hiring Now
            </h1>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Discover great places to work and explore their open positions
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <h2 className="mb-6 text-2xl font-bold">
            {companies.length} Featured Companies
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Companies;