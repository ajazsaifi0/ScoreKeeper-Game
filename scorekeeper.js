// player 1 property object
// const p1 = {
//     score: 0,
//     disp: document.querySelector('#score1'),
//     btn: document.querySelector('#firstPlayerButton'),

// }
// // player 2 properties
// const p2 = {
//     score=0,
//     disp: document.querySelector('#score2'),
//     btn: document.querySelector('#secondPlayerButton')
// }
// // generic function
// function updatescore(player, opponent) {
//     if (!isGameOver) {
//         player.score += 1;

//         if (player.score === winningScore) {
//             isGameOver = true;
//             player.display.classList.add('has-text-success')
//             player.display.classList.add('has-text-danger')

//             player.btn.disabled = true;
//             player.btn.disabled = true;
//         }
//         player.display.textContent = player.score;
//     }
// }
const selection = document.querySelector('#player-select');
// first player point
const firstPlayerPoint = document.querySelector('#score1');
// const a1 = parseInt(firstPlayerPoint.innerText);
// second player point
const secondPlayerPoint = document.querySelector('#score2')
// first player button
const btn1 = document.querySelector('#firstPlayerButton');
// second player button
const btn2 = document.querySelector('#secondPlayerButton');
// reset button
const btn3 = document.querySelector('#reset')
// winning score
let winningScore = 2;
// gameover
let isGameOver = false;
// for selecting number of maximum points
selection.addEventListener('change', () => {
    winningScore = parseInt(selection.value);
    reset();

})
// for first player button
let i = 0;
btn1.addEventListener('click', () => {
    if (!isGameOver) {
        i += 1;

        if (i === winningScore) {
            isGameOver = true;
            firstPlayerPoint.classList.add('has-text-success')
            secondPlayerPoint.classList.add('has-text-danger')

            btn1.disabled = true;
            btn2.disabled = true;
        }
        firstPlayerPoint.textContent = i;
    }
})
// for second player button
let j = 0;
btn2.addEventListener('click', () => {

    if (!isGameOver) {
        j += 1;

        if (j === winningScore) {

            isGameOver = true;
            firstPlayerPoint.classList.add('has-text-danger')
            secondPlayerPoint.classList.add('has-text-success')

            btn1.disabled = true;
            btn2.disabled = true;
        }
        secondPlayerPoint.textContent = j;
    }
})
// for reset button
btn3.addEventListener('click', reset)
// for make a winner


function reset() {

    isGameOver = false;
    i = 0;
    j = 0;
    firstPlayerPoint.innerText = 0;
    secondPlayerPoint.innerText = 0;
    firstPlayerPoint.classList.remove('has-text-success', 'has-text-danger')
    secondPlayerPoint.classList.remove('has-text-success', 'has-text-danger')
    btn1.disabled = false;
    btn2.disabled = false;

}