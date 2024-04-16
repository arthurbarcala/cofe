const socket = io("https://cofe-api.onrender.com")

const personName = document.getElementById("coffeeMaker")

socket.emit("connection")

socket.on("currentName", person => {
    personName.innerHTML = person
})

document.getElementsByTagName("button")[0].addEventListener("click", () => {
    const alertElement = document.getElementsByClassName("alert")[0];
    alertElement.style.display = "block"
    alertElement.innerHTML = `
        <div class="alert-header">
            <h3><strong>Esta feature não está disponível 😭</strong></h3>  
        </div>
        <p>O cofe ainda está em desenvolvimento. Algumas features ainda não estão disponíveis!</p>
    `

    setTimeout(() => {
        alertElement.style.transform = "translateX(0%)";

        setTimeout(() => {
            alertElement.style.transform = "translateX(-250%)";
        }, 5000);
    }, 300);
})

document.getElementById("emojo").addEventListener("click", () => {
    const emojis = [
        "😎", "🤓", "🥳", "🤩", "😻", "💪", "👍", "✌️", "🙌", "👏",
        "🙏", "🤞", "🤟", "🤘", "👊", "🤙", "👌", "🤝", "👋", "🖖",
        "🤗", "🥺", "😬", "😷", "🤒", "🤕", "😴", "🥱", "😵", "🤯",
        "🐶", "🐱", "🐭", "🐹", "🐰", "🐻", "🐼", "🦊", "🐮", "🐷",
        "🐸", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉",
        "🍕", "🍔", "🍟", "🌮", "🍦", "🍰", "🍩", "🍭", "🍹", "🥤"
      ];

    const randIndex = Math.round(Math.random()*(emojis.length-1))
    
    document.getElementById("emojo").innerHTML = emojis[randIndex]
})

document.getElementById("cancel").addEventListener("click", () => {
    const alertElement = document.getElementsByClassName("alert")[0];
    alertElement.style.transform = "translateX(-250%)";
})