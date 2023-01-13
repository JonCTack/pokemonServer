
let getButton = document.querySelector("#get");
let delButton = document.querySelector("#remove");
let ulEl = document.querySelector('ul');
let input = document.getElementById('delete');
let agesArray = [];
let imgArray = [];
//reused code made into a function
const makeList = async () => {
let response = await fetch("http://localhost:5000/get_pokemon_data");
let finalData = await response.json();
    finalData.forEach((el, index) => {
    let listEl = document.createElement("li");
    listEl.textContent = `${el.name}`;
    listEl.id = index;
    agesArray.push(el.age);
    imgArray.push(el.img + '.jpg');
    ulEl.appendChild(listEl);
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

}
getButton.addEventListener('click', () =>{
    makeList()
})

delButton.addEventListener('click', async() => {
    await fetch( `/remove_pokemon/${input.value}`, {
    method: 'DELETE'
   })
   makeList()
})

