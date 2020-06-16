import { Renderer } from "./renderer.js";
import { Game } from "./game.js";

const pieces = {
	paw: {
		name: "white-pawn",
		pattern: (positionY, positionX) => {
			const lookAhead = [
				game.boardState[positionY + 1] ? game.boardState[positionY + 1][positionX - 1] || [] : [],
				game.boardState[positionY + 1] ? game.boardState[positionY + 1][positionX] : [],
				game.boardState[positionY + 1] ? game.boardState[positionY + 1][positionX + 1] || [] : [],
				game.boardState[positionY + 2] ? game.boardState[positionY + 2][positionX] : [],
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
		rank: 6,
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
		img: "./img/knight_white.png",
		rank: 5,
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
		img: "./img/bishop_white.png",
		rank: 3,
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
		img: "./img/rook_white.png",
		rank: 4,
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
		img: "./img/queen_white.png",
		rank: 2,
	},
	kiw: {
		name: "white-king",
		pattern: (positionY, positionX) => {
			const castling = [[10, 10]];
			if (
				pieces[game.boardState[0][0]].initial &&
				pieces[game.boardState[0][4]].initial &&
				game.boardState[0][1] + game.boardState[0][2] + game.boardState[0][3] === ""
			)
				castling.push([0, 2]);
			if (
				pieces[game.boardState[0][7]].initial &&
				pieces[game.boardState[0][4]].initial &&
				game.boardState[0][5] + game.boardState[0][6] === ""
			)
				castling.push([0, 6]);
			return [
				[positionY + 1, positionX],
				[positionY - 1, positionX],
				[positionY, positionX + 1],
				[positionY, positionX - 1],
				[positionY + 1, positionX + 1],
				[positionY - 1, positionX - 1],
				[positionY - 1, positionX + 1],
				[positionY + 1, positionX - 1],
				...castling,
			];
		},
		color: "white",
		colorId: 1,
		initial: true,
		img: "./img/king_white.png",
		rank: 1,
	},

	pab: {
		name: "black-pawn",
		pattern: (positionY, positionX) => {
			const lookAhead = [
				game.boardState[positionY - 1] ? game.boardState[positionY - 1][positionX - 1] || [] : [],
				game.boardState[positionY - 1] ? game.boardState[positionY - 1][positionX] : [],
				game.boardState[positionY - 1] ? game.boardState[positionY - 1][positionX + 1] || [] : [],
				game.boardState[positionY - 2] ? game.boardState[positionY - 2][positionX] : [],
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
		img: "./img/pawn_black.png",
		rank: 6,
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
		img: "./img/knight_black.png",
		rank: 5,
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
		img: "./img/bishop_black.png",
		rank: 3,
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
		img: "./img/rook_black.png",
		rank: 4,
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
		img: "./img/queen_black.png",
		rank: 2,
	},
	kib: {
		name: "black-king",
		pattern: (positionY, positionX) => {
			const castling = [[10, 10]];
			if (
				pieces[game.boardState[7][0]].initial &&
				pieces[game.boardState[7][4]].initial &&
				game.boardState[7][1] + game.boardState[7][2] + game.boardState[7][3] === ""
			)
				castling.push([7, 2]);
			if (
				pieces[game.boardState[7][7]].initial &&
				pieces[game.boardState[7][4]].initial &&
				game.boardState[7][5] + game.boardState[7][6] === ""
			)
				castling.push([7, 6]);

			return [
				[positionY + 1, positionX],
				[positionY - 1, positionX],
				[positionY, positionX + 1],
				[positionY, positionX - 1],
				[positionY + 1, positionX + 1],
				[positionY - 1, positionX - 1],
				[positionY - 1, positionX + 1],
				[positionY + 1, positionX - 1],
				...castling,
			];
		},
		color: "black",
		colorId: -1,
		initial: true,
		img: "./img/king_black.png",
		rank: 1,
	},
};

const boardHTML = document.querySelectorAll(".field");
const game = new Game(pieces);
const renderer = new Renderer(game, pieces);

for (let field of boardHTML) {
	field.addEventListener("click", (event) => {
		let piece = event.currentTarget.children[0].dataset.name;
		const positionX = parseInt(event.currentTarget.dataset.row);
		const positionY = parseInt(event.currentTarget.dataset.column);
		renderer.renderWarning("");
		if (piece && pieces[piece].colorId === game.currentPlayer) {
			game.pickPiece(event, positionY, positionX);
		} else {
			if (
				game.currentSelection &&
				game.validMovesArray.some((x) => JSON.stringify(x) === JSON.stringify([positionY, positionX]))
			) {
				const hit = event.currentTarget.children[0].dataset.name;
				game.updateGameStatus(hit, pieces, positionY, positionX);
				renderer.render(game, pieces);
			} else {
				renderer.renderWarning("INVALID MOVE");
			}
		}
	});
}

renderer.render(game, pieces);
