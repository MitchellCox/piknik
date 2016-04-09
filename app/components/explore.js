import React, {Component} from 'react';
    
<h2>Explore</h2>  
  var ItemGridRow = React.createClass({
      render : function(){
          return (
            <div class="container">
              <div class="row">
                <div class="card-panel explore">
                  <tr>
                      <th>{this.props.item.Category}</th>
                      <div class="card pink darken-3">
                        <div class="card-content white-text">
                      <td>{this.props.item.Item}
                          <span>{this.props.item.Brand}</span>
                          <span>{this.props.item.Price}</span>
                      </td>
                        </div>
                      </div>
                  </tr>
                </div>
              </div>
            </div>
          );
        }
      });
   
  var ItemGridTable = React.createClass({
      getInitialState: function(){
          return {
              items:[]
          }
      },
      componentDidMount:function(){
          $.get(this.props.dataUrl, function(data){
              if(this.isMounted()){
                  this.setState({
                      items: data
                  });
              }
          }.bind(this));
      },
      render : function(){
         var rows = [];
          this.state.items.forEach(function(item){
              rows.push(<ItemGridRow key={item.ItemID} item={item}/>);
          });
         return (<table className="table table-bordered table-responsive">
              <thead>
                  <tr>
                      <th>Category</th>
                      <td>Item</td>
                      <td>Brand</td>
                      <td>Price</td>
                  </tr>
              </thead>
              <tbody>
                  {rows}
              </tbody>
          </table>);
      }
  });
 ReactDOM.render(
      <ItemGridTable dataUrl="/home/getItemData"/>,
      document.getElementById('griddata')
  );
</script>
