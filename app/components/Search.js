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
		url:
		type:
		dataType: 'JSON'
	}).done( search => {
		this.setState({ search: search });
	}).fail( msg=> {
		console.log(msg)
	});
}