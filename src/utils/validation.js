export const canAddFlightToRotation = (rotation, flight) => {
  let validationResult = {
    canAddFlight: false,
    error: ''
  }

  // Minimum turnaround time is 20 minutes, converted to seconds for calculation.
  const turnaroundTime = 60 * 20;

  for(let i = 0; i < rotation.length; i++) {
    // First entry in array, only check origin and departure.
    if (i === 0) {
      if (flight.destination === rotation[i].origin) {
        if (flight.arrivaltime + turnaroundTime < rotation[i].departuretime) {
          validationResult.canAddFlight = true;
          break;
        } else {
          validationResult.error = 'There is not enough time between flights, or the flight times overlap.';
        }
      } else {
        validationResult.error = 'The destination of the selected flight, and the origin of the next flight in the rotation do not match.';
      }
    }

    // Middle of array, check both previous and current flight for compatibility.
    // I wish I had time to make this validation look much less like the right side of a pine tree.
    if (i > 0 && i < rotation.length - 1) {
      if (flight.origin === rotation[i - 1].destination) {
        if (flight.destination === rotation[i].origin) {
          if (flight.departuretime > rotation[i - 1].arrivaltime + turnaroundTime) {
            if (flight.arrivaltime + turnaroundTime < rotation[i].departuretime) {
              validationResult.canAddFlight = true;
              break;
            } else {
              validationResult.error = 'There is not enough time between flights, or the flight times overlap.';
            }
          } else {
            validationResult.error = 'There is not enough time between flights, or the flight times overlap.';
          }
        } else {
          validationResult.error = 'The destination of the selected flight, and the origin of the next flight in the rotation do not match.';
        }
      } else {
        validationResult.error = 'The origin of the selected flight, and the destination of the previous flight in the rotation do not match.';
      }
    }

    // Last entry in array if we haven't figured it out already.
    if (flight.origin === rotation[i].destination) {
      if (flight.departuretime > rotation[i].arrivaltime + turnaroundTime) {
        validationResult.canAddFlight = true;
      } else {
        validationResult.error = 'There is not enough time between flights, or the flight times overlap.';
      }
    } else {
      validationResult.error = 'The origin of the selected flight, and the destination of the previous flight in the rotation do not match.';
    }
  }

  return validationResult;
}
