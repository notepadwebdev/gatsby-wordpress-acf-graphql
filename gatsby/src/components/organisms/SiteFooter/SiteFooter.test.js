import React from 'react';
import renderer from 'react-test-renderer';
import SiteFooter from './SiteFooter';

describe(`Site Footer component`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(<SiteFooter />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
