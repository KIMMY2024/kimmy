const API_URL = 'https://web-app-cw2.herokuapp.com/api'

let shop = new Vue({
    el: "#app",
    data: {
        lessons: [],
        sortBy: "topic",
        sortopt: "asc",
        currentp: "lessons",
        name: "",
        phone: "",
        selectLesson: null,
        searchL: "",

    },
    methods: {
        togglePage() { // allows us to swap between the pages
            if (this.currentp === "lessons") {
                this.currentp = "confirm";
            } else {
                this.currentp = "lessons"
            }
        },
        buyLesson(lesson) { // this allows the lesson confirmation to come up before booking the lesson
            this.selectLesson = lesson;
            this.togglePage();
        },
        cancelLesson() {
            this.selectLesson = null;
            this.togglePage();
        },

    }

});