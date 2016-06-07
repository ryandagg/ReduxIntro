import React, { Component } from 'react';
import {connect} from 'react-redux';
import selectBook from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}

	renderList(){
		return this.props.books.map((book) =>
			<li
				className="list-group-item"
				key={book.title}
				onClick={() => this.props.selectBook(book)}
			>
				{book.title}
			</li>
		)
	}
}

// anything returned from this will end up on the BookList props.
function mapStateToProps(state){
	return {
		books: state.books
	}
}

// anything returned from this will end up on the BookList props.
function mapDispatchToProps(dispatch){
	return bindActionCreators({selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);