// A container is a normal React Component that gets bounded to
// the application state
// Whenever application state changes, the container will re-render as well

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'; //action creator
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}


////////////////////////////////////////////////////////////////////////////////
//                                BookList Display                            //
////////////////////////////////////////////////////////////////////////////////
function mapStateToProps(state) { // state here is the overall application state
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  };
} // this.props.books

////////////////////////////////////////////////////////////////////////////////
//                                Book Selected: action                       //
////////////////////////////////////////////////////////////////////////////////
// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
// Whenever selectBook is called, the result should be passed
// to all of our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch)
} // this.props.selectBook


////////////////////////////////////////////////////////////////////////////////
//                       Component to Container promotion                     //
////////////////////////////////////////////////////////////////////////////////
// Promote BookList from a Component to a Container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
