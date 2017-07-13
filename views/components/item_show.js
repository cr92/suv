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
      <div className="panel panel-warning">
        <div className="panel-heading">DETAILS</div>
        <div className="panel-body">
          <img
            src={item.url || "https://i.ytimg.com/vi/_DR4ovnkSvI/hqdefault.jpg"}
            className="img-circle"/>
          <ul className="list-group col-md-2">
            <li className="list-group-item"><i className="fa fa-user-circle"></i> {item.title}</li>
            <li className="list-group-item"><i className="fa fa-bitcoin"></i> {item.price}</li>
            <li className="list-group-item"><i className="fa fa-stack-overflow"></i> {item.quantity}</li>
            <li className="list-group-item"><i className="fa fa-book"></i> {item.description}</li>
          </ul>

          <button
            onClick={this
            .onClickDelete
            .bind(this)}
            className="btn btn-danger">Delete
          </button>
          <hr/>
          <Link to={`/items/edit/${this.props.match.params.id}`} className="btn btn-info">EDIT</Link>

        </div>
      </div>
    );
  }

  onClickDelete() {
    const id = this.props.match.params.id;
    this
      .props
      .deleteItem(id, () => {
        this
          .props
          .history
          .push('/')
      });
  }
}

function mapStateToProps({
  items
}, ownProps) {
  return {
    item: items[ownProps.match.params.id]
  }
}
export default connect(mapStateToProps, {fetchItem, deleteItem})(ItemsShow);
