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

  changeShelf(book, e){
    var shelf = e.target.value
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks()
    })
  }

  render() {
    const books = this.state.books;
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks books={books} onShelfChange={this.changeShelf}/>
        )}/>
        <Route path="/search" render={( {history} ) => (
            <Search />
        )}/>
      </div>
    )
  }
}

export default BooksApp
