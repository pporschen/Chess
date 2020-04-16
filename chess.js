const pieces = {
	paw: {
		name: "white-pawn",
		pattern: (positionY, positionX) => {
			const lookAhead = [
				game.boardState[positionY + 1][positionX - 1] || [],
				game.boardState[positionY + 1][positionX],
				game.boardState[positionY + 1][positionX + 1] || [],
				game.boardState[positionY + 2][positionX] || [],
			];
			return [
				lookAhead[0][0] ? [positionY + 1, positionX - 1] : [10, 10],
				!lookAhead[1][0] ? [positionY + 1, positionX] : [10, 10],
				lookAhead[2][0] ? [positionY + 1, positionX + 1] : [10, 10],
				positionY === 1 && !lookAhead[1][0] && !lookAhead[3][0] ? [positionY + 2, positionX] : [10, 10],
			];
		},
		color: "white",
		colorId: 1,
		initial: true,
		img: "./img/pawn_white.png",
	},
	knw: {
		name: "white-knight",
		pattern: (positionY, positionX) => [
			[positionY + 1, positionX + 2],
			[positionY + 1, positionX - 2],
			[positionY - 1, positionX + 2],
			[positionY - 1, positionX - 2],
			[positionY + 2, positionX + 1],
			[positionY - 2, positionX + 1],
			[positionY + 2, positionX - 1],
			[positionY - 2, positionX - 1],
		],
		color: "white",
		colorId: 1,
		initial: true,
		img: "/img/knight_white.png",
	},
	biw: {
		name: "white-bishop",
		pattern: (positionY, positionX) => [
			[
				[0, positionX - positionY + 0],
				[1, positionX - positionY + 1],
				[2, positionX - positionY + 2],
				[3, positionX - positionY + 3],
				[4, positionX - positionY + 4],
				[5, positionX - positionY + 5],
				[6, positionX - positionY + 6],
				[7, positionX - positionY + 7],
			],
			[
				[positionX + positionY - 7, 7],
				[positionX + positionY - 6, 6],
				[positionX + positionY - 5, 5],
				[positionX + positionY - 4, 4],
				[positionX + positionY - 3, 3],
				[positionX + positionY - 2, 2],
				[positionX + positionY - 1, 1],
				[positionX + positionY - 0, 0],
			],
		],
		color: "white",
		colorId: 1,
		initial: true,
		img: "/img/bishop_white.png",
	},
	row: {
		name: "white-rooks",
		pattern: (positionY, positionX) => [
			[
				[positionY, 0],
				[positionY, 1],
				[positionY, 2],
				[positionY, 3],
				[positionY, 4],
				[positionY, 5],
				[positionY, 6],
				[positionY, 7],
			],
			[
				[0, positionX],
				[1, positionX],
				[2, positionX],
				[3, positionX],
				[4, positionX],
				[5, positionX],
				[6, positionX],
				[7, positionX],
			],
		],
		color: "white",
		colorId: 1,
		initial: true,
		img: "/img/rook_white.png",
	},
	quw: {
		name: "white-queen",
		pattern: (positionY, positionX) => [
			[
				[0, positionX - positionY + 0],
				[1, positionX - positionY + 1],
				[2, positionX - positionY + 2],
				[3, positionX - positionY + 3],
				[4, positionX - positionY + 4],
				[5, positionX - positionY + 5],
				[6, positionX - positionY + 6],
				[7, positionX - positionY + 7],
			],
			[
				[positionX + positionY - 7, 7],
				[positionX + positionY - 6, 6],
				[positionX + positionY - 5, 5],
				[positionX + positionY - 4, 4],
				[positionX + positionY - 3, 3],
				[positionX + positionY - 2, 2],
				[positionX + positionY - 1, 1],
				[positionX + positionY - 0, 0],
			],
			[
				[positionY, 0],
				[positionY, 1],
				[positionY, 2],
				[positionY, 3],
				[positionY, 4],
				[positionY, 5],
				[positionY, 6],
				[positionY, 7],
			],
			[
				[0, positionX],
				[1, positionX],
				[2, positionX],
				[3, positionX],
				[4, positionX],
				[5, positionX],
				[6, positionX],
				[7, positionX],
			],
		],
		color: "white",
		colorId: 1,
		initial: true,
		img: "/img/queen_white.png",
	},
	kiw: {
		name: "white-king",
		pattern: (positionY, positionX) => [
			[positionY + 1, positionX],
			[positionY - 1, positionX],
			[positionY, positionX + 1],
			[positionY, positionX - 1],
			[positionY + 1, positionX + 1],
			[positionY - 1, positionX - 1],
			[positionY - 1, positionX + 1],
			[positionY + 1, positionX - 1],
		],
		color: "white",
		colorId: 1,
		initial: true,
		img: "/img/king_white.png",
	},

	pab: {
		name: "black-pawn",
		pattern: (positionY, positionX) => {
			const lookAhead = [
				game.boardState[positionY - 1][positionX - 1] || [],
				game.boardState[positionY - 1][positionX],
				game.boardState[positionY - 1][positionX + 1] || [],
				game.boardState[positionY - 2][positionX] || [],
			];
			return [
				lookAhead[0][0] ? [positionY - 1, positionX - 1] : [10, 10],
				!lookAhead[1][0] ? [positionY - 1, positionX] : [10, 10],
				lookAhead[2][0] ? [positionY - 1, positionX + 1] : [10, 10],
				positionY === 6 && !lookAhead[1][0] && !lookAhead[3][0] ? [positionY - 2, positionX] : [10, 10],
			];
		},
		color: "black",
		colorId: -1,
		img: "/img/pawn_black.png",
	},
	knb: {
		name: "black-knight",
		pattern: (positionY, positionX) => [
			[positionY + 1, positionX + 2],
			[positionY + 1, positionX - 2],
			[positionY - 1, positionX + 2],
			[positionY - 1, positionX - 2],
			[positionY + 2, positionX + 1],
			[positionY - 2, positionX + 1],
			[positionY + 2, positionX - 1],
			[positionY - 2, positionX - 1],
		],
		color: "black",
		colorId: -1,
		initial: true,
		img: "/img/knight_black.png",
	},
	bib: {
		name: "black-bishop",
		pattern: (positionY, positionX) => [
			[
				[0, positionX - positionY + 0],
				[1, positionX - positionY + 1],
				[2, positionX - positionY + 2],
				[3, positionX - positionY + 3],
				[4, positionX - positionY + 4],
				[5, positionX - positionY + 5],
				[6, positionX - positionY + 6],
				[7, positionX - positionY + 7],
			],
			[
				[positionX + positionY - 7, 7],
				[positionX + positionY - 6, 6],
				[positionX + positionY - 5, 5],
				[positionX + positionY - 4, 4],
				[positionX + positionY - 3, 3],
				[positionX + positionY - 2, 2],
				[positionX + positionY - 1, 1],
				[positionX + positionY - 0, 0],
			],
		],
		color: "black",
		colorId: -1,
		initial: true,
		img: "/img/bishop_black.png",
	},
	rob: {
		name: "black-rooks",
		pattern: (positionY, positionX) => [
			[
				[positionY, 0],
				[positionY, 1],
				[positionY, 2],
				[positionY, 3],
				[positionY, 4],
				[positionY, 5],
				[positionY, 6],
				[positionY, 7],
			],
			[
				[0, positionX],
				[1, positionX],
				[2, positionX],
				[3, positionX],
				[4, positionX],
				[5, positionX],
				[6, positionX],
				[7, positionX],
			],
		],
		color: "black",
		colorId: -1,
		initial: true,
		img: "/img/rook_black.png",
	},
	qub: {
		name: "black-queen",
		pattern: (positionY, positionX) => [
			[
				[0, positionX - positionY + 0],
				[1, positionX - positionY + 1],
				[2, positionX - positionY + 2],
				[3, positionX - positionY + 3],
				[4, positionX - positionY + 4],
				[5, positionX - positionY + 5],
				[6, positionX - positionY + 6],
				[7, positionX - positionY + 7],
			],
			[
				[positionX + positionY - 7, 7],
				[positionX + positionY - 6, 6],
				[positionX + positionY - 5, 5],
				[positionX + positionY - 4, 4],
				[positionX + positionY - 3, 3],
				[positionX + positionY - 2, 2],
				[positionX + positionY - 1, 1],
				[positionX + positionY - 0, 0],
			],
			[
				[positionY, 0],
				[positionY, 1],
				[positionY, 2],
				[positionY, 3],
				[positionY, 4],
				[positionY, 5],
				[positionY, 6],
				[positionY, 7],
			],
			[
				[0, positionX],
				[1, positionX],
				[2, positionX],
				[3, positionX],
				[4, positionX],
				[5, positionX],
				[6, positionX],
				[7, positionX],
			],
		],
		color: "black",
		colorId: -1,
		initial: true,
		img: "/img/queen_black.png",
	},
	kib: {
		name: "black-king",
		pattern: (positionY, positionX) => [
			[positionY + 1, positionX],
			[positionY - 1, positionX],
			[positionY, positionX + 1],
			[positionY, positionX - 1],
			[positionY + 1, positionX + 1],
			[positionY - 1, positionX - 1],
			[positionY - 1, positionX + 1],
			[positionY + 1, positionX - 1],
		],
		color: "black",
		colorId: -1,
		initial: true,
		img: "/img/king_black.png",
	},
};

