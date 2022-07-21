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
}