import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class BookDetail extends Component{
	render(){
		if(this.props.book == null){
			return (<div>Select a book to get started!</div>);
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>Title:{this.props.book.title}</div>
				<div>Pages:{this.props.book.pages}</div>
			</div>
		);
	}
}


// anything returned from this will end up on the BookList props.
function mapStateToProps(state){
	return {
		book: state.activeBook
	}
}


export default connect(mapStateToProps)(BookDetail);