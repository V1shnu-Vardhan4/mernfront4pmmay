import React from 'react'

const JobCard = ({job}) => {
  return (
    <div className=' job-card container p-5'>
        <h3>{job.title}</h3>
        <p><strong>Exp:</strong>{job.experience}</p>
        <p><strong>Location:</strong>{job.location}</p>
        <p><strong>Team:</strong>{job.team}</p>
        <p><strong>JobType:</strong>{job.jobtype}</p>
        <button className='apply-btn'>Apply</button>
      
    </div>
  )
}

export default JobCard
