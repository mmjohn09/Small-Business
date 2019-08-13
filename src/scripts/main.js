import API from "./data.js"
import makeCardComponent from "./factory.js"
import renderCard from "./DOM.js"

const cardDOM = document.querySelector("#cardContainer")

const getAndRenderData = () => {
    cardDOM.innerHTML = ""
    API.getData().then((parsedResponses) => {
        for (const response of parsedResponses) {
            const cardHTML = makeCardComponent.createCard(response)
            renderCard.renderToDOM(cardHTML)
        }
    })
}


getAndRenderData()