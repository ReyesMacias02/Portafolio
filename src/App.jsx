import { useState } from 'react'
import './App.css'
//export de componentes
import Headers from '../components/Headers/Headers'
import Contents from '../components/secttion/content'
import Skill from '../components/Skills/Skill'
import Portafolios from '../components/Proyects/portafolios'
import Contacts from '../components/Contacts/Contacts'

function App() {


  return (
<div>
      <Headers />
    <Contents />
    <Skill/>
    <Portafolios/>
    <Contacts/>
</div>



  )
}

export default App
