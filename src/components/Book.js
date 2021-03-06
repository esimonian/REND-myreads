import React, {Component} from 'react'
import {PropTypes} from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render() {
    const {book, onShelfChange} = this.props;
    var url =''
    if (book.imageLinks) {
      url = book.imageLinks.thumbnail
    } else {
      url = 'http://via.placeholder.com/350x150'
    }
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
                 style={
                   { width: 128,
                     height: 193,
                     backgroundImage: `url(${url})` }}></div>
            <div className="book-shelf-changer">
              <select onChange={(e) => onShelfChange(book, e)} value={book.shelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.name}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>
    )
  }
}
export default Book;
