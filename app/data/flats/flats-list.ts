import { FlatType } from "./types";

class FlatList {
  private properties: FlatType[];

  constructor(properties: FlatType[]) {
    this.properties = properties;
  }

  searchByText(text: string): FlatType[] {
    const searchText = text.toLowerCase();
    return this.properties.filter(
      (flat) =>
        flat.City.toLowerCase().includes(searchText) ||
        flat.Title.toLowerCase().includes(searchText) ||
        flat.Author.toLowerCase().includes(searchText) ||
        flat.Tags.some((tag) => tag.toLowerCase().includes(searchText))
    );
  }
}

export default FlatList;
