//recuparation de left du char actuelle et echanger le left de cursor avec le left de char
//si c'est un mot de fin de ligne changer le bottom du cursor pour aller sur la 2eme ligne 

export async function setCursorPos (arrayChar, charIndex) {
	const cursor = document.querySelector(".cursor");
	const activChar = document.querySelector(".active");
	const textContent = document.querySelector(".text");
	
	const prevCharTop = arrayChar[charIndex - 1].getBoundingClientRect().top
	console.log(prevCharTop);
	const activCharInfo = activChar.getBoundingClientRect();
	const textInfo = textContent.getBoundingClientRect();

	if (prevCharTop < activCharInfo.top) cursor.style.top = `${activCharInfo.top - textInfo.top}px`;

	cursor.style.left = `${activCharInfo.left - textInfo.left}px`
}