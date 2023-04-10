// import React, { useState, useEffect } from 'react';
// import './App.css';
// import data from './assets/albums.json'
// import { Nav, Album, Bio } from './components';


// export default function App() {
//   const [bio, setBio] = useState("Sir Elton Hercules John CH CBE is an English singer, songwriter, pianist, and composer. He has worked with lyricist Bernie Taupin since 1967; they have collaborated on more than 30 albums. John has sold more than 300 million records, making him one of the best-selling music artists in the world.");
//   const [albums, setAlbums] = useState(data);

//   return (
//     <div>
//       <Nav />
//       <Bio bio={bio} />
//       <Album albums={albums} />
//       {/* <Lyrics/> */}
//     </div>
//   );
// }


import { Nav } from './components';
import { Home, About, Albums } from './pages';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h1>Not found</h1>} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
