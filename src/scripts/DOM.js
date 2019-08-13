const cardDOM = document.querySelector("#cardContainer")

const renderCard = {
    renderToDOM(HTMLRepresentation) {
        cardDOM.innerHTML += HTMLRepresentation
    }
}

export default renderCard