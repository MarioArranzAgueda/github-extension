chrome.bookmarks.onCreated.addListener((id, bookmark) => {
    const bookmarks = localStorage.getItem('bookmarks');
    console.log(JSON.parse(bookmarks));
    if(bookmarks) {
        localStorage.setItem('bookmarks', bookmarks.concat(JSON.stringify(bookmark)));
    } else {
        localStorage.setItem('bookmarks', [].concat(JSON.stringify(bookmark)));
    }
})
