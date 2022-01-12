// Challenge 1
function ageInDays(){
    document.getElementById('line').remove();
    var birthDay = prompt('What year were you born?');
    var ageInDaysResult = (2021 - birthDay) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDaysResult + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
    var h3 = document.createElement('h3');
    var line = document.createTextNode('Result:________');
    h3.setAttribute('id', 'line');
    h3.appendChild(line);
    document.getElementById('flex-box-result').appendChild(h3);
}
// Challenge 2
var x=0;
function GenerateDog() {
    x++;
    var image = document.createElement('img');
    var div = document.getElementById('flex-dog-gen');
    image.setAttribute('id', 'dog');
    image.src = "https://media.giphy.com/media/Y4pAQv58ETJgRwoLxj/giphy.gif";
    image.width = "250"; image.height = "300";
    div.appendChild(image);
}
function Reset(){
    for(let i=1; i<=x;i++)
    document.getElementById('dog').remove();
    x=0;
}
// Challenge 3
function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice);
    results = decideWinner(humanChoice, botChoice);
    console.log(results);
    message = finalMessage(results);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message);
}
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}
function decideWinner(yourChoice, botChoice) {
    var rpsDataBase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    };

    var yourScore = rpsDataBase[yourChoice][botChoice];
    var botScore = rpsDataBase[botChoice][yourChoice];
    return [yourScore, botScore];
}
function finalMessage([yourScore, botScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if( yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'yellow'};
    } else {
        return {'message': 'You won!', 'color': 'green'};
    } 
}
var y=0;
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    if(y>0)
    {
        document.getElementById('reset-rock').remove();
        document.getElementById('reset-paper').remove();
        document.getElementById('reset-scissors').remove();
    }
    else {
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    }

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var btnDiv = document.createElement('div');

    humanDiv.setAttribute('id','reset-rock');
    botDiv.setAttribute('id','reset-paper');
    messageDiv.setAttribute('id','reset-scissors');

    humanDiv.innerHTML = "<img id='rps-yourChoice' src='" + imagesDataBase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 223, 1);'>"
    messageDiv.innerHTML = "<h1 id='rps-message' style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img id='rps-botChoice' src='" + imagesDataBase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(233, 38, 24, 1);'>"
    btnDiv.innerHTML = "<button id='rps-reset-btn' class='btn btn-danger' onclick='rpsReset()'> Reset </button>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('container-3').appendChild(btnDiv);
}

function rpsReset() {
    y++;
    document.getElementById('rps-yourChoice').remove();
    document.getElementById('rps-message').remove();
    document.getElementById('rps-botChoice').remove();
    document.getElementById('rps-reset-btn').remove();

    var rockDiv = document.createElement('div');
    var paperDiv = document.createElement('div');
    var scissorsDiv = document.createElement('div');

    rockDiv.innerHTML = "<img id=\"rock\" src=\"http://images.clipartpanda.com/rock-clipart-clipart-harvestable-resources-rock.png\" width=\"150px\" height=\"150px\" onclick=\"rpsGame(this)\">";
    paperDiv.innerHTML = "<img id=\"paper\" src=\"http://clipart-library.com/images_k/notebook-paper-transparent-background/notebook-paper-transparent-background-15.png\" width=\"150px\" height=\"150px\" onclick=\"rpsGame(this)\">";
    scissorsDiv.innerHTML = "<img id=\"scissors\" src=\"http://clipart-library.com/images/ATbKBx55c.png\" width=\"150px\" height=\"150px\" onclick=\"rpsGame(this)\">";

    document.getElementById('reset-rock').appendChild(rockDiv);
    document.getElementById('reset-paper').appendChild(paperDiv);
    document.getElementById('reset-scissors').appendChild(scissorsDiv);
}
// Challenge 4
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);
var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThing) {
    if (buttonThing.value === 'red') {
        buttonsRed();
    } else if (buttonThing.value === 'green') {
        buttonsGreen();
    } else if (buttonThing.value === 'reset') {
        buttonColorReset();
    } else if (buttonThing.value === 'random') {
        randomColors();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[Math.floor(Math.random() * 4)]);
    }
}

