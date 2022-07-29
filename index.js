let title = document.querySelector('.title');
let turn = 'X';
let square = [];

winner = (n1, n2, n3) => {
  title.innerHTML = `${square[n1]}  WINNER`;
  title.style.background = '#fd4c4c';
  document.getElementById('item' + n1).style.background = '#62fa54';
  document.getElementById('item' + n2).style.background = '#62fa54';
  document.getElementById('item' + n3).style.background = '#62fa54';
  3;
  setInterval(() => {
    title.innerHTML += '.';
  }, 1000);
  setTimeout(() => {
    location.reload();
  }, 3000);
};

let game = (id) => {
  let element = document.getElementById(id);
  if (turn === 'X' && element.innerHTML == '') {
    element.innerHTML = turn;
    turn = 'O';
    title.innerHTML = turn;
  } else if (turn === 'O' && element.innerHTML == '') {
    element.innerHTML = turn;
    turn = 'X';
    title.innerHTML = turn;
  }
  compar();
};

let compar = () => {
  for (let i = 1; i < 10; i++) {
    square[i] = document.getElementById('item' + i).innerHTML;
  }

  if (square[1] == square[2] && square[2] == square[3] && square[3] != '') {
    winner(1, 2, 3);
  } else if (
    square[4] == square[5] &&
    square[5] == square[6] &&
    square[6] != ''
  ) {
    winner(4, 5, 6);
  } else if (
    square[7] == square[8] &&
    square[8] == square[9] &&
    square[9] != ''
  ) {
    winner(7, 8, 9);
  } else if (
    square[1] == square[4] &&
    square[4] == square[7] &&
    square[7] != ''
  ) {
    winner(1, 4, 7);
  } else if (
    square[2] == square[5] &&
    square[5] == square[8] &&
    square[8] != ''
  ) {
    winner(2, 5, 8);
  } else if (
    square[3] == square[6] &&
    square[6] == square[9] &&
    square[9] != ''
  ) {
    winner(3, 6, 9);
  } else if (
    square[1] == square[5] &&
    square[5] == square[9] &&
    square[9] != ''
  ) {
    winner(1, 5, 9);
  } else if (
    square[3] == square[5] &&
    square[5] == square[7] &&
    square[7] != ''
  ) {
    winner(3, 5, 7);
  } else if (square[1, 2, 3, 4, 5, 6, 7, 8, 9].innerHTML != '') {
    title.innerHTML = 'Block';
  }
};
