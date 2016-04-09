import React, {Component} from 'react';
import $ from 'jquery';


class Search extends Component {
	constructor(props){
		super(props);
		this.getSearch = this.getSearch.bind(this);
		this.submitForm= this.submitForm.bind(this);
		this.state = { grocery: [] };
	}
}
getSearch(){
	$.ajax({
		url: '/search'
		type: 'GET'
		dataType: 'JSON'
	}).done( search => {
		this.setState({ search: search });
	}).fail( msg=> {
		console.log(msg)
	});
}
submitForm(e){
  e.preventDefault();
  let groceries = this.state.groceries;
  groceries.unshift({ name: this.refs.name.value });
  this.refs.name.value = null;
  this.setState({ category: items, nextID: this.nextID(this.state.nextID) });
}
render(){
	return(
		<nav>
    <div class="center nav-wrapper">
      <form onSubmit={this.submitForm}>
        <div class="input-field">
          <input id="search" type="search" required>
          <label for="search"><i class="material-icons">search</i></label>
          <i class="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
		);
}