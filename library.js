
function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
};

Book.prototype.info = function(){
	return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
};

let myLibrary = [];

function addBookToLibrary(book){
	return mylibrary = myLibrary.push(book);
}

//manually creating some books
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "not read yet");
const harryPotter = new Book("Harry Potter and the chamber", "J.K. Roling", "412 pages", "read");
const nijntje = new Book("Nijntje op de schommel", "Dick Bruna", "23 pages", "read");

//adding the books 
addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
addBookToLibrary(nijntje);


function createNewBookCard(book){
	let emptyBox = document.getElementById('emptyBox');
	const para = document.createElement('div');
	para.classList.add('book_card')
	const text = document.createTextNode(book.info());
	para.appendChild(text);
	emptyBox.appendChild(para);
}



function addBookFunction() {
	title = document.getElementById('bookTitleInputField').value.trim();
	author = document.getElementById('bookAuthorInputField').value.trim();
	numberOfPages = document.getElementById('bookPagesInputField').value;
	readStatus = document.querySelector('input[name="readStatus"]:checked').value;
	
	if (title && author && numberOfPages && readStatus) {
		const book = new Book(title, author, numberOfPages, readStatus);
		addBookToLibrary(book);
		// createNewBookCard(book); //this does not work yet due to no storage
	}
}




//waiting for DOM to load
document.addEventListener('DOMContentLoaded', function() {
	//placing text on the page. (Should this be placed in a function???)
	for (let i = 0; i< myLibrary.length; i++){
		// execute function createNewBookCard
		createNewBookCard(myLibrary[i]);
	}


	//selector for button
	let addBookToLibraryButton = document.getElementById('addBookToLibraryButton');
	addBookToLibraryButton.addEventListener("click", addBookFunction);



});