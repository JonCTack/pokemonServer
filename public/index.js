
let button = document.querySelector("button")
let ulEl = document.querySelector('ul');
let list = undefined
button.addEventListener('click', async () =>{
    let response = await fetch("http://localhost:5000/get_pokemon_data")
    let finalData = await response.json()
    finalData.forEach(el => {
    list = document.createElement("li")
    list.textContent = `${el.name}`
    ulEl.appendChild(list)
    });
})
button.addEventListener('click')