
let button = document.querySelector("button");
let ulEl = document.querySelector('ul');
//calling these so I can use push methods and a pseudo counter
let agesArray = [];
let imgArray = [];
let idOfList = 0;
//this has the first button show the names and sets up their event listeners
button.addEventListener('click', async () =>{
    let response = await fetch("http://localhost:5000/get_pokemon_data");
    let finalData = await response.json();
    finalData.forEach(el => {
    let listEl = document.createElement("li");
    listEl.textContent = `${el.name}`;
    listEl.id = idOfList;
    agesArray.push(el.age);
    imgArray.push(el.img + '.jpg');
    ulEl.appendChild(listEl);
    idOfList++;
    });
    //now adding an eventListener to each pokemon list element
    for (let i=0; i < agesArray.length; i++){
        let thisLiEl = document.getElementById(i);
        thisLiEl.addEventListener('click', () =>{
            pokeInfo = document.createElement("p");
            pokeInfo.textContent = `${agesArray[i]}`;
            pokePic = document.createElement("img");
            pokePic.src = imgArray[i];
            thisLiEl.appendChild(pokeInfo);
            thisLiEl.appendChild(pokePic);
        })
    }
})