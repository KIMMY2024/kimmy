const API_URL = 'https://web-app-cw2.herokuapp.com/api'

let shop = new Vue({
    el: "#app",
    data: {
        lesson: [],
        sortBy: "topic",
        sortopt: "asc",
        currentp: "lessons",
        name: "",
        phone: "",

    }

});