import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Bookmark = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const removeBookmark = (url) => {
    setBookmarks((bookmarks) => bookmarks.filter((b) => b.url !== url));
  };

  return (
    <div>
      <h1>Bookmarks</h1>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark.url}>
            <a href={bookmark.url}>{bookmark.title}</a>
            <button onClick={() => removeBookmark(bookmark.url)}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookmark;
