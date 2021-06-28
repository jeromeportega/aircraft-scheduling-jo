import AircraftItem from "../Components/ScrollableList/AircraftItem";
import FlightItem from "../Components/ScrollableList/FlightItem";
import RotationItem from "../Components/ScrollableList/RotationItem";

export const listItemComponents = {
  aircraft: {
    Component: AircraftItem,
    key: 'ident'
  },
  flight: {
    Component: FlightItem,
    key: 'id',
  },
  rotation: {
    Component: RotationItem,
    key: 'id',
  }
}