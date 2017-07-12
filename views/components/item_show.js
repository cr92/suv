import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {fetchItem} from '../actions/index';
import {deleteItem} from '../actions/index';

class ItemsShow extends Component {

  componentDidMount()
  {
    console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    this
      .props
      .fetchItem(id);
  }

  render() {
    const {item} = this.props;

    if (!item) {
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <img src={item.url} alt="X"/>
        <div><h2>{item.title}</h2></div>
        <div><h4>{item.price}</h4></div>
        <div><h6>{item.quantity}</h6></div>
        <div><h6>{item.description}</h6></div>
        <button onClick={this.onClickDelete.bind(this)}>Delete</button>
      </div>
    );
  }

  onClickDelete(){
    const id = this.props.match.params.id;
    this.props.deleteItem(id,()=>{this.props.history.push('/')});
  }
}

function mapStateToProps({
  items
}, ownProps) {
  return {
    item: items[ownProps.match.params.id]
  }
}
export default connect(mapStateToProps, {fetchItem,deleteItem})(ItemsShow);