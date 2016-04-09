import React, {Component} from 'react';
import $ from 'jquery';


class Search extends Component {
	constructor(props){
		super(props);
		this.getSearch = this.getSearch.bind(this);
		this.submitForm= this.submitForm.bind(this);
		this.state = { groceries: [] };
	}
	getSearch(){
		$.ajax({
			url: '../../groceries.json',
			type: 'GET',
			dataType: 'JSON'
		}).done( groceries => {
		this.setState({ groceries: groceries });
		}).fail( msg=> {
			console.log(msg)
		});
	}
	submitForm(e){
	  e.preventDefault();
	  let groceries = this.state.groceries;
	  console.log('first' + groceries); 
	  let output = groceries.unshift({ name: this.refs.name.value });
	  this.refs.name.value = '';
	  console.log(output); 
	  // this.setState({ category: items, nextID: this.nextID(this.state.nextID) });
	}
	render(){
		return(
	    <div className="center nav-wrapper">
	      <form onSubmit={this.submitForm}>
	        <div className="input-field">
	          <input id="search" type="search" />
	          <label htmlFor="search"><i className="material-icons" placeholder='Search'></i></label>
	          <i className="material-icons">close</i>
	        </div>
	      </form>
	      
	    </div>
		);
	}
}

export default Search;