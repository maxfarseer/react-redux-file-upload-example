/* eslint-disable no-unused-vars */
import React from 'react' // eslint-disable-line no-unused-vars
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallow, mount, render } from 'enzyme'
import chaiEnzyme from 'chai-enzyme'
import { jsdom } from 'jsdom'

require('mock-local-storage')

chai.use(sinonChai)
chai.use(chaiEnzyme())

global.document = jsdom('')
global.window = document.defaultView
global.navigator = { userAgent: 'browser' }

global.React = React
global.expect = expect
/* eslint-enable */
