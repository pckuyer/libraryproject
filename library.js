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
	const text = [book.title, book.author, `${book.pages} pages`];

	const docFrag = document.createDocumentFragment()
	for(i = 0; i < text.length; i++){
		let elem = document.createElement("p");
		elem.appendChild(document.createTextNode(text[i]));
		docFrag.appendChild(elem);
	};

	para.appendChild(docFrag);
	
	const removeBtnContainer = document.createElement('i');
	removeBtnContainer.classList.add('fa', 'fa-trash-o', 'removebtn')
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
	const element = event.target;
	element.parentElement.style.animation = 'fading 1.1s 1';
	setTimeout(() => {
		element.parentElement.remove();
	}, "1000")
}


function addBookFunction() {
	title = document.getElementById('bookTitleInputField').value.trim();
	author = document.getElementById('bookAuthorInputField').value.trim();
	numberOfPages = document.getElementById('bookPagesInputField').value;
	readStatus = document.querySelector('input[name="readStatus"]:checked').value;
	
	if (title && author && numberOfPages && readStatus) {
		const book = new Book(title, author, numberOfPages, readStatus);
		createNewBookCard(book); 
		const myArray = document.querySelectorAll('.book_card');
		myArray[myArray.length -1].style.animation = 'appearing 1s 1';
		document.querySelector(".createNewBookForm").reset();
		document.getElementById('formWrapper').style.display = "none";
		window.scrollTo({ top: document.getElementById('emptyBox').scrollHeight, behavior: 'smooth' });
	}
}

function showNewBookForm() {
	document.getElementById('formWrapper').style.display = "inline";
	document.querySelector(".createNewBookForm").reset();
	document.querySelector(".fa-times").addEventListener('click', hideNewBookForm);

	document.querySelector("#formWrapper").addEventListener('click', e => {
		if(e.target === e.currentTarget){
			hideNewBookForm();
			}
		});

	document.querySelector(".createNewBookForm").querySelector("input").focus().select();
}

function hideNewBookForm() {
	document.getElementById('formWrapper').style.display = "none";
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

const harrypotter = new Book("Harry Potter", "J.K. Rolling", 333, "not yet read");
createNewBookCard(harrypotter);

const harrypotter2 = new Book("Harry Potter 2", "J.K. Rolling", 433, "read");
createNewBookCard(harrypotter2);

const harrypotter3 = new Book("Harry Potter 3", "J.K. Rolling", 533, "not yet read");
createNewBookCard(harrypotter3); 

const harrypotter4 = new Book("Harry Potter 4", "J.K. Rolling", 533, "not yet read");
createNewBookCard(harrypotter4); 

const harrypotter5 = new Book("Harry Potter 5", "J.K. Rolling", 533, "not yet read");
createNewBookCard(harrypotter5); 

const harrypotter6 = new Book("Harry Potter 6", "J.K. Rolling", 533, "not yet read");
createNewBookCard(harrypotter6); 

const harrypotter7 = new Book("Harry Potter 7", "J.K. Rolling", 533, "not yet read");
createNewBookCard(harrypotter7); 


});

