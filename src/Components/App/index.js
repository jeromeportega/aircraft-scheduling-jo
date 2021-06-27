import React from 'react';
import axios from 'axios';
import './App.css';

import ScrollableList from '../ScrollableList';

const App = () => {
  const [flights, setFlights] = React.useState([]);
  const [aircraft, setAircraft] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://infinite-dawn-93085.herokuapp.com/flights').then(response => {
      console.log(response);
      setFlights(response.data.data);
    });
    axios.get('https://infinite-dawn-93085.herokuapp.com/aircrafts').then(response => {
      console.log(response);
      setAircraft(response.data.data);
    });
  }, []);

  return (
    <div className="app-container">
      <ScrollableList itemType='aircraft' items={aircraft} />
      <ScrollableList itemType='flight' items={flights} />
    </div>
  );
}

export default App;
