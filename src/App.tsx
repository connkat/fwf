import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './components/header';
import HomePage from './pages/homePage'

import song from "./music/song.mp3";

import './App.css';

function App() {
  
  const [audio, setAudio] = useState( new Audio(song) )
  const [isPartyMode, setIsPartyMode] = useState(false);

  const handlePartyModeToggle = (checked: boolean): boolean => {
    if (checked) {
      audio.play();
      setIsPartyMode(true);
    } else {
      audio.pause();
      console.log("!!!!!!!")
      setIsPartyMode(false);
    }

    return checked;
  };


  return (
    <div className={isPartyMode ? 'App blink-bg' : 'App'}>
    <Router>
      <Header partyModeToggleHandler={handlePartyModeToggle} />
      <Container className="Content">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Container>
    </Router>
  </div>
  );
}

export default App;
