import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './components/App'

import { fetchProfileSummary } from './actions'

// import { AppContainer } from 'react-hot-loader'

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

store.dispatch(fetchProfileSummary())

const html = ReactDOMServer.renderToString(
    <Provider store={store}>
        <App />
    </Provider>
)
dispatch(html);

if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept();
}
