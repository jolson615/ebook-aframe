// import leftBottomFront from 'utils';
// import {rightBottomFront from 'utils';
console.log("Running!");


var bookWidth = 0.2;
var bookHeight = 0.3;
var bookDepth = 0.05;
var bookCoverWidth = bookWidth + 0.01;
var bookCoverDepth = 0.01;

const book_front_cover = document.querySelector('#book-front-cover');
var bfc = leftBottomFront(0, 0, 0, bookCoverWidth, bookHeight, bookCoverDepth);
book_front_cover.innerHTML = `<a-box position="${bfc[0]} ${bfc[1]} ${bfc[2]}"
                           width="${bookCoverWidth}" height="${bookHeight}" depth="${bookCoverDepth}"
                           color="tomato"></a-box>`;

const book_pages = document.querySelector('#book-pages');
var bp = leftBottomFront(0, 0, bookCoverDepth, bookWidth, bookHeight, bookDepth);
book_pages.innerHTML = `<a-box position="${bp[0]} ${bp[1]} ${bp[2]}"
                           width="${bookWidth}" height="${bookHeight}" depth="${bookDepth}"
                           color="white"></a-box>`;
                           
const book_pages_right = document.querySelector('#book-pages-right');
var bp = leftBottomFront(0, 0, bookCoverDepth, bookWidth, bookHeight, bookDepth);
book_pages_right.innerHTML = `<a-box position="${bp[0]} ${bp[1]} ${bp[2]}"
                           width="${bookWidth}" height="${bookHeight}" depth="${bookDepth}"
                           color="white"></a-box>`;

const book_back_cover = document.querySelector('#book-back-cover');
var bbc = leftBottomFront(0, 0, bookCoverDepth+bookDepth, bookWidth, bookHeight, bookCoverDepth);
book_back_cover.innerHTML = `<a-box position="${bbc[0]} ${bbc[1]} ${bbc[2]}"
                           width="${bookCoverWidth}" height="${bookHeight}" depth="${bookCoverDepth}"
                           color="tomato"></a-box>`;

const book_binding = document.querySelector('#book-binding');
var bb = rightBottomFront(0, 0, 0, bookCoverDepth, bookHeight, (bookCoverDepth*2)+bookDepth);
book_binding.innerHTML = `<a-box position="${bb[0]} ${bb[1]} ${bb[2]}"
                           width="${bookCoverDepth}" height="${bookHeight}" depth="${(bookCoverDepth*2)+bookDepth}"
                           color="tomato"></a-box>`;
                           
                           
const book = document.querySelector("#book");
const book_left = document.querySelector("#book-left");
const book_right = document.querySelector("#book-right");

                           
                           
window.addEventListener("keydown", e => {
    if (e.code == "KeyO") {
        openBook();
    };
});

function openBook() {
    book.emit("openBook");
    book_left.emit("openBook");
};