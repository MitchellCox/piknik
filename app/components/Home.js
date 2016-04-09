import React, {Component} from 'react';
import Search from './Search';
//import Explore from './explore';
//import List from './List';

class Home extends Component {
 render() {
   return (<div id='main'>
             <h1>Piknik</h1>
             <Search />
           </div>
         	);
 }
}

export default Home
