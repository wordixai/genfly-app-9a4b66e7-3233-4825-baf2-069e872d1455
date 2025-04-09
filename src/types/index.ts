export interface Job {
  id: string;
  title: string;
  company: string;
  companyId: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote" | "Internship";
  salary?: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  postedAt: string;
  logo: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  website: string;
  location: string;
  industry: string;
  size: string;
  founded: number;
  logo: string;
  coverImage?: string;
}