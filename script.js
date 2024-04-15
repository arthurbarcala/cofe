const socket = io("https://cofe-api.onrender.com")

const personName = document.getElementById("coffeeMaker")

socket.emit("connection")

socket.on("currentName", person => {
    personName.innerHTML = person
})

document.getElementsByTagName("button")[0].addEventListener("click", () => {
    window.alert("Essa feature ainda não está disponível! 😭")
})