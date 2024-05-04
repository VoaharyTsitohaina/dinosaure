const epine = document.querySelector("#epine")
const ballon = document.querySelector("#ballon")

window.addEventListener("keydown", (event) => {
    if (event.key == ' ') {
        ballon.classList.toggle('isJumping')
        setTimeout(function () {
            ballon.classList.toggle('isJumping')
        }, 1000)
    }

    setInterval(function () {
        if (ballon.bottom >= epine.top ||
            ballon.right >= epine.left) {
            alert("you lose")
        }
    }, 10)
})