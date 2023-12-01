var scores,roundScore,activePlayer,gamePlaying,dice_1,dice_2;
var diceDOM = document.querySelectorAll('.dice');


init();
var lastDice;

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
    dice_1 = Math.floor(Math.random()*6)+1;
    dice_2 = Math.floor(Math.random()*6)+1;

    //var diceDOM = document.querySelector('.dice');
    diceDOM[0].style.display= 'block';
    diceDOM[1].style.display= 'block';

    diceDOM[0].src = 'dice-' + dice_1 + '.png';
    diceDOM[1].src = 'dice-' + dice_2 + '.png';

     if(dice_1 !== 1 && dice_2 !== 1){
        roundScore += dice_1 + dice_2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else{
        changePlayer();
    }

  




}})

document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gamePlaying){

    var input = document.querySelector('.limit');
    var winningLimit
    if (input.value){
        winningLimit = input.value;
    }
    else{
        winningLimit = 100;
    }



  
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]


    if (scores[activePlayer] >= winningLimit){
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
        diceDOM[0].style.display='none';
        diceDOM[1].style.display='none';
        
        gamePlaying = false;

    }else{

        changePlayer()
        
    }

}})

function changePlayer(){

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

       // document.querySelector('.dice').style.display = 'none'
        
      diceDOM[0].style.display='none';
      diceDOM[1].style.display='none';


}


document.querySelector('.btn-new').addEventListener('click', init)



function init(){
    scores=[0,0];
    roundScore = 0;
    activePlayer= 0;
    gamePlaying = true;
    diceDOM[1].style.display = 'none'
    
    diceDOM[0].style.display = 'none'
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player-1';
    document.getElementById('name-1').textContent = 'Player-2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}