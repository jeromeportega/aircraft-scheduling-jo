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

  // @TODO: Validation for if a flight can be added to the rotation.
  const addFlightToRotation = (flight) => {
    if (rotation.some(rotationItem => flight.id === rotationItem.id)) {
      return;
    }

    setRotation([...rotation, flight]);
  }

  const removeFlightFromRotation = (flight) => {
    setRotation(rotation.filter(rotationItem => flight.id !== rotationItem.id));
  }

  const dataLoaded = () => (
    flights.length > 0 &&
    aircrafts.length > 0 &&
    Object.keys(selectedAircraft).length !== 0
  );

  return (
    <div className="app-container">
      {dataLoaded() &&
        <React.Fragment>
          <ScrollableList itemType='aircraft' items={aircrafts} header='Aircrafts' />
          <ScrollableList itemType='rotation' items={rotation} header={`Rotation ${selectedAircraft.ident}`} onItemClick={removeFlightFromRotation} />
          <ScrollableList itemType='flight' items={flights} header='Flights' onItemClick={addFlightToRotation} />
        </React.Fragment>
      }
    </div>
  );
}

export default App;
