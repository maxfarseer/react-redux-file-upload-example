import {expect} from 'chai'
import {
  __RewireAPI__,
  __ResetDependency__,
  showNotification,
  hideNotification,
} from '../../src/actions/NotificationActions'

import {
  NOTIFICATION_SHOW,
  NOTIFICATION_HIDE,
} from '../../src/constants/Notification'

describe('Notification actions', () => {

  before(() => {
    __RewireAPI__.__Rewire__('v4', () => 'mock-v4-id')
  })

  after(() => {
    __ResetDependency__('v4')
  })

  it('should create an action for show Notification', () => {
    const text = 'something going wrong'
    const expectedAction = {
      type: NOTIFICATION_SHOW,
      id: 'mock-v4-id',
      status: 'err',
      text,
    }

    expect(showNotification({
      status: 'err',
      text: text,
    })).to.deep.equal(expectedAction)
  })

  it('should create an action for hide Notification', () => {
    const expectedAction = {
      type: NOTIFICATION_HIDE,
      id: 'mock-v4-id',
    }

    expect(hideNotification('mock-v4-id')).to.deep.equal(expectedAction)
  })

})
