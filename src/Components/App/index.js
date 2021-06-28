import React from 'react';
import axios from 'axios';
import './App.css';

import ScrollableList from '../ScrollableList';

const App = () => {
  const [flights, setFlights] = React.useState([]);
  const [aircrafts, setAircrafts] = React.useState([]);
  const [rotation, setRotation] = React.useState([]);
  const [selectedAircraft, setSelectedAircraft] = React.useState({});

  React.useEffect(() => {
    axios.get('https://infinite-dawn-93085.herokuapp.com/flights').then(response => {
      console.log(response.data.data);
      setFlights(response.data.data);
    });
  }, []);
  
  React.useEffect(() => {
    axios.get('https://infinite-dawn-93085.herokuapp.com/aircrafts').then(response => {
      console.log(response);
      setAircrafts(response.data.data);
      setSelectedAircraft(response.data.data[0]);
    });
  }, []);

  const addFlightToRotation = (flight) => {
    setRotation([...rotation, flight]);
  }

  return (
    <div className="app-container">
      <ScrollableList itemType='aircraft' items={aircrafts} header='Aircrafts' />
      <ScrollableList itemType='aircraft' items={rotation} header={`Rotation ${selectedAircraft.ident}`} />
      <ScrollableList itemType='flight' items={flights} header='Flights' onItemClick={addFlightToRotation} />
    </div>
  );
}

export default App;
