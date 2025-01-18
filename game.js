let score = {
  win: 0,
  loss: 0,
  tie: 0,
};
let comChoice;
function printComChoice() {
  let temNum = Math.random() * 3;
  if (temNum > 0 && temNum <= 1) {
    return 'Rock';
  } else if (temNum > 1 && temNum <= 2) {
    return 'Paper';
  } else {
    return 'Scissor';
  }

}

function getResult(userMove, computerMove) {
  if (userMove === 'Rock') {
    if (computerMove === 'Paper') {
      score.loss++;
      return 'Computer has won';

    } else if (computerMove === 'Scissor') {
      score.win++;
      return 'you won.';
    } else if (computerMove === 'Rock') {
      score.tie++;
      return `Its's a tie.`
    }
  } else if (userMove === 'Paper') {
    if (computerMove === 'Scissor') {
      score.loss++;
      return 'Computer has won';

    } else if (computerMove === 'Rock') {
      score.win++;
      return 'you won.';
    } else if (computerMove === 'Paper') {
      score.tie++;
      return `Its's a tie.`
    }
  } else if (userMove === 'Scissor') {
    if (computerMove === 'Rock') {
      score.loss++;
      return 'Computer has won';

    } else if (computerMove === 'Paper') {
      score.win++;
      return 'you won.';
    } else if (computerMove === 'Scissor') {
      score.tie++;
      return `Its's a tie.`
    }
  }
}
function showResult(userMove, computerMove, result) {
  console.log(score);
  alert(`you have chosen ${userMove}. Computer choice is ${computerMove}

    ${result}

    won:${score.win}, lost:${score.loss},Tie:${score.tie}`)


}
