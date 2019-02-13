import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
}from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import { readArticles } from '../actions'

class ArticlesIndex extends Component {
  componentDidMount(){
    this.props.readArticles()
  }

  renderArticles() {
    return _.map(this.props.articles, article => (
      <TableRow key={article.id}>
        <TableRowColumn>{article.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/articles/${article.id}`}>
            {article.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{article.body}</TableRowColumn>
      </TableRow>
    ))
  }

  render(){
    const style = {
      position:"fixed",
      right: 12,
      bottom: 12,
    }

    return (
      <React.Fragment>
        <FloatingActionButton style={style}containerElement={<Link to= '/articles/new' />}>
          <ContentAdd />
        </FloatingActionButton>

        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderArticles()}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ articles: state.articles })
const mapDispatchToProps = ({readArticles})

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesIndex)
