//recuparation de left du char actuelle et echanger le left de cursor avec le left de char
//si c'est un mot de fin de ligne changer le bottom du cursor pour aller sur la 2eme ligne 

export async function setCursorPos (charIndex) {
	const cursor = document.querySelector(".cursor");
	const activChar = document.querySelector(".active");
	const textContent = document.querySelector(".text");
	
	const leftOfChar = activChar.getBoundingClientRect().left;
	const leftCursor = cursor.getBoundingClientRect().left;

	const leftText = textContent.getBoundingClientRect().left

	//if (charIndex === 0) cursor.style.cursor = "0px"
	cursor.style.left = `${leftOfChar - leftText}px`
}