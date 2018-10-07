import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

// import { postEvents } from '../actions'

class EventsIndex extends Component {
  render(){
    return (
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    )
  }
}

// const mapDispatchToProps = ({postEvents})

export default connect(null, null)(EventsIndex)
