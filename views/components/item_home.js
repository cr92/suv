import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchItems} from '../actions/index';
import _ from 'lodash';

class ItemHome extends Component {
  componentDidMount() {
    this
      .props
      .fetchItems();
  }

  render() {
    console.log('render ', this.props.items);
    return (
      <div>
        <h3>ITEMS</h3>
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }

  renderItems()
  {
    return _.map(this.props.items, function (item) {
      return (
        <li key={item._id}>
          <Link to={`/items/${item._id}`}>{item.title}</Link>
        </li>
      );
    });
  }
}

function mapStateToProps(state) {
  return {items: state.items};
}

export default connect(mapStateToProps, {fetchItems})(ItemHome);