import React, {Component} from 'react';
import $ from 'jquery';

class Explore extends Component { 
  constructor(props) {
    super(props);
    this.state = { groceries: [] }
  }   

  componentDidMount() {
    $.ajax({
      url: '/explore',
      type: 'GET'
    }).done( items => {
      debugger
      this.setState({groceries: items});
    }).fail( msg => {
      debugger
    })
  }
  render() {
    let groceries = this.state.groceries.map( item => {
      return(<Item key={item._id} {...item} />);
    });
    return(
      <div>
        <h2>Explore</h2>
        <table>
          <thead>
            <tr>
              <th>Categories</th>
              <th>Brand</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {groceries}
          </tbody>
        </table>
      </div>
    )
  }
}  
//   var ItemGridRow = React.createClass({
//       render : function(){
//           return (
//             <div class="container">
//               <div class="row">
//                 <div class="card-panel explore">
//                   <tr>
//                       <th>{this.props.Grocery.Category}</th>
//                       <div class="card pink darken-3">
//                         <div class="card-content white-text">
//                       <td>
//                           <span>{this.props.Grocery.Brand}</span>
//                       </td>
//                         </div>
//                       </div>
//                   </tr>
//                 </div>
//               </div>
//             </div>
//           );
//         }
//       });
   
//   var ItemGridTable = React.createClass({
//       getInitialState: function(){
//           return {
//               Grocery:[]
//           }
//       },
//       componentDidMount:function(){
//           $.get(this.props.dataUrl, function(data){
//               if(this.isMounted()){
//                   this.setState({
//                       Grocery: data
//                   });
//               }
//           }.bind(this));
//       },
//       render : function(){
//          var rows = [];
//           this.state.Grocery.forEach(function(item){
//               rows.push(<ItemGridRow key={item.ItemID} item={item}/>);
//           });
//          return (<table className="table table-bordered table-responsive">
//               <thead>
//                   <tr>
//                       <th>Category</th>
//                       <td>Brand</td>
//                   </tr>
//               </thead>
//               <tbody>
//                   {rows}
//               </tbody>
//           </table>);
//       }
//   });
//  ReactDOM.render(
//       <ItemGridTable dataUrl="/home/getItemData"/>,
//       document.getElementById('griddata')
//   );
// </script>

export default Explore;
