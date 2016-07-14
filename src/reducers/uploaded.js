import { combineReducers } from 'redux'

const items = (state = [], action) => {
  switch(action.type) {
    case 'UPLOAD_SUCCESS':
      return [...state, action.data]

    default:
      return state
  }
}

const isFetching = (state = false, action) => {
  switch(action.type) {
    case 'UPLOAD_REQUEST':
      return true

    case 'UPLOAD_FAILURE':
    case 'UPLOAD_SUCCESS':
      return false

    default:
      return state
  }
}

const reducer = combineReducers({
  items,
  isFetching,
})

export default reducer

export const getFilesArray = (state) => state.items
export const getIsFetching = (state) => state.isFetching
