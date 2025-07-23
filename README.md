# Bookstore Inventory Management System

A simple JavaScript-based system for managing a bookstore's inventory, supporting searching, stock management, and sales processing.

---

## Features

- **Book Constructor**
  - Creates book objects with title, author, edition, pages, date published, price, genre, and quantity.
  - Automatically adds each new book to the `booksCollection` array.

- **Data Indexing**
  - Extracts book attributes into arrays:
    - `bookTitles[]`
    - `bookAuthor[]`
    - `bookGenre[]`
    - `bookPrices[]`

---

## Search Functions

| Function | Description |
|----------|-------------|
| `searchByTitle(title)` | Returns a book object by its title |
| `searchByAuthor(author)` | Returns the first book by the given author |
| `searchByDatePublished(year)` | Returns the title of the book published in a given year |
| `searchBetweenDates(start, end)` | Returns an array of titles published between two years |

---

## Inventory Management

| Function | Description |
|----------|-------------|
| `settingQuantity(bookObject, newQuantity)` | Updates the number of copies available for a book |
| `HowMany(bookObject)` | Logs the number of copies available for a specific book |

---

## Sales Handling

| Function | Description |
|----------|-------------|
| `bookSale(bookObject, inputMoney)` | Processes a sale, decreases stock, and calculates customer change |

---

## 📁 Book Data

Includes 20 classic and modern titles from various genres such as **Dystopian**, **Fantasy**, **Romance**, **Historical Fiction**, and more.
