import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import './index.css';

import { CurrencyProvider } from './contexts/currency-context';
import history from './history';
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);