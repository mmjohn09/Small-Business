const makeCardComponent = {
    createCard (employeeObject) {
        return `
        <section class="card" id="container">
            <h1><b>${employeeObject.name}</b></h1>
            <p>${employeeObject.department.department}</p>
            <p>${employeeObject.computer.make}</p>
        </section>`
    }
}

export default makeCardComponent

