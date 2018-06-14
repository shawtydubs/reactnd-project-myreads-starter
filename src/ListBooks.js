import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './Bookshelf';

class ListBooks extends Component {
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
      )
    };
};

ListBooks.propTypes = {
    books: PropTypes.array.isRequired
}

export default ListBooks;
