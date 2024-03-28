const getStoredBooks = () => {
    const storedBooks = localStorage.getItem('book-applications');
    if(storedBooks){
        return JSON.parse(storedBooks);
    }
    return [];
}

const saveBooks = id => {
const storedBooks =getStoredBooks()
const exist = storedBooks.find(book_Id => book_Id === id);
if(!exist) {
    storedBooks.push(id);
    localStorage.setItem('book-applications', JSON.stringify(storedBooks))
}
}
export {getStoredBooks,saveBooks}