import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';

import {createItem} from '../actions/index';

class ItemsNew extends Component {
  render()
  {
    const {handleSubmit} = this.props;
    return (

      <div className="panel panel-success">
        <div className="panel-heading">ADD DETAILS</div>
        <div className="panel-body">
          <div className="form-group">
            <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
              <Field label='Title' name='title' component={this.renderField}/>
              <Field label='Price' name='price' component={this.renderField}/>
              <Field label='Quantity' name='quantity' component={this.renderField}/>
              <Field label='URL' name='url' component={this.renderField}/>
              <Field label='Description' name='description' component={this.renderField}/>
              <button type='submit' className="btn btn-success button-margin-15">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  onFormSubmit(values) {
    console.log(values);
    this
      .props
      .createItem(values, () => {
        this
          .props
          .history
          .push('/');
      });
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

export default reduxForm({form: 'ItemsNewForm', validate})(connect(null, {createItem})(ItemsNew));
