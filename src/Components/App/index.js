import React from 'react';
import axios from 'axios';

const App = () => {
  const [flights, setFlights] = React.useState([]);
  const [aircraft, setAircraft] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://infinite-dawn-93085.herokuapp.com/flights').then(response => {
      console.log(response);
      setFlights(response.data);
    });
    axios.get('https://infinite-dawn-93085.herokuapp.com/aircrafts').then(response => {
      console.log(response);
      setAircraft(response.data);
    });
  }, []);

  return (
    <div>
      Hello World
    </div>
  );
}

export default App;
