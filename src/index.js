import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Welcome from './Welcome'
import Store from './Store'
import Blog from './Blog'

function App() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Welcome} exact />
                <Route path="/Blog" component={Blog} />
                <Route path="/Store" component={Store} />
            </Switch>
        </main>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)