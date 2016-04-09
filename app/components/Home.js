import React, {Component} from 'react';
import Search from './Search';
import Explore from './Explore';
// import Explore from './explore';
//import List from './List';

class Home extends Component {
 render() {
   return (<div>
             <h1 className='center text'>Welcome</h1>
             <Search />
             <Explore />
           </div>
         	);
 }
}

export default Home