// Challenge 5: Blackjack
 let BlackjackGame = {
     'you' : {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
     'dealer' : {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
     'cards' : ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
     'cardsMap' : {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1,11]},
     'wins' : 0,
     'losses': 0,
     'draws': 0,
     'isStand': false,
     'isHit': false,
     'turnsOver': false,
 };

 const YOU = BlackjackGame['you'];
 const DEALER = BlackjackGame['dealer'];

 const hitSound = new Audio('C:/Users/User/Documents/Project/project2/sounds/swish.m4a');
 const winSound = new Audio('C:/Users/User/Documents/Project/project2/sounds/cash.mp3');
 const lossSound = new Audio('C:/Users/User/Documents/Project/project2/sounds/aww.mp3');

 document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
 document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);
 document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal);

 function blackjackHit() {
     if (BlackjackGame['isStand'] === false) {
        let card = randomCard();
        console.log(card);
        showCard(card, YOU);
        updateScore(card, YOU);
        showScore(YOU);
        BlackjackGame['isHit'] = true;
    if (YOU['score'] > 21) {
         BlackjackGame['turnsOver'] = true;
         let winner = computeWinner();
         showResult(winner);
         BlackjackGame['isStand'] = true;
         BlackjackGame['isHit'] = false;
    }
     }
 }

 function randomCard() {
    let randomIndex = Math.floor(Math.random() * 13);
    return BlackjackGame['cards'][randomIndex];
}

 function showCard(card, activePlayer) {
    if (activePlayer['score'] <= 21) {
        let cardImage = document.createElement('img');
        cardImage.src = "https://github.com/Mrn28/JavaScript/blob/main/project2/images/10.png";
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
 }

 function blackjackDeal() {
     if (BlackjackGame['turnsOver'] === true) {

        BlackjackGame['isStand'] = false;
        let yourImages = document.querySelector('#your-box').querySelectorAll('img');
        let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

        for (let i = 0; i < yourImages.length; i++ ) {
        yourImages[i].remove();
        }
        for (let i = 0; i < dealerImages.length; i++ ) {
            dealerImages[i].remove();
        }

        YOU['score'] = 0;
        DEALER['score'] = 0;

        document.querySelector('#your-blackjack-result').textContent = 0;
        document.querySelector('#dealer-blackjack-result').textContent = 0;

        document.querySelector('#your-blackjack-result').style.color = 'white';
        document.querySelector('#dealer-blackjack-result').style.color = 'white';

        document.querySelector('#blackjack-result').textContent = "Let's play!";
        document.querySelector('#blackjack-result').style.color = "black";

        BlackjackGame['turnsOver'] = true;
        BlackjackGame['isHit'] = false;
    }
 }

function updateScore(card, activePlayer) {
    if (card === 'A') {
        // If adding 11 keeps me below 21, add 11. Otherwise, add 1.
        if(activePlayer['score'] + BlackjackGame['cardsMap'][card][1] <= 21) {
            activePlayer['score'] += BlackjackGame['cardsMap'][card][1];
        } else {
            activePlayer['score'] += BlackjackGame['cardsMap'][card][0];
        }
    } else {
    activePlayer['score'] += BlackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    } else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function dealerLogic() {
    
    
    if (BlackjackGame['isHit'] === true) {
        BlackjackGame['isStand'] = true;
    while (DEALER['score'] < 17 && BlackjackGame['isStand']  === true) {
        let card = randomCard();
        showCard(card, DEALER);
        updateScore(card, DEALER);
        showScore(DEALER);
        await sleep(1000);
    }
         BlackjackGame['turnsOver'] = true;
         let winner = computeWinner();
         showResult(winner);
         BlackjackGame['isHit'] = false;
    }
}

// compute winner and return who just won
// update the wins, draws and losses
function computeWinner() {
    let winner;

    if (YOU['score'] <= 21) {
        // condition: higher score than dealer or when dealer busts but you're 21 or under
        if (YOU['score'] > DEALER['score'] || (DEALER['score'] > 21)) {
            BlackjackGame['wins']++;
            winner = YOU;
        } else if (YOU['score'] < DEALER['score']) {
            BlackjackGame['losses']++;
            winner = DEALER;
        } else if (YOU['score'] === DEALER['score']) {
            BlackjackGame['draws']++;
        }

        // condition when user busts but dealer doesn't
    } else {
        BlackjackGame['losses']++;
        winner = DEALER;
    }

    console.log('Winner is ', winner);
    return winner;
}

function showResult(winner) {
    let message, messageColor;

    if (BlackjackGame['turnsOver'] === true) {

        if (winner === YOU) {
            document.querySelector('#wins').textContent = BlackjackGame['wins'];
            message = 'You won!';
            messageColor = 'green';
            winSound.play();

        } else if (winner === DEALER) {
            document.querySelector('#losses').textContent = BlackjackGame['losses'];
            message = 'You lost!';
            messageColor = 'red';
            lossSound.play();

        } else {
            document.querySelector('#draws').textContent = BlackjackGame['draws'];
            message = 'You drew!';
            messageColor = 'black';
        }

        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messageColor;
    }
}