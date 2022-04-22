import React from 'react';
import {create} from 'react-test-renderer';

import Home from '../src/screens/Home';
import ContainerTest from '../src/helpers/containerTest';

describe('home snapshot', () => {
  test('should render', () => {
    const component = create(ContainerTest(<Home />)).toJSON();
    expect(component).toMatchSnapshot();
  });
});
