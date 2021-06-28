export const sortByArrivalTime = (a, b) => {
  if (a.arrivaltime < b.arrivaltime) {
    return -1;
  }

  if (a.arrivaltime > b.arrivaltime) {
    return 1;
  }

  return 0;
}