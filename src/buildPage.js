import createDiv from './createDiv.js';

export default function buildPage() {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    const navBar = document.createElement("nav");
    const main = document.createElement("main");
    const footer = document.createElement("footer");

    content.appendChild(header);
    header.appendChild(createDiv("Testrestaurant","","label"))
    header.appendChild(navBar);
    navBar.appendChild(createDiv("Home","navbtn","home"));
    navBar.appendChild(createDiv("Menu","navbtn","menu"));
    navBar.appendChild(createDiv("Contact","navbtn","contact"))
    content.appendChild(main);
    content.appendChild(footer);
    footer.appendChild(createDiv("Erstmal putze ich hier nur","","fusslbl"))

}
