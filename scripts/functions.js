const stage = document.querySelector('.stage')

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
        alert
    })

    playAsO.textContent = 'Play as O'
    playAsO.setAttribute('id', 'o')
    playAsO.addEventListener('click', () => {
        alert()
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
        box.textContent = 'X'
        play.appendChild(box)
    }
    stage.appendChild(play)
}

// It renders the game over screen
const renderEnd = () => {

}