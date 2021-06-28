import AircraftItem from "../Components/ScrollableList/AircraftItem";
import FlightItem from "../Components/ScrollableList/FlightItem";

export const listItemComponents = {
  aircraft: {
    Component: AircraftItem,
    key: 'ident'
  },
  flight: {
    Component: FlightItem,
    key: 'id',
  }
}