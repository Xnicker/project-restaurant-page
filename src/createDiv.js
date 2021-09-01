export default function createDiv(text, klasse, id) {
    const container = document.createElement("div");
    container.innerHTML=text;
    if (klasse != "") {
        container.classList.add(klasse);
    }
    
    container.id = id;

    return container;
}