import React, { useState } from 'react'
import './Projects.css'
import Tabel from '../../components/Tabel/Tabel'
import Searchbar from '../../components/searchbar/Searchbar'
import Button from '../../components/button/Button'
import Addprojectmodal from '../../components/modals/Addprojectmodal'
import Selectusers from '../../components/modals/Selectusers'
const Projects = () => {
  
const [show, setshow] = useState(false)





  return (
    <div>
      <div className="pbtn mx-4">
      <Button 
      title="Add Project"
      onClick={(e)=>setshow(true)}
      
      />
      </div>
      <Searchbar/>
      <Tabel/>
      <Addprojectmodal show={show} setshow={setshow}/>

       
      
    </div>
  )
}

export default Projects