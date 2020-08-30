import React from 'react';
import renderer from 'react-test-renderer';
import SiteHeader from './SiteHeader';

describe(`Site Header component`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(
      <SiteHeader menuItems={{
        nodes: [
          {
            id: `bmF2X21lbnVfaXRlbTo4`,
            label: `Sample Page`,
            path: `/sample-page/`
          },
          {
            id: `bmF2X21lbnVfaXRlbToxNg==`,
            label: `Privacy Policy`,
            path: `/privacy-policy/`
          }
        ]
      }} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
