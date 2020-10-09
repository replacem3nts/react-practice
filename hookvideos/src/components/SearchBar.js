import React, { useState } from 'react';

const SearchBar = ({ handleSubmit }) => {
  const [text, setText] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    handleSubmit(text);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
