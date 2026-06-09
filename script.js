// function sayhii() {
//     console.log(`Hii everyone here`)
// }

const addCard = document.querySelector('.addcard')
const removeCard = document.querySelector('.removecard')
const container = document.querySelector('.container')


let count = 1

// Add Cards
addCard.addEventListener('click', function () {

    const nextCard = document.createElement('div')

    nextCard.classList.add('card')
    nextCard.innerText = count++
// console.log(nextCard)
    container.append(nextCard)
})

// Remove Cards
removeCard.addEventListener('click', function () {

    const cards = document.querySelectorAll('.card')

    // Prevent removing + and - buttons
    if (cards.length > 2) {
        cards[cards.length - 1].remove()
        count--
    }
})