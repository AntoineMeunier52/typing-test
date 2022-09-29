const textBox = document.querySelector(".text-content");
const inputField = document.querySelector(".text-input");
const quote = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

// function getWords() {
// 	return fetch("http://api.quotable.io/random")
// 		.then((response) => response.json())
// 		.then(data => data.content);
// }


//genere les div des mots avec les span des char
async function getNextText() {
	quote.split(' ').forEach(span => {
		const charSpan = document.createElement('span');
		charSpan.innerText = span;
		textBox.appendChild(charSpan);
	});
	document.addEventListener("keydown", () => inputField.focus());
	textBox.addEventListener("click", () => inputField.focus());
};

let indexChar = 0;
let upTextBool = 0;

let stats = {
	wpm: 0,
	cpm: 0,
	accurancy: 0
}

//prendre l'entree de l'input et gerer les classes des mots
function handleInput(e) {
	const charText = textBox.querySelectorAll("span");
	let typedChar = e.target.value.split("")[indexChar];
	let charPos = charText[indexChar].getBoundingClientRect();
	
	console.log(charPos.y);
	if (typedChar == null) {
			indexChar--;
			charText[indexChar].classList.remove("correct", "incorrect");
			charText[indexChar+1].classList.remove("active");
	} else {
		if (charText[indexChar].innerText === typedChar) {
			charText[indexChar].classList.add("correct");
		} else {
			charText[indexChar].classList.add("incorrect");
		}
		indexChar++;
	}
	
	charText[indexChar - 1].classList.remove("active");
	charText[indexChar].classList.add("active");
};

//gerer l'anim de la curseur
const cursor = document.querySelector(".text-cursor");
const cursorWidht = Math.round(cursor.getBoundingClientRect().width);

getNextText();
textBox.querySelectorAll("span")[0].classList.add("active");
inputField.addEventListener("input", handleInput)