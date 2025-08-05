import React, { useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import Header from './components/Header/Header';
import Searchbar from './components/SearchBar/Searchbar';
import Jobcard from './components/JobCard/Jobcard';
import jobData from './JobDummyData';

const App = () => {
  const [filters, setFilters] = useState({
    title: '',
    type: '',
    location: '',
    experience: ''
  });

  const [filteredJobs, setFilteredJobs] = useState(jobData);

  const handleSearch = () => {
    const filtered = jobData.filter(job => {
      return (
        (!filters.title || job.title === filters.title) &&
        (!filters.type || job.type === filters.type) &&
        (!filters.location || job.location === filters.location) &&
        (!filters.experience || job.experience === filters.experience)
      );
    });
    setFilteredJobs(filtered);
  };

  return (
    <div>
      <Navbar />
      <Header />
      <Searchbar filters={filters} setFilters={setFilters} onSearch={handleSearch} />
      {filteredJobs.map((job) => (
        <Jobcard key={job.id} {...job} />
      ))}
    </div>
  );
};

export default App;
