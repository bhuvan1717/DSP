import React from 'react'
import Tabel from '../../components/Tabel/Tabel'

import Searchbar from '../../components/searchbar/Searchbar'
import './Groups.css'
import Button from '../../components/button/Button'
import AddGroup from '../../components/modals/AddGroup'
import Editgroup from '../../components/modals/Editgroup'
import Deletemodal from '../../components/modals/Deletemodal'

const Groups = () => {
  return (
    <div>
      <div className='gbtn d-flex'>
      <Button title="Add Group"/>
      
      </div>
      <Searchbar/>
      <Tabel/>
      {/* <AddGroup/>
      <Editgroup/> */}
      <Deletemodal/>


    </div>
  )
}

export default Groups