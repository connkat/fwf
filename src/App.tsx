import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Header from './components/header';
import HomePage from './pages/homePage'

import './App.css';

function App() {

  const [audio] = useState(new Audio(`https://uk2.internet-radio.com/proxy/danceradiouk?mp=/stream`));
  const [isPartyMode, setIsPartyMode] = useState(false);

  const handlePartyModeToggle = (checked: boolean): boolean => {
    if (checked) {
      audio.play();
      setIsPartyMode(true);
    } else {
      audio.pause();
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
