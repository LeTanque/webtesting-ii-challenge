import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from '../components/App';



describe('<App />', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders successfully', () => {
    render(<App />);
  })

  // it('renders Hello World', () => {
  //   const { getByText, queryByText, debug } = render(<App />);
    
  //   debug();
    
  //   // getByText('hello world');
  //   // getByText(/hello world/i);// alternative way to find text with regex that is case-insensitive
  //   expect(queryByText(/hello world/i)).not.toBeNull();
  // })

  // it('greets the team', () => { 
  //   const { getByText } = render(<App />);
  //   const button = getByText(/greet/i);

  //   fireEvent.click(button);
  //   getByText(/hello web17/i);
  // });

});
