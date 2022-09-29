const textBox = document.querySelector(".text-content");
const inputField = document.querySelector(".text-input");
const quote = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

// function getWords() {
// 	return fetch("http://api.quotable.io/random")
// 		.then((response) => response.json())
// 		.then(data => data.content);
// }

async function getNextText() {
	quote.split(' ').forEach(word => {
		const wordDiv = document.createElement('div');
		wordDiv.classList.add("word");
		word.split('').forEach(char => {
			const charSpan = document.createElement('span');
			charSpan.innerHTML = char;
			wordDiv.appendChild(charSpan);
		});
		textBox.appendChild(wordDiv);
	});
	document.addEventListener("keydown", () => inputField.focus());
	textBox.addEventListener("click", () => inputField.focus());
};

let indexChar = 0;

function handleInput(e) {
	const charText = textBox.querySelectorAll("span");
	let typedChar = e.target.value.split("")[indexChar];
	
	if (typedChar == null) {
			indexChar--;
			charText[indexChar].classList.remove("correct", "incorrect");
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


getNextText();
inputField.addEventListener("input", handleInput)