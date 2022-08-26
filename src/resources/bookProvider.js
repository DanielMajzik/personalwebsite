import {allBooksData} from "./bookDesctiptions";

export function findBook(url) {
    return allBooksData.find(book => book.url === url);
}

export function getAllBookData() {
    return allBooksData;
}

export function getBookTitles() {
    let titles = [];
    allBooksData.forEach((value) => {
        titles.push(value.bookTitle);
    })
    return titles;
}

export function getUrls() {
    let urls = [];
    allBooksData.forEach((value) => {
        urls.push(value.url);
    })
    return urls;
}
