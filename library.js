function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
};

Book.prototype.info = function(){
	return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
};


function createNewBookCard(book){
	let emptyBox = document.getElementById('emptyBox');
	
	const para = document.createElement('div');
	para.classList.add('book_card')
	const text = document.createTextNode(`${book.title}, by ${book.author}. ${book.pages}`);
	para.appendChild(text);
	
	const removeBtnContainer = document.createElement('div');
	removeBtnContainer.innerHTML = '<i class="fa fa-trash-o removebtn"></i>';
	removeBtnContainer.addEventListener('click', removeBookCard);
	para.appendChild(removeBtnContainer);
	
	const bookIconContainer = document.createElement('button');
	if (book.read === "read"){
		bookIconContainer.innerHTML = 'read';
		bookIconContainer.classList.add('thisBookHasBeenRead');
	} else {
		bookIconContainer.innerHTML = 'not yet read';		
		bookIconContainer.classList.add('thisBookHasNotYetBeenRead');
	}
	bookIconContainer.addEventListener('click', changeBookReadStatus);

	para.appendChild(bookIconContainer);
	
	emptyBox.appendChild(para);
}

function removeBookCard(){
	event.target.parentElement.parentElement.remove();
}


function addBookFunction() {
	title = document.getElementById('bookTitleInputField').value.trim();
	author = document.getElementById('bookAuthorInputField').value.trim();
	numberOfPages = document.getElementById('bookPagesInputField').value;
	readStatus = document.querySelector('input[name="readStatus"]:checked').value;
	
	if (title && author && numberOfPages && readStatus) {
		const book = new Book(title, author, numberOfPages, readStatus);
		createNewBookCard(book); 
		document.querySelector(".createNewBookForm").reset();
		document.getElementById('formWrapper').style.display = "none";
	}
}

function showNewBookForm() {
	document.getElementById('formWrapper').style.display = "inline";
}


function changeBookReadStatus() {
	if (event.target.classList.contains("thisBookHasBeenRead")) {
	event.target.innerHTML = "not yet read";
	event.target.classList.replace("thisBookHasBeenRead", "thisBookHasNotYetBeenRead");
	} else {
	event.target.innerHTML = "read";
	event.target.classList.replace("thisBookHasNotYetBeenRead", "thisBookHasBeenRead");	
	}
}


//waiting for DOM to load
document.addEventListener('DOMContentLoaded', function() {
	
	// selector for pop up which contains create new book form
	let newBookButton = document.getElementById("newBookButton");
	newBookButton.addEventListener('click', showNewBookForm);

	//selector for submitting form that creates new book button
	let addBookToLibraryButton = document.getElementById('addBookToLibraryButton');
	addBookToLibraryButton.addEventListener("click", addBookFunction);




	//selector for changing read status button
	// let readStatusBtns = document.querySelectorAll('.thisBookHasBeenRead, .thisBookHasNotYetBeenRead');
	// for (var i = 0; i < readStatusBtns.length; i++) {
 //    	readStatusBtns[i].addEventListener('click', changeBookReadStatus);
	// }

});