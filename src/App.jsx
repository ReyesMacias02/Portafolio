import { useState } from 'react'
import './App.css'
//export de componentes
import Headers from '../components/Headers/Headers'
import Contents from '../components/secttion/content'
import Skill from '../components/Skills/Skill'

function App() {


  return (
<div>
      <Headers />
    <Contents />
    <Skill/>
</div>



  )
}

export default App
