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
      <div className="panel panel-info">
        <div className="panel-heading">ITEMS LIST</div>
        <div className="panel-body">
          <ul className="list-group">
            {this.renderItems()}
          </ul>
        </div>
      </div>
    );
  }

  renderItems()
  {
    let index = 0;
    return _.map(this.props.items, function (item) {
      index++;
      let cname = index % 2 == 0
        ? "col-xs-2 list-group-item list-group-item-success my-border"
        : "col-xs-2 list-group-item list-group-item-warning my-border"
      return (
        <li key={item._id} className={cname}>
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