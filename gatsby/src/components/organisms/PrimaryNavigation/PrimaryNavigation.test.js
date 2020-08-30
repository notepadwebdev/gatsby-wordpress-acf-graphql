import React from 'react';
import renderer from 'react-test-renderer';
import PrimaryNavigation from './PrimaryNavigation';

describe(`Primary Navigation component`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(
      <PrimaryNavigation menuItems={{
        nodes: [
          {
            id: `bmF2X21lbnVfaXRlbTo4`,
            label: `Menu Item 1`,
            path: `/menu-item-1/`
          },
          {
            id: `bmF2X21lbnVfaXRlbToxNg==`,
            label: `Menu Item 2`,
            path: `/menu-item-2/`
          }
        ]
      }} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
