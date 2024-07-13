import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppClass from './AppClass';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <AppClass msg="Hello Props from class component and how to use state on class component"/>
          <App msg="Hello props from functional"/>
        </div>
      </div>
    </div>   
  </React.StrictMode>
);
