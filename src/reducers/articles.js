import _ from 'lodash'
import {
  READ_ARTICLES,
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
 } from '../actions'

export default (articles = {}, action) => {
  switch (action.type){
    case CREATE_ARTICLE:
    case UPDATE_ARTICLE:
      const data = action.response.data
      return { ...articles, [data.id]:data}
    case READ_ARTICLES:
      return _.mapKeys(action.response.data.data, 'id')
    case DELETE_ARTICLE:
      delete articles[action.id]
      return { ...articles }
    default:
      return articles
  }
}
