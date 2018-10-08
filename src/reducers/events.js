import _ from 'lodash'
import {
  READ_EVENTS,
  CREATE_EVENT,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
 } from '../actions'

export default (events = {}, action) => {
  switch (action.type){
    case READ_EVENT:
    case CREATE_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      console.log(action.response.data)
      // id: 4, title: "Let's have an event 4!", body: "This is the body for event 4."}
      return { ...events, [data.id]:data}
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}
