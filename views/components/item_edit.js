import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {Field, reduxForm, initialize} from 'redux-form';

import {editItem} from '../actions/index';
import {fetchItem} from '../actions/index';

class ItemsEdit extends Component {

  componentDidMount() {
    this.handleInitialize();
  }

  render()
  {
    const {handleSubmit} = this.props;
    return (

      <div className="panel panel-danger">
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

  handleInitialize() {
    const initData = {
      "title": this.props.item.title,
      "price": this.props.item.price,
      "quantity": this.props.item.quantity,
      "url": this.props.item.url,
      "description": this.props.item.description
    };

    this
      .props
      .initialize(initData);
  }

  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type='text' {...field.input} className="form-control"/> {field.meta.touched && field.meta.error}
      </div>
    )
  }
}

function mapStateToProps({
  items
}, ownProps) {
  return {
    item: items[ownProps.match.params.id]
  }
}

function validate(values) {
  const errors = {};

  var regex = /^[0-9]*$/;

  if (!values.title) {
    errors.title = 'Title Required';
  }
  if (values.price && !regex.test(values.price)) {
    errors.price = 'Only numbers are allowed';
  }
  if (values.quantity && !regex.test(values.quantity)) {
    errors.quantity = 'Only numbers are allowed';
  }
  return errors;
}

export default reduxForm({form: 'ItemsEditForm', validate})(connect(mapStateToProps, {editItem})(ItemsEdit));
