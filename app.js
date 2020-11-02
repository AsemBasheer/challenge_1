document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell')
    const player = document.querySelector('#playerTurn')
    let currentPlayer = "Player1"
    cells.forEach((cell, i) => {
        cell.addEventListener('click', () => {
            if (cells[i].classList[cells[i].classList.length - 1] === 'Player1' ||
            cells[i].classList[cells[i].classList.length - 1] === 'Player2') {
                console.log("no")
            } else {
                cells[i].classList.add(currentPlayer)
                if (currentPlayer === 'Player1') {
                    currentPlayer = 'Player2'
                } else {
                    currentPlayer = 'Player1'
                }
                player.innerHTML = `It's ${currentPlayer} trun`
            }
        })
    })
    const button = document.querySelector('.w3-button')
    button.addEventListener('click',()=>{
        cells.forEach((cell, i) => {
            cell.classList.remove('Player1')
            cell.classList.remove('Player2')
            player.innerHTML = ''
            currentPlayer = 'Player1'
        })
    })
});