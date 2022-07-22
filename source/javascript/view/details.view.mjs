"use strict";

export class DetailsView {
  #privateBody;

  constructor() {
    document.title = "Details | Rick and Morty";
    this.#privateBody = document.querySelector("body");
  }

  init(character) {
    this.#privateBody.classList.add("body_index", "body_details");

    //Header
    const containerHeader = this.#privateCreateContainer();
    containerHeader.className = "header_container";

    const imgHeader = document.createElement("img");
    imgHeader.src =
      "https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png";

    imgHeader.className = "image_header";
    containerHeader.append(imgHeader);

    //Main
    const container = this.#privateCreateContainer();
    container.classList = ("main_container", "main_container_details");

    const anchor = this.#privateCreateAnchor();
    anchor.href = "/index.html";
    
    const button = this.#privateCreateButton();
    button.className = "button_container";

    const paragraphName = this.#privateCreateParagraph();
    paragraphName.textContent = character.Name;
    paragraphName.classList.add("paragraph_name","paragraph");


    const paragraphStatus = this.#privateCreateParagraph();
    paragraphStatus.textContent = `Status: ${character.Status}`;
    paragraphStatus.className = "paragraph";

    const paragraphSpecies = this.#privateCreateParagraph();
    paragraphSpecies.textContent = `Specie: ${character.Species}`;
    paragraphSpecies.className = "paragraph";

    const paragraphGender = this.#privateCreateParagraph();
    paragraphGender.textContent = `Gender: ${character.Gender}`;
    paragraphGender.className = "paragraph";
    


    const img = document.createElement("img");
    img.className = "images_list";
    img.src = character.Image;
    
    button.append(
      paragraphName,
      img,
      paragraphStatus,
      paragraphSpecies,
      paragraphGender
    );
    anchor.append(button);
    container.append(anchor);
   
    this.#privateBody.append(containerHeader, container);
  }
  

  #privateCreateParagraph() {
    return document.createElement("p");
  }

  #privateCreateContainer() {
    return document.createElement("div");
  }

  #privateCreateImg() {
    return document.createElement("img");
  }

  #privateCreateButton() {
    return document.createElement("button");
  }

  #privateCreateAnchor() {
    return document.createElement("a");
  }
}
