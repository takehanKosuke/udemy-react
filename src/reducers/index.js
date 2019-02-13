import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import articles from './articles'

export default combineReducers({ articles, form })
