
    
      var dice;
      var roundScore;
      var activePlayer = 0;



document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
  
    ///1. count dice...
    dice = Math.floor(Math.random() * 6 ) + 1;

    /// 2. display dice....
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'image/dice-' + dice + '.png' ;

    if( dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = dice;
    }
    else{
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';

    }
});