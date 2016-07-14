/* eslint-disable no-undef */

import Preloader from './index'
import { shallow } from 'enzyme'

describe('<Preloader />', () => {

  it('does not render, when isFetching is false', () => {
    const props = { isFetching: false }

    const element = shallow(<Preloader { ...props } />)
    expect(element.find('.preloader.none')).to.have.length(1)
  })

  it('does render, when isFetching is true', () => {
    const props = { isFetching: true }

    const element = shallow(<Preloader { ...props } />)
    expect(element.find('.preloader.none')).to.have.length(0)
  })

})
/* eslint-enable */
