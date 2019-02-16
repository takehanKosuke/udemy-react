import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { postArticle } from '../actions'

class ArticlesNew extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubit.bind(this)
  }
  renderField(field){
    const { input, label, type, meta: { touched, error } } = field

    return(
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        erroeText={touched && error}
        {...input}
        fullWidth={true}
      />
    )
  }

  async onSubit(values) {
    await this.props.postArticle(values)
    this.props.history.push('/')
  }

  render(){
    const { handleSubmit, pristine, submitting, invalid } = this.props
    const style = {margin:12}
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>
        <RaisedButton label='Submit' type='submit' style={style} disabled={pristine || submitting || invalid} />
        <RaisedButton label='Cancel'  style={style} conteinerElement={<Link to='/' />} />
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.title) errors.title = 'Enter a title, please'
  if (!values.body) errors.body = 'Enter a body, please'

  return errors
}
const mapDispatchToProps = ({postArticle})

export default connect(null, mapDispatchToProps)(
  reduxForm({ validate, form: 'eventNewForm'})(ArticlesNew)
)
