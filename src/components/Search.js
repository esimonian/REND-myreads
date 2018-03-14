import React, {Component} from 'react'
import { Link } from "react-router-dom";
import {PropTypes} from 'prop-types'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'

class Search extends Component {
  static propTypes = {
    onShelfChange: PropTypes.func.isRequired
  }

  state = {
    books: [],
    query: ''
  }

  handleSearch(e) {
    var query = e.target.value
    this.setState(() => {
      return {query}
    })
    if (query) {
      this.bookSearch(query)
    } else {
      this.setState(() => {
        return {books: []}
      })
    }

  }

  bookSearch(query) {
    BooksAPI.search(query, 20).then((books) => {
      if (books.length) {
         books = books.filter((b) => (b.imageLinks))
        this.setState({books})
      }
    })
  }

  render() {
    const {books, query} = this.state;
    const {onShelfChange} = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(e) => this.handleSearch(e)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          { books.map((book) => {
              return (
                  <Book key={book.id} book={book} onShelfChange={onShelfChange} />
              )
          })}
          </ol>
        </div>
      </div>
    )
  }

}
export default Search;
