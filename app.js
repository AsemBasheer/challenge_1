document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell')
    const player = document.querySelector('#playerTurn')
    let currentPlayer = "Player1"
    let xoArr = {}
    cells.forEach((cell, i) => {
        cell.addEventListener('click', () => {
            if (cells[i].classList[cells[i].classList.length - 1] === 'Player1' ||
                cells[i].classList[cells[i].classList.length - 1] === 'Player2') {
                console.log("no")
            } else {
                cells[i].classList.add(currentPlayer)
                xoArr[i] = currentPlayer
                if (!win(xoArr)) {
                    if (currentPlayer === 'Player1') {
                        currentPlayer = 'Player2'
                    } else {
                        currentPlayer = 'Player1'
                    }
                    player.innerHTML = `It's ${currentPlayer} trun`
                } else {
                    console.log(">>>>>")
                }
            }
        })
    })
    const button = document.querySelector('.w3-button')
    button.addEventListener('click', () => {
        cells.forEach((cell, i) => {
            cell.classList.remove('Player1')
            cell.classList.remove('Player2')
            player.innerHTML = ''
            currentPlayer = 'Player1'
            xoArr = {}
        })
    })
    var win = function (obj) {
        if (obj[0] !== undefined && obj[0] === obj[1] && obj[1] === obj[2]) {
            player.innerHTML = `${currentPlayer.toUpperCase()} IS THE WINNER !!`
        } else if (obj[0] !== undefined && obj[0] === obj[3] && obj[3] === obj[6]) {
            player.innerHTML = `${currentPlayer.toUpperCase()} IS THE WINNER !!`
        } else if (obj[3] !== undefined && obj[3] === obj[4] && obj[4] === obj[5]) {
            player.innerHTML = `${currentPlayer.toUpperCase()} IS THE WINNER !!`
        } else if (obj[6] !== undefined && obj[6] === obj[7] && obj[7] === obj[8]) {
            player.innerHTML = `${currentPlayer.toUpperCase()} IS THE WINNER !!`
        } else if (obj[1] !== undefined && obj[1] === obj[4] && obj[4] === obj[7]) {
            player.innerHTML = `${currentPlayer.toUpperCase()} IS THE WINNER !!`
        } else if (obj[2] !== undefined && obj[2] === obj[5] && obj[5] === obj[8]) {
            player.innerHTML = `${currentPlayer.toUpperCase()} IS THE WINNER !!`
        } else if (obj[0] !== undefined && obj[0] === obj[4] && obj[4] === obj[8]) {
            player.innerHTML = `${currentPlayer.toUpperCase()} IS THE WINNER !!`
        } else if (obj[2] !== undefined && obj[2] === obj[4] && obj[4] === obj[6]) {
            player.innerHTML = `${currentPlayer.toUpperCase()} IS THE WINNER !!`
        } else if (Object.keys(xoArr).length === 9) {
            player.innerHTML = 'DRAW'
            console.log('draw')
        }
        else {
            return false
        }
        return true
    }
});
