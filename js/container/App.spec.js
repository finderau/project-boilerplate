import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from './App';

describe('Test suite for App', () => {
  it('App should exist', () => {
    const component = shallow(<App/>);
    expect(component.find('.new-project')).to.have.length(1);
  });
});
