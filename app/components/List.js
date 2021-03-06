import React, List from 'react';

class List extends Component {
	constructor(props) {
    super(props); 
  }

	render() {
    return(<div className="col s12 m4">
            <div className="card green lighten-4">
              <div>
            		<h1>Item:<h1>
            		{this.props.Item}
              </div>
              <br />
              <button onClick={() => this.props.deleteItem(this.props.id)} className='btn red'>Delete</button>
            </div>
          </div>);
	}
}

export default Home