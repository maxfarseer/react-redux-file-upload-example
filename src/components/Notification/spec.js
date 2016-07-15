/* eslint-disable no-undef */

import Notification from './index'
import { shallow } from 'enzyme'

describe('<Notification />', () => {

  let props;

  beforeEach(() => {
    props = {
      status: 'ok',
      text: 'text...',
      clickHandler: () => {},
    }
  })

  it('does render OK (green background) notification', () => {
    const element = shallow(<Notification { ...props } />)
    expect(element.find('.notification_ok')).to.have.length(1)
  })

  it('does render ERR (red background) notification', () => {
    props.status = 'err'

    const element = shallow(<Notification { ...props } />)
    expect(element.find('.notification_err')).to.have.length(1)
  })

})
/* eslint-enable */
