let navbar = document.querySelector('.navbar');
let navbarBrand = document.querySelector('.navbar-brand');
window.addEventListener('scroll', () => {
    let scrollato = window.scrollY;
    if (scrollato > 100) {
        if (window.innerWidth > 768) {
            navbarBrand.classList.add('navbarRotate');
            navbar.classList.remove('w-50', 'rounded-4', 'my-1');
            navbar.classList.add('w-100', 'rounded-bottom-4');
        }
    } else {
        if(window.innerWidth > 768){
            navbar.classList.add('w-50', 'rounded-4', 'my-1');
            navbar.classList.remove('w-100', 'rounded-bottom-4');
            navbarBrand.classList.remove('navbarRotate');
        }
    }
})


let firstNumber = document.querySelector("#firstNumber")
let secondNumber = document.querySelector("#secondNumber")
let thirdNumber = document.querySelector("#thirdNumber")

function Numbers(total, finalNumber, time) {
    let counter = 0
    let interval = setInterval(() => {
        if (counter < total) {
            counter++
            finalNumber.innerHTML = "+" + counter
        } else {
            clearInterval(interval)
        }
    }, time)
}


let check = true
let intersection = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && check) {
            Numbers(600, firstNumber, 20)
            Numbers(1000, secondNumber, 10)
            Numbers(50, thirdNumber, 100)
            check = false
            setTimeout(() => {
                check = true
            }, 12000)
        }
    })
})

intersection.observe(thirdNumber)

let giochi = [
    { title: 'Call of duty:MW3', category: 'FPS-battleroyale', prezzo: 59, url: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Call_of_Duty_Modern_Warfare_3_box_art.png' },
    { title: 'Fortnite', category: 'Schifo', prezzo: 0, url: 'https://media.s-bol.com/3zN8L5zw0Dp/550x778.jpg' },
    { title: 'Rocket League', category: 'Calcio con macchine', prezzo: 0, url: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Rocket_League_coverart.jpg' },
    { title: 'Dynasty Warriors', category: 'Ammazzi la gente nel medioevo', prezzo: 30, url: 'https://image.api.playstation.com/vulcan/img/cfn/11307ZTM-O8Wrd5pHJ12pUm-2eSZzdTfCVxEKs9PTV7iqL2EW03Khham2fPsfXM3w_EGgz4vWAw0x9REwx7KXHv1790yUiDZ.png' },
    { title: 'Crash Bandicoot', category: 'Avventura-platform', prezzo: 20, url: '' },
    { title: 'Uncharted 2', category: 'Avventura', prezzo: 69, url: '' }

]
let gamesWrapper = document.querySelector('#gamesWrapper');

giochi.forEach((gioco, i) => {
    if (i < 4) {
        let div = document.createElement('div');
        div.classList.add('col-6', 'col-md-2', 'p-3');
        div.innerHTML = `
    <div class="card text-bg-dark">
        <img src="${gioco.url}" class="card-img imgCustom" alt="immagine di ${gioco.title}">
        <div class="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center">
            <h5 class="card-title fw-bold cardCustom fs-2 font-title text-white opacity-0">${gioco.title}</h5>
            <p class="card-text fs-5 cardCustom font-gen text-white opacity-0">${gioco.category}</p>
            <p class="card-text fs-3 cardCustom font-gen text-white opacity-0">€ ${gioco.prezzo}</p>
        </div>
    </div>
    `
        gamesWrapper.appendChild(div);
    }
})

let swiperWrapper = document.querySelector('#swiperWrapper');
let recensioni = [
    { name: 'Pio', description: "Bellissimo sito, cattura molto l'attenzione." },
    { name: 'Cristopher', description: "Sito divino, se era di vino era meglio!" },
    { name: 'Fortunato', description: "Per sfortuna non ho trovato quello che cercavo." },
    { name: 'Alessio', description: "Giochi di altissima qualità." },
    { name: 'Davide', description: "Divertimento senza limiti, sempre a portata di mano." },
    { name: 'Marco', description: "Problemi tecnici persistenti rovinano l'esperienza di gioco." },
    { name: 'Arturo', description: "Prestazioni scadenti su console di generazioni precedenti." }
]

recensioni.forEach(recensione => {
    let div = document.createElement('div');
    div.classList.add('swiper-slide', 'd-flex', 'flex-column', 'text-center', 'px-3', 'shadow-lg')
    div.innerHTML = `
        <h3 class="font-title fw-bold fs-1 mb-4 textShadow">${recensione.name}</h3>
        <p class="font-gen fs-5">${recensione.description}</p>
    `
    swiperWrapper.appendChild(div);
})


const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
});


