import {expect} from 'chai'
import NotificationReducer from '../../src/reducers/Notification'

import {
  NOTIFICATION_SHOW,
  NOTIFICATION_HIDE,
} from '../../src/constants/Notification'

describe('Notification reducer', () => {

  it('show Notification with error text (add notification item)', () => {
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
        },
      },
    })
  })

  it('hide Notification (remove notification item)', () => {
    const initialState = {
      allIds: ['fake-v4-id'],
      byId: {
        ['fake-v4-id']: {
          status: 'err',
          text: 'Something going wrong',
          id: 'fake-v4-id',
        },
      },
    }

    const action = {
      type: NOTIFICATION_HIDE,
      id: 'fake-v4-id',
    }

    const nextState = NotificationReducer(initialState, action)

    expect(nextState).to.deep.equal({
      allIds: [],
      byId: {},
    })
  })


})
