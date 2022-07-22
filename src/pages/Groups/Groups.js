import React,{useState} from 'react'
import Tabel from '../../components/Tabel/Tabel'

import Searchbar from '../../components/searchbar/Searchbar'
import './Groups.css'
import Button from '../../components/button/Button'
import AddGroup from '../../components/modals/AddGroup'
import Editgroup from '../../components/modals/Editgroup'
import Deletemodal from '../../components/modals/Deletemodal'

const Groups = () => {

  const [addgroup, setaddgroup] = useState(false)
  const title = ["Group Id", "Group Name", "Actions"]



  return (
    <div>
      <div className='gbtn d-flex'>
        <Button title="Add Group"
        onClick={(e)=> setaddgroup(true) }
        
        />

      </div>
      <Searchbar />
      <Tabel title={title}  />
      <AddGroup addgroup={addgroup} setaddgroup={setaddgroup} />
     {/*  <Editgroup/> */}
     {/*  <Deletemodal /> */}


    </div>
  )
}

export default Groups