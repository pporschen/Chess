export class Game {
	constructor(pieces) {
		this.currentPlayer = 1;
		this.blackLost = [];
		this.whiteLost = [];
		this.currentSelection;
		this.currentLocation;
		this.validMovesArray;
		this.boardHistory;
		this.boardState = [
			[["row"], ["knw"], ["biw"], ["quw"], ["kiw"], ["biw"], ["knw"], ["row"]],
			[["paw"], ["paw"], ["paw"], ["paw"], ["paw"], ["paw"], ["paw"], ["paw"]],
			[[], [], [], [], [], [], [], []],
			[[], [], [], [], [], [], [], []],
			[[], [], [], [], [], [], [], []],
			[[], [], [], [], [], [], [], []],
			[["pab"], ["pab"], ["pab"], ["pab"], ["pab"], ["pab"], ["pab"], ["pab"]],
			[["rob"], ["knb"], ["bib"], ["qub"], ["kib"], ["bib"], ["knb"], ["rob"]],
		];
		this.pieces = pieces;
	}

	pickPiece(event, positionY, positionX) {
		this.currentSelection = event.currentTarget.children[0].dataset.name;
		this.currentLocation = [positionY, positionX];
		this.validMovesArray = this.validMoves(positionY, positionX);
	}

	updateGameStatus(hit, pieces, positionY, positionX) {

		this.boardState[positionY][positionX] = [this.currentSelection];
		this.boardState[this.currentLocation[0]][this.currentLocation[1]] = [];
		this.rulesCheck(positionY, positionX);
		pieces[this.currentSelection].initial = false;

		if (hit) this[this.currentPlayer === 1 ? "blackLost" : "whiteLost"].push(hit);

		this.currentSelection = null;
		this.currentPlayer = this.currentPlayer * -1;
	}

	validMoves(positionY, positionX) {
		let result = this.pieces[this.currentSelection].pattern(positionY, positionX);

		if (result[0][0].length > 1) {
			result = this.validMovesHelper(result);
		}
		return result;
	}

	validMovesHelper(result) {
		result = result.map((y) => y.filter((x) => x[0] < 8 && x[0] >= 0 && x[1] < 8 && x[1] >= 0));
		let temp = [[], [], [], []];
		let check = [[], [], [], []];
		result.map((y, i) => {
			y.map((x, j) => {
				if (!check[i].includes(3)) {
					if (x[0] === this.currentLocation[0] && x[1] === this.currentLocation[1]) {
						check[i].push(2);
					} else if (this.boardState[x[0]][x[1]][0]) {
						if (!check[i].includes(2)) {
							check[i] = [];
							temp[i] = [];
							temp[i].push(result[i][j]);
							check[i].push(1);
						} else {
							temp[i].push(result[i][j]);
							check[i].push(3);
						}
					} else {
						temp[i].push(result[i][j]);
						check[i].push(0);
					}
				}
			});
		});
		return [...temp[0], ...temp[1], ...temp[2], ...temp[3]];
	}

	rulesCheck(positionY, positionX) {
		this.promotion(positionY, positionX);
		this.castling(positionY, positionX);
		this.check(positionY, positionX);
	}

	promotion(positionY, positionX) {
		if (this.currentSelection === "paw" && this.currentLocation[0] === 6) this.boardState[positionY][positionX] = ["quw"];
		if (this.currentSelection === "pab" && this.currentLocation[0] === 1) this.boardState[positionY][positionX] = ["qub"];
	}

	castling(positionY, positionX) {
		if (
			this.currentSelection === "kiw" &&
			this.currentLocation[0] === 0 &&
			this.currentLocation[1] === 4 &&
			positionY === 0 &&
			positionX === 2
		) {
			this.boardState[0][0] = "";
			this.boardState[0][3] = "row";
		}
		if (
			this.currentSelection === "kiw" &&
			this.currentLocation[0] === 0 &&
			this.currentLocation[1] === 4 &&
			positionY === 0 &&
			positionX === 6
		) {
			this.boardState[0][7] = "";
			this.boardState[0][5] = "row";
		}
		if (
			this.currentSelection === "kib" &&
			this.currentLocation[0] === 7 &&
			this.currentLocation[1] === 4 &&
			positionY === 7 &&
			positionX === 6
		) {
			this.boardState[7][7] = "";
			this.boardState[7][5] = "row";
		}
		if (
			this.currentSelection === "kib" &&
			this.currentLocation[0] === 7 &&
			this.currentLocation[1] === 4 &&
			positionY === 7 &&
			positionX === 2
		) {
			this.boardState[7][0] = "";
			this.boardState[7][3] = "row";
		}
	}

	check(positionY, positionX) {
		let array = this.validMoves(positionY, positionX);
		array = array.filter((x) => x[0] < 8 && x[0] >= 0 && x[1] < 8 && x[1] >= 0);
		const checkCheck = array.map((x) => this.boardState[x[0]][x[1]][0]);

		if (this.currentPlayer === 1 && checkCheck.includes("kib")) document.querySelector("#warning").innerHTML = "CHECK";
		if (this.currentPlayer === -1 && checkCheck.includes("kiw")) document.querySelector("#warning").innerHTML = "CHECK";
	}
}
