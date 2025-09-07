function JobCard({ title, company, location }) {
    const applyNow = () => alert(`You applied for the ${title} position!`);
  
    return (
      <div className="job-card">
        <h3>{title}</h3>
        <p><strong>Company:</strong> {company}</p>
        <p><strong>Location:</strong> {location}</p>
        <button onClick={applyNow}>Apply Now</button>
      </div>
    );
  }
  
  export default JobCard;