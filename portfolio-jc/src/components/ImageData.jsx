import React from 'react'
import Card from 'react-bootstrap/Card';


function ImageData(props) {
    
    
   const {title, description, collaborators, link,picture} = props
  return (
    <div className='project-image-data' id= "data-image" style={{display:"flex" }}>
        <div>
        <a href={link} target="blank" >
           <img src={picture} alt="" className="grow-image" />
        </a>
           
        </div>
        <div className='text-project2'>
       <h2>{title}</h2>
       <h3>Collaborators:{collaborators}</h3>
       <p>{description}</p>
       <a href={link} target="blank">Visite:{title}</a>
        </div>
    </div>
  )
}

export default ImageData