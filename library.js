
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





//waiting for DOM to load
document.addEventListener('DOMContentLoaded', function() {
	//selecting the empty box
	let emptyBox = document.getElementById('emptyBox');
	//placing text on the page. (Should this be placed in a function???)
	for (let i = 0; i< myLibrary.length; i++){
		var para = document.createElement('div');
		para.classList.add('book_card')
		var text = document.createTextNode(myLibrary[i].info());
		para.appendChild(text);
		emptyBox.appendChild(para);
	}

});