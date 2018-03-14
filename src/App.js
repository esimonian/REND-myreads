import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import Search from './components/Search'
import ListBooks from './components/ListBooks'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    });
  }

  onShelfChange(book, e){
    var shelf = e.target.value
    BooksAPI.update(book, shelf).then(() => {
      // Need this line to update the shelf locally
      book.shelf = shelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }))
    })
  }

  render() {
    const books = this.state.books;
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks books={books} onShelfChange={this.onShelfChange.bind(this)}/>
        )}/>
        <Route path="/search" render={( {history} ) => (
            <Search onShelfChange={this.onShelfChange.bind(this)}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
