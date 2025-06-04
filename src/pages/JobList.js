
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import JobCard from './JobCard'

const JobList = () => {
  const [jobs, setJobs] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])
  const [filters, setFilters] = useState({ title: '', location: '' })
  const [searchClicked, setSearchClicked] = useState(false)

  useEffect(() => {
    axios
      .get('https://mernback4pm.onrender.com/job')
      .then((res) => {
        setJobs(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleSearch = () => {
    setSearchClicked(true)
    const result = jobs.filter((job) => {
      const titleMatch = filters.title ? job.title.toLowerCase().trim() === filters.title.toLowerCase().trim() : true
      const locationMatch = filters.location ? job.location.toLowerCase().trim() === filters.location.toLowerCase().trim() : true
      return titleMatch && locationMatch
    })
    setFilteredJobs(result)
  }

  return (
    <div className='jl container' style={{height:'auto'}}>
      <h1 style={{ textAlign: 'center', color: 'green' }}>Dream it. Do it</h1>

      <div>
        <input type='search' placeholder='Search by Job Title, Location, Team' style={{ width: '1080px', height: '60px' }}/>
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

      <button onClick={handleSearch} style={{width: '1080px',height: '46px',borderRadius: '30px',background: '#004225',color: 'white',textAlign: 'center',}}>Search</button>

      {searchClicked && filteredJobs.length === 0 && (
        <p>Nothing open in this role at the moment. <span style={{color:'green'}}>Check out other opportunities!</span></p>
      )}

      {(searchClicked ? filteredJobs : jobs).map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  )
}

export default JobList

