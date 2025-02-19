import React from 'react';

class SearchBar extends React.Component {
  state = { text: '' };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.text);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
