import {CharacterModel} from '../character.model.mjs'
export class RickAndMortyService {
  #privateUrl;

  constructor(url) {
    this.#privateUrl = url;
  }

  getCharacters() {
    return fetch(`${this.#privateUrl}/character`).then((response) =>
      response.json().then((res) => res.results)
    );
  }

  async setModel() {
    const listAPI = await this.getCharacters();
    return listAPI.map(
      (c) => new CharacterModel(c.name, c.status, c.species, c.image, c.gender)
    );
  }

  getLocalStorage(){
    if (localStorage.getItem("character")) {
      let items = localStorage
        .getItem("character")
        .slice(0, -1)
        .replace('"', "");
      const list = items.split(",");
      const object=new CharacterModel(list[0], list[1], list[2], list[3], list[4]);
      console.log(object.toString());
      return object;
    }
  }
}