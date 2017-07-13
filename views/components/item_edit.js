import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

import {editItem} from '../actions/index';

class ItemsEdit extends Component {
  render()
  {
    const {handleSubmit} = this.props;
    return (

      <div className="panel panel-default">
        <div className="panel-heading">EDIT DETAILS</div>
        <div className="panel-body">
          <div className="form-group">
            <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
              <Field label='Title' name='title' component={this.renderField}/>
              <Field label='Price' name='price' component={this.renderField}/>
              <Field label='Quantity' name='quantity' component={this.renderField}/>
              <Field label='URL' name='url' component={this.renderField}/>
              <Field label='Description' name='description' component={this.renderField}/>
              <button type='submit' className="btn btn-success button-margin-15">Done</button>
              <hr/>
              <Link to={`/items/${this.props.match.params.id}`} className="btn btn-warning">CANCEL</Link>
            </form>
          </div>
        </div>
      </div>
    );
  }

  onFormSubmit(values) {
    let id = this.props.match.params.id
    console.log(values);
    this
      .props
      .editItem(id, values, () => {
        this
          .props
          .history
          .push(`/items/${id}`);
      });
  }

  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type='text' {...field.input} className="form-control"/>
      </div>
    )
  }
}

export default reduxForm({form: 'ItemsEditForm'})(connect(null, {editItem})(ItemsEdit));
