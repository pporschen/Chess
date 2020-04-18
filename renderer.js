export class Renderer {
	constructor(game, pieces) {
		this.game = game;
		this.pieces = pieces;
		this.boardHTML = document.querySelectorAll(".field");
		console.log(pieces);
	}

	render() {
		this.renderBoard();
		this.renderStats();
		this.renderTurn();
	}

	renderBoard() {
		for (let rows in this.game.boardState) {
			for (let columns in this.game.boardState[rows]) {
				const index = rows * 8 + columns * 1;
				if (this.pieces[this.game.boardState[rows][columns]])
					this.boardHTML[index].innerHTML = `<img class="pieces" data-name="${
						this.game.boardState[rows][columns]
					}" src="${this.pieces[this.game.boardState[rows][columns]].img}">`;
				else this.boardHTML[index].innerHTML = '<div data-name=""></div>';
			}
		}
	}

	renderStats() {
		this.game.whiteLost.sort((a, b) => this.pieces[a].rank - this.pieces[b].rank);
		this.game.blackLost.sort((a, b) => this.pieces[a].rank - this.pieces[b].rank);
		document.querySelector("#white-lost").innerHTML = "";
		document.querySelector("#black-lost").innerHTML = "";
		for (let piece in this.game.whiteLost) {
			document
				.querySelector("#white-lost")
				.insertAdjacentHTML(
					"beforeend",
					`<img class = "stats-pic" src = "${this.pieces[this.game.whiteLost[piece]].img}">`
				);
		}
		for (let piece in this.game.blackLost) {
			document
				.querySelector("#black-lost")
				.insertAdjacentHTML(
					"beforeend",
					`<img class = "stats-pic" src = "${this.pieces[this.game.blackLost[piece]].img}">`
				);
		}
	}

	renderTurn() {
		document.querySelector("#turn").innerHTML = this.game.currentPlayer === 1 ? "WHITE" : "BLACK";
	}

	renderWarning(message) {
		document.querySelector("#warning").innerHTML = message;
	}
}
