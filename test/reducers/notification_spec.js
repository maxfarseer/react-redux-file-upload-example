import {expect} from 'chai'
import NotificationReducer from '../../src/reducers/Notification'

import {
  NOTIFICATION_SHOW,
  NOTIFICATION_HIDE,
} from '../../src/constants/Notification'

describe('Notification reducer', () => {

  describe('show/hide Notification', () => {

    it('show Notification with error text', () => {
      const initialState = {
        allIds: [],
        byId: {},
      }

      const action = {
        type: NOTIFICATION_SHOW,
        status: 'err',
        text: 'Something going wrong',
        id: 'fake-v4-id',
      }

      const nextState = NotificationReducer(initialState, action)

      expect(nextState).to.deep.equal({
        allIds: ['fake-v4-id'],
        byId: {
          ['fake-v4-id']: {
            status: 'err',
            text: 'Something going wrong',
            id: 'fake-v4-id',
            isShown: true,
          },
        },
      })
    })

    it('hide Notification, reset notification text', () => {
      const initialState = {
        allIds: ['fake-v4-id'],
        byId: {
          ['fake-v4-id']: {
            status: 'err',
            text: 'Something going wrong',
            id: 'fake-v4-id',
            isShown: true,
          },
        },
      }

      const action = {
        type: NOTIFICATION_HIDE,
        id: 'fake-v4-id',
      }

      const nextState = NotificationReducer(initialState, action)

      expect(nextState).to.deep.equal({
        allIds: ['fake-v4-id'],
        byId: {
          ['fake-v4-id']: {
            status: 'err',
            text: 'Something going wrong',
            id: 'fake-v4-id',
            isShown: false,
          },
        },
      })
    })

  })

})
