

const books = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
    {
        "author": "Unknown",
        "country": "Sumer and Akkadian Empire",
        "imageLink": "images/the-epic-of-gilgamesh.jpg",
        "language": "Akkadian",
        "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
        "pages": 160,
        "title": "The Epic Of Gilgamesh",
        "year": -1700
    },
    {
        "author": "Unknown",
        "country": "Achaemenid Empire",
        "imageLink": "images/the-book-of-job.jpg",
        "language": "Hebrew",
        "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
        "pages": 176,
        "title": "The Book Of Job",
        "year": -600
    }]

/*<div class="book"><h1 class="tittle">Things Fall Apart</h1><h2 class="author">Chinua Achebe</h2><p class="location">Nigeria</p></div>*/


function spawnData(Data) {

    let container = document.querySelector("#container1")

    container.style.display = "flex"
    container.style.flexDirection = "column"

    for (const d of Data) {
        let div = document.createElement("div")

        let classAtr = document.createAttribute("class")
        classAtr.value = "book"

        div.setAttributeNode(classAtr)

        let h1 = document.createElement("h1")
        h1.appendChild(document.createTextNode(d.title))
        h1.setAttribute("class", "tittle")

        let h2 = document.createElement("h2")
        h2.appendChild(document.createTextNode(d.author))
        h2.setAttribute("class", "author")

        let p1 = document.createElement("p")
        p1.setAttribute("class", "location")

        p1.appendChild(document.createTextNode(d.country))

        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(p1)

        container.appendChild(div)
    }
}

/*<div class="book"><h1 class="tittle">Things Fall Apart</h1><h2 class="author">Chinua Achebe</h2><p class="location">Nigeria</p></div>*/


function spawnDataTemplate(Data) {

    let container = document.querySelector("#container2")

    for (const d of Data) {
        let templateStr = `<div class="book">
                                <h1 class="tittle">${d.title}</h1>
                                <h2 class="author">${d.author}</h2>
                                <p class="location">${d.country}</p>
                            </div>`
        container.innerHTML += templateStr
    }
}

window.onload = () => {

    let boton = document.getElementById("creationTrigger")

    boton.addEventListener("click", superSpawn)

    function superSpawn() {
        spawnData(books)
        spawnDataTemplate(books)
    }

}
