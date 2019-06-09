import React from 'react';
import ReactDOM from 'react-dom';
import App, { Link, LinkOpt } from './App';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const TITLE = 'Title'

configure({
  adapter: new Adapter()
});


describe('<App /> mount rendering', () => {
  it('h1 contains correct text', () => {
    const wrapper = mount(<App />)
    expect(wrapper.find('h1').text()).toBe(TITLE)
    wrapper.unmount()
  })
});
