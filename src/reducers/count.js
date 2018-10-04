import { INCREMENT, DECREMENT } from '../actions'

const initioalState = { value: 0 }

export default (state = initialState, action) => {
  seitch (action.type){
    case INCREMENT:
      return { value: state.value + 1}
    case DECREMENT:
      return { value: state.value - 1}
    default:
      return state
  }
}
