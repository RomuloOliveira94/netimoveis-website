import { PlaceType } from "./types";

class PlaceList {
  private properties: PlaceType[];

  constructor(properties: PlaceType[]) {
    this.properties = properties;
  }

  searchByText(text: string): PlaceType[] {
    const searchText = text.toLowerCase();
    if (searchText === "") {
      return [];
    }
    return this.properties.filter(
      (place) =>
        place.name.toLowerCase().includes(searchText) ||
        place.state.name.toLowerCase().includes(searchText) ||
        place.state.shortname.toLowerCase().includes(searchText)
    );
  }
}

export default PlaceList;
