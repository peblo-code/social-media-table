import React, { useState,useEffect } from 'react';
import './globals.css';
import Header from './header.js';
import Overview from './overview.js';
import TopCardList from './top-card-list.js';
import Switch from './switch.js';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [checked, setChecked] = useState(false);

  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'
 
  
function changeMedia(mq) {
  setDarkMode(mq.matches);
  setChecked(mq.matches);
}

useEffect(()=> {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener("change", changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
}, [])

  return (
  <main className={mainClass}> 
    <Header>
      <Switch 
        setDarkMode={setDarkMode} 
        checked={checked} 
        setChecked={setChecked}
      />
    </ Header>
    <TopCardList />
    <Overview />
  </main>);
}

export default App;
