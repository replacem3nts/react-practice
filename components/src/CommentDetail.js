import React from 'react';

export const CommentDetail = ({ avatar, author, date, text }) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">Today at {date}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};
