import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from './Root.jsx';
import { Provider } from 'react-redux'
import { store } from './reducers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
)