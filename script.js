const min = 1, max = 10, chances = 3,
    ans = Math.floor(Math.random() * (max - min + 1)) + min,
    p1 = document.getElementById('p1'),
    p2 = document.getElementById('p2'),
    p3 = document.getElementById('p3'),
    form = document.getElementById('form');
let i = chances;
p1.innerText = `Guess and enter an integer number between ${min} to ${max}.`;
p2.innerText = `Chances left ${i}/${chances}.`;
form.addEventListener('submit', (e) => {
    const input = document.getElementById('text').value;
    if (i > 1) {
        i--;
        p2.innerText = `Chances left ${i}/${chances}.`;
        if (isNaN(input) || input == '') {
            p3.innerText = `Not a number. Enter an integer number between ${min} to ${max}.`;
        } else {
            if (min <= input && input < ans) {
                p3.innerText = 'Correct answer is greater.';
            } else if (max >= input && input > ans) {
                p3.innerText = 'Correct answer is smaller.';
            } else if (input == ans) {
                end();
                p3.innerText = 'You win!';
            } else {
                p3.innerText = `Input is out of the range. Enter an integer number between ${min} to ${max}.`;
            }
        }
    } else if (i == 1) {
        end();
        if (input == ans) {
            p3.innerText = 'You win!';
        } else {
            p2.innerText = `Correct answer is ${ans}`;
            p3.innerText = 'You lose!';
        }
    }
    e.preventDefault();
})

function end() {
    p1.innerText = '';
    p2.innerText = '';
    form.innerHTML = `<button onclick='location.reload()'>Restart</button>`;
}
