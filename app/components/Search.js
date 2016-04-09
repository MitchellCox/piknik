import React, {Component} from 'react';
import $ from 'jquery';


class Search extends Component {
	constructor(props){
		super(props);
		this.getSearch = this.getSearch.bind(this);
		this.addSearch = this.addSearch.bind(this);
		this.state = { search: [] };
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
render(){
	return(
		<nav>
    <div class="nav-wrapper">
      <form>
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