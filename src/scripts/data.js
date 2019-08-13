const API = {
    getData() {
        return fetch("http://localhost:3000/employees?_expand=computer&_expand=department")
        .then(response => response.json())
    }
}

export default API

    