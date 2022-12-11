import React from 'react'

function DataImage({title, description, collaborators, link,picture}) {
  return (
    <div>
         <div className='project-image-data' style={{display:"flex"}}>
        <div className='text-project2'>
       <h2>{title}</h2>
       <h3>Collaborators:{collaborators}</h3>
       <p>{description}</p>
       <a href={link}>Visite:{title}</a>
        </div>
        <div>
            <img src={picture} alt="" />
        </div>
    </div>

    </div>
  )
}

export default DataImage