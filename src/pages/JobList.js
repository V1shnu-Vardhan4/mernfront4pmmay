import React, { useEffect, useState } from 'react'
import axios from 'axios'

const JobList = () => {
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [filters, setFilters] = useState({ title: '', location: '' })
  const [searchClicked, setSearchClicked] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)

  useEffect(() => {
    axios.get('https://mernback4pm.onrender.com/job')
      .then((res) => {
        setJobs(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleSearch = () => {
    setSearchClicked(true)
    const result = jobs.filter((job) => {
      const titleMatch = filters.title ? job.title.toLowerCase().trim() === filters.title.toLowerCase().trim(): true
      const locationMatch = filters.location ? job.location.toLowerCase().trim() === filters.location.toLowerCase().trim() : true
      return titleMatch && locationMatch
    })
    setFilteredJobs(result)
  }

  const handleApplyClick = (job) => {
    setSelectedJob(job)
  }

  const handleBack = () => {
    setSelectedJob(null)
  }

  // If a job is selected, show its "detail page"
if (selectedJob) {
  return (
    <div className="container p-5 " style={{ fontFamily: 'Arial, sans-serif',maxWidth:'800px',margin:'0 auto',padding:'40px 20px' }}>
      <button  onClick={handleBack} style={{ marginBottom: '20px',background: 'transparent',border: 'none',color: '#004225',fontSize: '16px',cursor: 'pointer'}} >
        ← Back to Job List
      </button>

      <h2 style={{ color: '#004225', fontWeight: 'bold' }}>{selectedJob.title}</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
      <p><strong>Experience:</strong><span style={{ color: 'green' }}>{selectedJob.title}</span></p>
      <p><strong>Location:</strong> <span style={{ color: 'green' }}>{selectedJob.location}</span></p>
      <p><strong>Team:</strong> <span style={{ color: 'green' }}>{selectedJob.team}</span></p>
      <p><strong>Job Type:</strong> <span style={{ color: 'green' }}>{selectedJob.jobtype}</span></p>
      </div>


      <p><strong>Description:</strong> {selectedJob.description}</p>

      <h4 style={{ marginTop: '30px', color: '#004225' }}>Responsibilities:</h4>
      <ul style={{ lineHeight: '1.8' }}>
        {selectedJob.responsibilities.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '90px', marginBottom: '50px' }}>
        <button className='pt-3' style={{background: '#004225',color: 'white',borderRadius: '9px',padding: '10px 42px',fontSize: '16px',cursor: 'pointer'}}>
          Apply
        </button>
      </div>
    </div>
    )
  }

  // Default view: job listing with filters
  return (
    <div className='jl container' style={{ height: 'auto' }}>
      <h1 style={{ textAlign: 'center', color: 'green' }}>Dream it. Do it</h1>

      <div>
        <input type='search' placeholder='Search by Job Title, Location, Team' style={{ width: '1080px', height: '60px' }} />
        <span className='search-icon'>🔍</span>
      </div>

      <h3 style={{ color: 'green' }}>Filter Jobs</h3>

      <div className='filters'>
        <select value={filters.title} onChange={(e) => setFilters({ ...filters, title: e.target.value })} style={{ width: '525px', height: '60px' }}>
          <option value=''>Team</option>
          <option value='Frontend Developer'>Frontend Developer</option>
          <option value='Backend Developer'>Backend Developer</option>
          <option value='Mobile App Developer'>Mobile App Developer</option>
          <option value='AI/ML Engineer'>AI/ML Engineer</option>
          <option value='Content Writer'>Content Writer</option>
          <option value='Graphic Designer'>Graphic Designer</option>
          <option value='Video Editor & Animator'>Video Editor & Animator</option>
          <option value='Social Media Manager'>Social Media Manager</option>
          <option value='Java Developer'>Java Developer</option>
        </select>

        <select value={filters.location} onChange={(e) => setFilters({ ...filters, location: e.target.value })} style={{ width: '525px', height: '60px' }} >
          <option value=''>Location</option>
          <option value='Hyderabad, India'>Hyderabad, India</option>
        </select>
      </div>

      <button onClick={handleSearch} style={{ width: '1080px', height: '46px', borderRadius: '30px', background: '#004225', color: 'white', textAlign: 'center' }}>Search</button>

      {searchClicked && filteredJobs.length === 0 && (
        <p>Nothing open in this role at the moment. <span style={{ color: 'green' }}>Check out other opportunities!</span></p>
      )}

      {(searchClicked ? filteredJobs : jobs).map((job) => (
        <div className='job-card container p-5' key={job._id}>
          <h3>{job.title}</h3>
          <p><strong>Exp:</strong> {job.experience}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Team:</strong> {job.team}</p>
          <p><strong>JobType:</strong> {job.jobtype}</p>
          <button className='apply-btn' onClick={() => handleApplyClick(job)}>Apply</button>
        </div>
      ))}
    </div>
  )
}

export default JobList


