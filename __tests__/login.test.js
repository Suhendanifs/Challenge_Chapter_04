import React from 'react';
import {create} from 'react-test-renderer';

import Login from '../src/screens/Login';
import ContainerTest from '../src/helpers/containerTest';

describe('Popular Card Snapshot', () => {
  test('should render', () => {
    const component = create(ContainerTest(<Login />)).toJSON();
    expect(component).toMatchSnapshot();
  });
});
