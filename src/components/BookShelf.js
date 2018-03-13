import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import Book from './Book'
class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render() {
    const { books, name, onShelfChange} = this.props
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          { books.map((book) => {
              return (
                <Book key={book.id}
                      book={book} />
              )
            })
          }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;
