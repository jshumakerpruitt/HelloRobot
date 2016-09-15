import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import App from '../index';
import Footer from 'components/Footer';

describe('<App />', () => {
  it('should render the header', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find('Header').length).toEqual(1);
  });

  it('should render its children', () => {
    const children = (<h1>Test</h1>);
    const renderedComponent = shallow(
      <App>
        {children}
      </App>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });

  it('should render the footer', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Footer).length).toEqual(1);
  });
});
