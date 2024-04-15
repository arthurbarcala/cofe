const socket = io("http://localhost:8080/")

const personName = document.getElementById("coffeeMaker")

socket.emit("connection")

socket.on("currentName", person => {
    personName.innerHTML = person
})