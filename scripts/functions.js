const stage = document.querySelector('.stage')
let isX = false
let counter = 0

// To create a delay before heading to the end screen

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// It renders the first screen where the player chooses their identity
const renderWelcome  = () => {
    stage.innerHTML = ''
    const actions = document.createElement('div')
    const playAsX = document.createElement('button')
    const playAsO = document.createElement('button')

    actions.classList.add('actions')

    playAsX.textContent = 'Play as X'
    playAsX.setAttribute('id', 'x')
    playAsX.addEventListener('click', () => {
        isX = true
        renderStage()
    })

    playAsO.textContent = 'Play as O'
    playAsO.setAttribute('id', 'o')
    playAsO.addEventListener('click', () => {
        isX = false
        renderStage()
    })

    actions.appendChild(playAsX)
    actions.appendChild(playAsO)
    stage.appendChild(actions)
}


// It renders the play area where all the magic happens
const renderStage = () => {
    stage.innerHTML = ''
    const play = document.createElement('div')
    play.classList.add('play')
    for(let i = 0; i < 9; i++) {
        const box = document.createElement('div')
        box.classList.add('box')
        box.setAttribute('id', `item-${i}`)
        box.addEventListener('click', () => {
            if(isX === false) {
                box.textContent = 'O'
                isX = true
                if(counter < 8) {
                    counter++
                } else {
                    sleep(1000).then(() => {
                        renderEnd()
                    })
                }
            } else {
                box.textContent = 'X'
                isX = false
                if (counter < 8) {
                    counter++
                } else {
                    sleep(1000).then(() => {
                        renderEnd()
                    })
                }
            }
        })

        play.appendChild(box)
    }
    stage.appendChild(play)
}

// It renders the game over screen
const renderEnd = () => {
    stage.innerHTML = ''
    const over = document.createElement('div')
    const message = document.createElement('div')
    const messageText = document.createElement('h2')
    const actions = document.createElement('div')
    const playAgain = document.createElement('button')

    over.classList.add('over')
    message.classList.add('message')
    messageText.textContent = 'Game Over'
    actions.classList.add('actions')

    playAgain.setAttribute('id', 'again')
    playAgain.textContent = 'Play Again?'
    playAgain.addEventListener('click', () => {
        renderWelcome()
    })

    message.appendChild(messageText)
    actions.appendChild(playAgain)
    over.appendChild(message)
    over.appendChild(actions)
    stage.appendChild(over)

}