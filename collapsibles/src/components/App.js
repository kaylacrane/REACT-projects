import React, { useState } from 'react';
import '../stylesheets/App.css';
import clubsFromApi from '../data/clubs.json';
import List from './List';

function App() {
  const [clubs /*setClubs*/] = useState(clubsFromApi);
  return (
    <div>
      <List clubsFromApi={clubs} />
    </div>
  );
}

export default App;
