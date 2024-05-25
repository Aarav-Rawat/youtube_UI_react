import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Video from './pages/video/Video'

const App = () => {

  const [menuClicked, setmenuClicked] = useState(true);

  return (
  <>
 <Navbar setmenuClicked={setmenuClicked}/>
 <Routes>
  <Route path="/" element={<Home menuClicked={menuClicked}/>}/>
  <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
 </Routes> 
  </>
  )
}

export default App