import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import { Link } from "react-router-dom";
import BookShelf from './BookShelf'

class ListBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  getBooksByShelf(shelf) {
    return this.props.books.filter((b) => b.shelf === shelf)
  }
  render() {
    const {onShelfChange} = this.props
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              name="Currently Reading"
              books={this.getBooksByShelf("currentlyReading")}
              onShelfChange={onShelfChange}/>
            <BookShelf
              name="Want to Read"
              books={this.getBooksByShelf("wantToRead")}
              onShelfChange={onShelfChange}/>
            <BookShelf
              name="Read"
              books={this.getBooksByShelf("read")}
              onShelfChange={onShelfChange}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBook;
