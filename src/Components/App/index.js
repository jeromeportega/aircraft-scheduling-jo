import React from 'react';
import axios from 'axios';
import './App.css';

import ScrollableList from '../ScrollableList';

import { sortByArrivalTime } from '../../utils/general';
import { canAddFlightToRotation } from '../../utils/validation';

const App = () => {
  const [flights, setFlights] = React.useState([]);
  const [aircrafts, setAircrafts] = React.useState([]);
  const [rotation, setRotation] = React.useState([]);
  const [selectedAircraft, setSelectedAircraft] = React.useState({});
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    axios.get('https://infinite-dawn-93085.herokuapp.com/flights').then(response => {
      setFlights(response.data.data);
    });
  }, []);
  
  React.useEffect(() => {
    axios.get('https://infinite-dawn-93085.herokuapp.com/aircrafts').then(response => {
      setAircrafts(response.data.data);
      setSelectedAircraft(response.data.data[0]);
    });
  }, []);

  // @TODO: Add validation to see if flight can be added to rotation.
  const addFlightToRotationClickHandler = (flight) => {
    if (rotation.length < 1) {
      return addFlightToRotation(flight);
    }

    const validationResult = canAddFlightToRotation(rotation, flight);
    if (validationResult.canAddFlight) {
      return addFlightToRotation(flight);
    }

    setErrorMessage(validationResult.error);
    setTimeout(() => setErrorMessage(''), 10000);
  }

  const addFlightToRotation = (flight) => {
    setRotation([...rotation, flight].sort(sortByArrivalTime));
    setFlights(flights.filter(currentFlight => currentFlight.id !== flight.id));
  }

  const removeFlightFromRotation = (flight) => {
    setFlights([...flights, flight]);
    setRotation(rotation.filter(rotationItem => flight.id !== rotationItem.id));
  }

  return (
    <div className="app-container">
      <ScrollableList itemType='aircraft' items={aircrafts} header='Aircrafts' />
      <ScrollableList itemType='rotation' items={rotation} header={`Rotation ${selectedAircraft.ident}`} onItemClick={removeFlightFromRotation} error={errorMessage} />
      <ScrollableList itemType='flight' items={flights} header='Flights' onItemClick={addFlightToRotationClickHandler} />
    </div>
  );
}

export default App;
