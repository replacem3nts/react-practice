import React, { useEffect, useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    console.log('using effect!');
  }, [term]);

  // Second argument to useEffect:
  //  [] (empty array) - runs at initial render
  //  nothing (zero arg) - runs at initial render + every rerender
  //  [data] (some number of elements in array) - run at initial render and after every rerender IF data has changed since last render

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            className="input"
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
