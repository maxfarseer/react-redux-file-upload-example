import {
  showNotification,
} from './NotificationActions'

const request = require('superagent-bluebird-promise')

export function uploadFile(file) {

  return dispatch => {
    dispatch({ type: 'UPLOAD_REQUEST' })

    return request.post('https://file.io')
      .attach('file', file, file.name)
      .then(res => {
        if (!res.ok) {
          dispatch({ type: 'UPLOAD_FAILURE' })
          dispatch(showNotification({
            status: 'err',
            text: 'something going wrong',
          }))
        } else {
          dispatch({
            type: 'UPLOAD_SUCCESS',
            data: JSON.parse(res.text),
          })
          dispatch(showNotification({
            status: 'ok',
            text: 'File uploaded',
          }))
        }
      }, err => {
        dispatch({ type: 'UPLOAD_FAILURE' })
        dispatch(showNotification({
          status: 'err',
          text: err.message,
        }))
      })
  }
}
