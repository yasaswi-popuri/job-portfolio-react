import { useState } from 'react';
import JobCard from '../components/Jobcard';
import jobs from '../jobs';

function Jobs() {
  const [query, setQuery] = useState('');
  const username = localStorage.getItem('username') || 'Guest';

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(query.toLowerCase()) ||
    job.company.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="job-section">
      <h2>Browse Jobs</h2>
      <p className="welcome-msg">Welcome, <span>{username}</span>!</p>
      <input
        type="text"
        placeholder="Search jobs..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="job-listings">
        {filteredJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </main>
  );
}

export default Jobs;