import {
  NOTIFICATION_SHOW,
  NOTIFICATION_HIDE,
} from '../constants/Notification'

import { v4 } from 'node-uuid'

export function showNotification(params) {
  return {
    type: NOTIFICATION_SHOW,
    status: params.status,
    text: params.text,
    id: v4(),
  }
}

export function hideNotification(id) {
  return {
    type: NOTIFICATION_HIDE,
    id,
  }
}
