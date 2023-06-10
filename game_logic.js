let restartBtn = document.getElementById('restartgame')
let boxes = Array.from(document.getElementsByClassName('box'))
let result = 1;
function gcd(a, b) 
{
        if (a == 0)
            return b;
        return gcd(b % a, a);
}

function startGame() {
    let spaces = Array(9).fill(null)
    for (let i = 0; i < 9; i++) {
        if(i % 2 == 0 && i != 4)
        {
            var x = Math.floor((Math.random() * 1000) + 1);
            spaces[i] = x;
            boxes[i].innerText = x
        }
        else if(i == 4)
        {
            boxes[i].innerText = '?'
        }
    }
    result = spaces[0]
    for(let i = 1; i < 9; i++)
    {
        if(i % 2 == 0 && i != 4)
        {
            result = gcd(result,spaces[i]);
        }
    }
}

function getVal() {
    var val = document.getElementById("number").value;

    if(val != result)
    {
        boxes[4].innerHTML = 'wrong';
    }
    else
    {
        boxes[4].innerHTML = 'right';
    }
}

restartBtn.addEventListener('click',restart);
function restart()
{
    location.reload()
}
startGame()