class Game {
	constructor() {
		this.currentPlayer = 1;
		this.blackLost = [];
		this.whiteLost = [];
		this.currentSelection;
		this.currentLocation;
		this.validMovesArray;
		this.boardHistory = [];
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
	}
}

const game = new Game();
const boardHTML = document.querySelectorAll(".field");

// render board state
const renderer = () => {
	for (rows in game.boardState) {
		for (columns in game.boardState[rows]) {
			const index = rows * 8 + columns * 1;
			if (pieces[game.boardState[rows][columns]])
				boardHTML[index].innerHTML = `<img class="pieces" data-name="${game.boardState[rows][columns]}" src="${
					pieces[game.boardState[rows][columns]].img
				}">`;
			else boardHTML[index].innerHTML = '<div data-name=""></div>';
		}
	}
};

// where the action happens
for (field of boardHTML) {
	field.addEventListener("click", (event) => {
		let piece = event.currentTarget.children[0].dataset.name;
		console.log(piece);
		const positionX = parseInt(event.currentTarget.dataset.row);
		const positionY = parseInt(event.currentTarget.dataset.column);

		if (piece && pieces[piece].colorId === game.currentPlayer) {
			game.currentSelection = event.currentTarget.children[0].dataset.name;
			game.currentLocation = [positionY, positionX];
			game.validMovesArray = validMoves(positionY, positionX);
		} else {
			if (
				game.currentSelection &&
				game.validMovesArray.some((x) => JSON.stringify(x) === JSON.stringify([positionY, positionX]))
			) {
				game.boardState[positionY][positionX] = [game.currentSelection];
				game.boardState[game.currentLocation[0]][game.currentLocation[1]] = [];
				pieces[game.currentSelection].initial = false;
				const hit = event.currentTarget.children[0].dataset.name;
				renderer();
				game.currentSelection = null;
				game.currentPlayer = game.currentPlayer * -1;
				if (hit) game[game.currentPlayer === 1 ? "whiteLost" : "blackLost"].push(hit);
				game.boardHistory.push(game.boardState);
				document.querySelector("#gameStats").innerHTML = game.currentPlayer === 1 ? "WHITE" : "BLACK";
				document.querySelector("#whiteStats").innerHTML = game.whiteLost;
				document.querySelector("#blackStats").innerHTML = game.blackLost;
			} else {
			}
		}
	});
}

renderer();

// construction an array of valid moves
const validMoves = (positionY, positionX) => {
	let result = pieces[game.currentSelection].pattern(positionY, positionX);

	if (result[0][0].length > 1) {
		result = validMovesHelper(result);
	}
	console.log(result);
	return result;
};

const validMovesHelper = (result) => {
	result = result.map((y) => y.filter((x) => x[0] < 8 && x[0] >= 0 && x[1] < 8 && x[1] >= 0));
	let temp = [[], [], [], []];
	let check = [[], [], [], []];
	result.map((y, i) => {
		y.map((x, j) => {
			if (!check[i].includes(3)) {
				if (game.boardState[x[0]][x[1]][0] === game.currentSelection) {
					check[i].push(2);
				} else if (game.boardState[x[0]][x[1]][0]) {
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
};
