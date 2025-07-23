var booksCollection = [];

function book(title, author, edition, pages, datePublished, price, genre, copiesHeld) { 
   this.title = title;
   this.author = author;
   this.edition = edition;
   this.pages = pages;
   this.datePublished = datePublished;
   this.price = price;
   this.genre = genre;
   this.copiesHeld = copiesHeld;

   booksCollection.push(this);
}

var NineteenEightyFour = new book("1984", "George Orwell", "first", 328, 1948, 8.99, "Dystopian",3)
var toKillAMockingbird = new book("To Kill a Mockingbird", "Harper Lee", "first", 281, 1960, 7.99, "Fiction", 5);
var theGreatGatsby = new book("The Great Gatsby", "F. Scott Fitzgerald", "first", 180, 1925, 10.99, "Classic", 4);
var prideAndPrejudice = new book("Pride and Prejudice", "Jane Austen", "first", 279, 1813, 9.99, "Romance", 4);
var theHobbit = new book("The Hobbit", "J.R.R. Tolkien", "first", 310, 1937, 8.99, "Fantasy", 5);
var mobyDick = new book("Moby-Dick", "Herman Melville", "first", 635, 1851, 12.99, "Adventure", 4);
var janeEyre = new book("Jane Eyre", "Charlotte Brontë", "first", 507, 1847, 6.99, "Gothic", 5);
var warAndPeace = new book("War and Peace", "Leo Tolstoy", "first", 1225, 1869, 14.99, "Historical Fiction", 3);
var theCatcherInTheRye = new book("The Catcher in the Rye", "J.D. Salinger", "first", 277, 1951, 7.49, "Coming-of-Age", 4);
var theChroniclesOfNarnia = new book("The Chronicles of Narnia", "C.S. Lewis", "first", 767, 1950, 9.49, "Fantasy", 5);
var dracula = new book("Dracula", "Bram Stoker", "first", 418, 1897, 8.49, "Horror", 4);
var theOdyssey = new book("The Odyssey", "Homer", "first", 576, -800, 11.99, "Epic", 3);
var theShining = new book("The Shining", "Stephen King", "first", 447, 1977, 10.99, "Horror", 4);
var theAlchemist = new book("The Alchemist", "Paulo Coelho", "first", 208, 1988, 7.49, "Philosophical", 5);
var aGameOfThrones = new book("A Game of Thrones", "George R.R. Martin", "first", 694, 1996, 13.99, "Fantasy", 5);
var theSecretGarden = new book("The Secret Garden", "Frances Hodgson Burnett", "first", 331, 1911, 6.99, "Children's Literature", 4);
var theColorPurple = new book("The Color Purple", "Alice Walker", "first", 295, 1982, 8.99, "Historical Fiction", 4);
var fahrenheit451 = new book("Fahrenheit 451", "Ray Bradbury", "first", 249, 1953, 9.49, "Dystopian", 4);
var crimeAndPunishment = new book("Crime and Punishment", "Fyodor Dostoevsky", "first", 430, 1866, 10.49, "Psychological", 3);
var animalFarm = new book("Animal Farm", "George Orwell", "first", 112, 1945, 6.99, "Satire", 5);


var bookTitles = []
for (var i =0; i < booksCollection.length; i++) {
bookTitles.push(booksCollection[i].title);
};

var bookAuthor = []
for (var i =0; i < booksCollection.length; i++) {
bookAuthor.push(booksCollection[i].author);
};

var bookGenre = []
for (var i =0; i < booksCollection.length; i++) {
bookGenre.push(booksCollection[i].genre);
};

var bookPrices = []
for (var i =0; i < booksCollection.length; i++) {
bookPrices.push(booksCollection[i].price);
};

function searchByTitle(title) {
 for (var i = 0; i < booksCollection.length; i++) {
    if (booksCollection[i].title === title) {
        return booksCollection[i];
    }
 }
 return "Book not found"
}

function searchByAuthor(author) {
    for (var i = 0; i < booksCollection.length; i++) {
       if (booksCollection[i].author == author) {
           return booksCollection[i];
       }
    }
    return "Author not found"
   }

   function searchByDatePublished(datePublished) {
    for (var i = 0; i < booksCollection.length; i++) {
       if (booksCollection[i].datePublished == datePublished) {
           return booksCollection[i].title;
       }
    }
    return "None matching this date"
   }

   function searchBetweenDates(a,b)  {
     var matchingBooks = []
    for (var i = 0; i < booksCollection.length; i++) {
       if (booksCollection[i].datePublished > a && booksCollection[i].datePublished < b) {
           matchingBooks.push(booksCollection[i].title);
       }
    }
    return matchingBooks;
   }

function settingQuantity(title,newQuantity) {
 title.copiesHeld = newQuantity
 console.log("Copies held of " + booksCollection.title, "is now " + newQuantity )
}

function HowMany(title) {
   console.log("There are " + title.copiesHeld + " copies of " + title.title + " in the bookstore")

}
 

function bookSale(title,inputMoney) {
  console.log("The quanitity is initially " + title.copiesHeld)
   if (title.copiesHeld > 0) {
     title.copiesHeld = title.copiesHeld - 1
      change = inputMoney - title.price
   }
 console.log(title.title + " has been purchased with £" + inputMoney + " and the customer's change is £", + change)
 console.log("The quantity is now " + title.copiesHeld)
}

// Book Management Operations available:
//
// Whole Index (displays all bookstore elements of this prototype):
// bookTitles(), bookAuthor(),bookGenre() and bookPrices()
//
//Search by Functions (obvs requires input):
// searchByAuthor(), searchByDatePublished(), searchBetweenDates()
//
//Setting Functions (two inputs):
// settingQuantity(,)
//
//Mathematical
// bookSale(,)
