import React from 'react';

function Searchbar({ filters, setFilters, onSearch }) {
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="flex flex-wrap gap-4 items-center justify-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 mx-auto mt-10 max-w-5xl">
      <select name="title" value={filters.title} onChange={handleChange} className="w-64 py-3 pl-4 font-semibold text-gray-700 bg-white/70 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 hover:bg-white/90">
        <option value="">Job role</option>
        <option value="iOS Developer">iOS Developer</option>
        <option value="Android Developer">Android Developer</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Developer Advocate">Developer Advocate</option>
      </select>

      <select name="type" value={filters.type} onChange={handleChange} className="w-64 py-3 pl-4 font-semibold text-gray-700 bg-white/70 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 hover:bg-white/90">
        <option value="">Job Type</option>
        <option value="Full Time">Full Time</option>
        <option value="Part Time">Part Time</option>
        <option value="Contract">Contract</option>
      </select>

      <select name="location" value={filters.location} onChange={handleChange} className="w-64 py-3 pl-4 font-semibold text-gray-700 bg-white/70 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 hover:bg-white/90">
        <option value="">Location</option>
        <option value="Remote">Remote</option>
        <option value="In-Office">In-Office</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select name="experience" value={filters.experience} onChange={handleChange} className="w-64 py-3 pl-4 font-semibold text-gray-700 bg-white/70 rounded-xl border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200 hover:bg-white/90">
        <option value="">Experience</option>
        <option value="Fresher">Fresher</option>
        <option value="Junior Level">Junior Level</option>
        <option value="Mid Level">Mid Level</option>
        <option value="Senior Level">Senior Level</option>
      </select>

      <button onClick={onSearch} className="w-40 py-3 px-6 font-semibold text-white bg-purple-600 rounded-xl shadow-lg hover:bg-purple-700 focus:bg-purple-800 transition duration-200 border border-purple-300 focus:outline-none focus:ring-4 focus:ring-purple-300/50 ring-offset-2">
        Search
      </button>
    </div>
  );
}

export default Searchbar;
