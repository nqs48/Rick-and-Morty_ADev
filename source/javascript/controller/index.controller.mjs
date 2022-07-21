"use strict";

// Config
import { Config } from "../config.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

// Models
import { UserModel } from "../model/user.model.mjs";

// Services
import { RickAndMortyService } from "../model/services/rick-and-morty.service.mjs";

class IndexController {
    #privateUser;
    #privateRickAndMortyURL;
    #privateView;

    constructor() {
        this.#privateRickAndMortyURL = Config.RickAndMortyAPI_URL;
        this.#privateUser = new UserModel();
        this.#privateUser.Name = "Julian";
        this.#privateUser.Lastname = "Lasso";
        this.#privateView = new IndexView();
    }

    async init() {
        const data = new RickAndMortyService(this.#privateRickAndMortyURL);
        this.#privateView.init(this.#privateUser.toString(), await data.getCharacters());
    }
}

export const index = new IndexController();
index.init();