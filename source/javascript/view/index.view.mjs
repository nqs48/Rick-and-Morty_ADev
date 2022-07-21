'use strict';

export class IndexView {
    #privateBody;

    constructor() {
        document.title = "Rick and Morthy";
        this.#privateBody = document.querySelector('body');
    }

    init(data) {
        this.#privateBody.className = "body-styles";
        const containerHeader = this.#privateCreateContainer();
        containerHeader.className = "header_container";

        const imgHeader = document.createElement("img");
        imgHeader.src =
          "https://media.cdn.adultswim.com/uploads/20210428/21428161947-rick-and-morty-logo-png.png";
        
        imgHeader.className = "image_header";

        containerHeader.append(imgHeader);

        const container= this.#privateCreateContainer();
        container.className = "main_container";

      

        data.forEach(c =>{
          const button = this.#privateCreateButton();
          button.className = "button_container";
          button.addEventListener('click', () => console.log(c.Name) )

          const paragraph = this.#privateCreateParagraph();
          const img = document.createElement('img'); 
          img.className= "images_list"
          img.src = c.Image;
          paragraph.textContent = c.Name;
          button.append(img, paragraph);
          container.append(button)
          
        })
        this.#privateBody.append(containerHeader,container);
        
        // paragraph.innerHTML = `Hello World!!! ${name}`;
        // this.#privateBody.append(paragraph);
        // console.log(data.results);
    }

    #privateCreateParagraph() {
        return document.createElement('p');
    }

    #privateCreateContainer() {
        return document.createElement('div');
    }

    #privateCreateImg() {
        return document.createElement('img');
    }

     #privateCreateButton() {
        return document.createElement('button');
    }

}