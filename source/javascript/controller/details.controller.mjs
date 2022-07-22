"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { DetailsView } from "../view/details.view.mjs";


// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";

class DetailsController {
  #privateRickAndMortyURL;
  #privateView;

  constructor() {
    this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
    this.#privateView = new DetailsView();
  }

  async init() {
    const data = new RickAndMortyService(this.#privateRickAndMortyURL);
    const character = data.getLocalStorage();
    this.#privateView.init(character);
  }
} 

export const index = new DetailsController();
index.init();
