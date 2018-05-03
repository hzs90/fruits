import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../components/Fruits';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Fruits />, div);
  ReactDOM.unmountComponentAtNode(div);
});
