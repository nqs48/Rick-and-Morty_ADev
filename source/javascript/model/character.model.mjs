// @ts-check

export class CharacterModel {
  #privateName;
  #privateStatus;
  #privateSpecies;
  #privateImage;
  #privateGender;

  /**
   *
   * @param {string} name
   * @param {string} status
   * @param {string} species
   * @param {string} image
   * @param {string} gender
   */
  constructor(name, status, species, image, gender) {
    this.#privateName = name;
    this.#privateStatus = status;
    this.#privateSpecies = species;
    this.#privateImage = image;
    this.#privateGender = gender;
  }

  get Name() {
    return this.#privateName;
  }

  set Name(name) {
    this.#privateName = name;
  }

  get Status() {
    return this.#privateStatus;
  }

  set Status(status) {
    this.#privateStatus = status;
  }

  get Species() {
    return this.#privateSpecies;
  }

  set Species(species) {
    this.#privateSpecies = species;
  }

  get Image() {
    return this.#privateImage;
  }

  set Image(url) {
    this.#privateImage = url;
  }

  get Gender() {
    return this.#privateGender;
  }

  set Gender(url) {
    this.#privateGender = url;
  }

  toString() {
    return `${this.#privateName} ${this.#privateSpecies}`;
  }
}


