class ChessSquare extends HTMLElement {
  constructor() {
    super();
    this.index = null;
    this.letter = null;
    this.number = null;
    this.color = null;
  }

  initializeAttributes() {
    this.style.height = "60px";
    this.style.width = "60px";
    this.style.display = "inline-block";
    this.style.backgroundColor = this.color;

    this.style.color = "white";
  }
}

customElements.define("chess-square", ChessSquare);
const letterList = ["a", "b", "c", "d", "e", "f", "g", "h"];
const chessboard = document.getElementById("chessboard");

letterList.forEach((letter, index) => {
  {
    const row = document.createElement("div");
    row.style.height = "60px";
    chessboard.appendChild(row);
    console.log(letter);

    for (let number = 0; number <= 7; number++) {
      const square = document.createElement("chess-square");
      row.appendChild(square);

      const isBlack = (index + number) % 2 === 0;
      const color = isBlack ? "white" : "black";

      square.index = index;
      square.letter = letter;
      square.number = number;
      square.color = color;

      square.initializeAttributes();
    }
  }
});

const grid = [
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
];

class ChessPiece {
  constructor(name, color, number, letter) {
    this.name = name;
    this.color = color;
    this.letter = letter;
    this.number = number;
  }

  move(maxDistance, directions) {
    let letterIndex = letterList.indexOf(this.letter);
    while (
      (number >= 0 || number <= 7) &&
      (letterIndex >= 0 || letterIndex <= 7)
    ) {
      
    }
  }
}

class King extends ChessPiece {
  maxDistance = 1;
  directions = ["cross", "diagonal"];
}
class Queen extends ChessPiece {
  maxDistance = 8;
  directions = ["cross", "diagonal"];
}
class Rook extends ChessPiece {
  maxDistance = 8;
  directions = ["cross"];
}
class Bishop extends ChessPiece {
  maxDistance = 8;
  directions = ["diagonal"];
}
class Knight extends ChessPiece {
  maxDistance = 8;
  directions = ["horseJump"];
}
class Pawn extends ChessPiece {
  maxDistance = 1;
  directions = ["forward", "pawnDiagonal", "enPassant"];
}
