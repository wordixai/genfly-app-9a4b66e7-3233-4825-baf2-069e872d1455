import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

interface JobFilterProps {
  onFilter: (filters: {
    search: string;
    location: string;
    type: string;
  }) => void;
}

const JobFilter = ({ onFilter }: JobFilterProps) => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ search, location, type });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-0 md:flex md:gap-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Job title or keyword"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>
      <div className="flex-1">
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger>
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-locations">All Locations</SelectItem>
            <SelectItem value="San Francisco, CA">San Francisco, CA</SelectItem>
            <SelectItem value="New York, NY">New York, NY</SelectItem>
            <SelectItem value="Remote">Remote</SelectItem>
            <SelectItem value="Austin, TX">Austin, TX</SelectItem>
            <SelectItem value="Chicago, IL">Chicago, IL</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex-1">
        <Select value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue placeholder="Job Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-types">All Types</SelectItem>
            <SelectItem value="Full-time">Full-time</SelectItem>
            <SelectItem value="Part-time">Part-time</SelectItem>
            <SelectItem value="Contract">Contract</SelectItem>
            <SelectItem value="Remote">Remote</SelectItem>
            <SelectItem value="Internship">Internship</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Search Jobs</Button>
    </form>
  );
};

export default JobFilter;