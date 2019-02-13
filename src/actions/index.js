import axios from 'axios'

export const READ_ARTICLES = 'READ_ARTICLES'
export const READ_ARTICLE = 'READ_ARTICLE'
export const CREATE_ARTICLE = 'CREATE_ARTICLE'
export const DELETE_ARTICLE = 'DELETE_ARTICLE'
export const UPDATE_ARTICLE = 'UPDATE_ARTICLE'

const ROOT_URL = 'http://localhost:3000/api/v1'
const QUERYSTRING = ''
// const QUERYSTRING = '?token=token123'

export const readArticles = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/articles${QUERYSTRING}`)
  dispatch ({ type: READ_ARTICLES, response })
}

export const postArticle = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/articles${QUERYSTRING}`, values)
  dispatch ({ type: CREATE_ARTICLE, response })
}

export const deleteArticle = id => async dispatch => {
  await axios.delete(`${ROOT_URL}/articles/${id}${QUERYSTRING}`)
  dispatch ({ type: DELETE_ARTICLE, id })
}

export const putArticle = values => async dispatch => {
  const response = await axios.put(`${ROOT_URL}/articles/${values.id}${QUERYSTRING}`, values)
  dispatch ({ type: UPDATE_ARTICLE, response })
}

export const getArticle = id => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/articles/${id}${QUERYSTRING}`)
  dispatch ({ type: READ_ARTICLE, response })
}
