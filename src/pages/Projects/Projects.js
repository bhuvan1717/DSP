import React from 'react'
import './Projects.css'
import Tabel from '../../components/Tabel/Tabel'
import Searchbar from '../../components/searchbar/Searchbar'
import Button from '../../components/button/Button'
import Addprojectmodal from '../../components/modals/Addprojectmodal'
const Projects = () => {
  return (
    <div>
      <div className="pbtn mx-4">
      <Button title="Add Project"/>
      </div>
      <Searchbar/>
      <Tabel/>
      <Addprojectmodal/>
    </div>
  )
}

export default Projects