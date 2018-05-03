import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/Prices';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Prices />, div);
  ReactDOM.unmountComponentAtNode(div);
});
