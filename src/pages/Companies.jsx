function Companies() {
    const username = localStorage.getItem('username') || 'Guest';
    const companies = [
      { name: "TechNova", desc: "Innovating the future of web and mobile apps." },
      { name: "InsightX", desc: "Data-driven decisions for smarter businesses." },
      { name: "CodeWorks", desc: "Backend brilliance and scalable systems." },
      { name: "DataSphere", desc: "Analytics and AI for enterprise growth." },
      { name: "PixelForge", desc: "Design-first digital experiences." },
      { name: "SkyNet", desc: "Cloud infrastructure and DevOps excellence." },
      { name: "BuildFlow", desc: "Streamlining software delivery pipelines." },
      { name: "NeuralNet Labs", desc: "AI research and machine learning innovation." }
    ];
  
    return (
      <main className="companies-section">
        <h2>Top Companies Hiring</h2>
        <p className="welcome-msg">Welcome, <span>{username}</span>!</p>
        <div className="company-list">
          {companies.map((c, i) => (
            <div className="company-card" key={i}>
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
  
  export default Companies;