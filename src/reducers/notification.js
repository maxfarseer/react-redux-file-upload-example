import { combineReducers } from 'redux'

import {
  NOTIFICATION_SHOW,
  NOTIFICATION_HIDE,
} from '../constants/Notification'

const notification = (state = {}, action) => {
  switch (action.type) {
    case NOTIFICATION_SHOW:
      return {
        id: action.id,
        isShown: true,
        text: action.text,
        status: action.status,
      }

    case NOTIFICATION_HIDE:
      if (state.id != action.id) {
        return state
      }
      return {
        ...state,
        isShown: false,
      }

    default:
      return state
    }
}

const byId = (state = {}, action) => {
  switch(action.type) {
    case NOTIFICATION_SHOW:
    case NOTIFICATION_HIDE:
      return {
        ...state,
        [action.id]: notification(state[action.id], action),
      }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch(action.type) {
    case NOTIFICATION_SHOW:
      return [...state, action.id]

    default:
      return state
  }
}

const notificationList = combineReducers({
  byId,
  allIds,
})

export default notificationList

export const getArrayNotifications = (state) => {
  return state.allIds.map(id => state.byId[id])
}
