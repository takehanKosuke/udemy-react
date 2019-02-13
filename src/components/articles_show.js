import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import { getArticle, deleteArticle, putArticle } from '../actions'

class ArticlesShow extends Component {
  constructor(props){
    super(props)
    this.onSubmit = this.onSubit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  componentDidMount(){
    const{ id } = this.props.match.params
    if (id) this.props.getArticle(id)
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
    await this.props.putArticle(values)
    this.props.history.push('/')
  }

  async onDeleteClick() {
    const {id} = this.props.match.params
    await this.props.deleteArticle(id)
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
        <RaisedButton label='Cancel' style={style} containerElement={<Link to="/" />}/>
        <RaisedButton label='Delete' style={style} onClick={this.onDeleteClick}/>
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

 const mapStateToProps = (state, ownProps) => {
   const article = state.articles[ownProps.match.params.id]
   return { initialValues: article, article }
 }
 const mapDispatchToProps = ({deleteArticle, getArticle, putArticle})

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({ validate, form: 'articleShowForm', enableReinitialize: true})(ArticlesShow)
)
