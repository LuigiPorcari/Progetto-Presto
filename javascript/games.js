fetch("../json/games.json").then((response) => response.json()).then((data) => {
    let categoriesWrapper = document.querySelector(`#categoriesWrapper`)
    let gamesCategories = data.map((game) => game.category)
    let categories = new Set(gamesCategories);
    categories.forEach((category) => {
        let div = document.createElement(`div`)
        div.classList.add("form-check")
        div.innerHTML = `
        <input class="form-check-input" type="radio" name="category" id="${category}">
        <label class="form-check-label" for="${category}">
        ${category}
        </label>
        `
        categoriesWrapper.appendChild(div);
    })

    let gamesWrapper = document.querySelector('#gamesWrapper')

    function ShowCards(games) {
        gamesWrapper.innerHTML = ``
        games.forEach((game) => {
            let div = document.createElement('div')
            div.classList.add('col-6' ,'col-md-4')
            div.innerHTML = `
        <div class="card mb-3 shadow" style="max-width: 540px;">
    <div class="row g-0 heightCards">
    <div class= col-md-6 w-100">
      <img src="https://picsum.photos/30${game.id}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-6">
      <div class="card-body text-center d-flex flex-column justify-content-center align-items-center h-100">
        <h5 class="card-title">${game.name}</h5>
        <p class="card-text">${game.category}</p>
        <p class="card-text">${game.price}</p>
      </div>
    </div>
   </div>
  </div>
        `
            gamesWrapper.appendChild(div)
        })

    }
    ShowCards(data)
    let check = Array.from(document.querySelectorAll(".form-check-input"));
    function filteredByCategory(array) {

        let checked = check.find((button) => button.checked);
        let categoria = checked.id

        if (categoria == 'All') {
            return array

        } else {
            let filtered = array.filter((game) => game.category == categoria)
            return filtered
        }
    }
    check.forEach(checato => {
        checato.addEventListener('click', () => {
            globalFilter()
        })
    })

    let inputRange = document.querySelector('#inputRange')
    let numberRange = document.querySelector('#numberRange')
    function enterNumber() {
        let prices = data.map((game) => game.price)
        let maxPrice = Math.ceil(Math.max(...prices))
        inputRange.max = maxPrice
        inputRange.value = maxPrice
        numberRange.innerHTML = `${maxPrice}€`
    }
    enterNumber()
    function filteredByPrice(array) {
        let filtered = array.filter(game => game.price <= inputRange.value)
        return filtered
    }
    inputRange.addEventListener('input', () => {
        numberRange.innerHTML = inputRange.value
        globalFilter()
    })

    let title = document.querySelector("#titleInput")
    let wordToSearch = document.querySelector("#inputByTitle")


    function filteredByWord(array){
        let filtered = array.filter ((game)=>  game.name.toLowerCase().replace(/\s/g, '').includes(title.value.toLowerCase().replace(/\s/g, '')))
        return filtered

    }
    wordToSearch.addEventListener("click", ()=> {
        globalFilter()
    })

    function globalFilter(){
        let filteredByCategoria = filteredByCategory(data)
        let filteredByPrezzo = filteredByPrice(filteredByCategoria)
        let filteredByParola = filteredByWord(filteredByPrezzo)
        if (filteredByCategoria.length == 0 || filteredByPrezzo == 0 || filteredByParola == 0){
            gamesWrapper.innerHTML = `
            <h2 class="text-center display-1 font-title blue-custom">Non ci sono giochi per questa ricerca</h2>
            `
        }else {
            ShowCards(filteredByParola)
        }
    }
})
