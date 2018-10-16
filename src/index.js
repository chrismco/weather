import React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

render(
    <App />,
    document.getElementById('root')
  )

serviceWorker.register();

