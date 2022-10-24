import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import Post from './pages/Post/post'
import PosVote from './pages/PosVote/posVote'

function App() {
    return(
      <Router>
          <Routes>
             <Route path="/" element={<Post />} />
             <Route path="/pos-vote" element={<PosVote />}/>
          </Routes>
      </Router>
    )

}

export default App;
