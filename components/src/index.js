import React from 'react';
import ReactDOM from 'react-dom';
import { CommentDetail } from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Sam"
        text="Nice blog post!"
        date="6:00pm"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Alex"
        text="I like the subject"
        date="2:00am"
      />
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Jane"
        text="I like the writing"
        date="5:00pm"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
