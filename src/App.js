import React from 'react';
import { renderRoutes } from 'react-router-config';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import { IconStyle } from './assets/iconfont/iconfont.js';
import routes from './routes/index.js';
import store from './store/index.js';

function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <GlobalStyle></GlobalStyle>
                <IconStyle></IconStyle>
                { renderRoutes(routes) }
            </HashRouter>
        </Provider>
    )
}

export default App;