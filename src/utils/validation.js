export const canAddFlightToRotation = (rotation, flight) => {
  let canAddFlightToRotation = false;

  // Minimum turnaround time is 20 minutes, converted to seconds for calculation.
  const turnaroundTime = 60 * 20;

  for(let i = 0; i < rotation.length; i++) {
    // First entry in array, only check origin and departure.
    if (i === 0) {
      if (
        flight.destination === rotation[i].origin &&
        flight.arrivaltime + turnaroundTime < rotation[i].departuretime
      ) {
        canAddFlightToRotation = true;
        break;
      }
    }

    // Middle of array, check both previous and current flight for compatibility.
    if (i > 0 && i < rotation.length - 1) {
      if (
        flight.origin === rotation[i - 1].destination &&
        flight.destination === rotation[i].origin &&
        flight.departuretime > rotation[i - 1].arrivaltime + turnaroundTime &&
        flight.arrivaltime + turnaroundTime < rotation[i].departuretime
      ) {
        canAddFlightToRotation = true;
        break;
      }
    }

    // Last entry in array if we haven't figured it out already.
    if (flight.origin === rotation[i].destination && flight.departuretime > rotation[i].arrivaltime + turnaroundTime) {
      canAddFlightToRotation = true;
    }
  }

  return canAddFlightToRotation;
}
