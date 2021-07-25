import React, {useState} from 'react';
import './index.css'
export default function Bookmarks({addBookmark}) {
  const [bookmarks, setBookmarks] = useState(() => JSON.parse(localStorage.getItem('bookmarks')) || []);

  const handleClick = () => {
      setBookmarks(addBookmark('https://www.google.es'));
  }

  return (
    <div className="bookmarks">
        {bookmarks.map(bookmark => <a target="_blank" href={bookmark}>{bookmark}</a>)}
        <span onClick={handleClick}>+</span>
    </div>
);
}
