import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './styles.css';
import { todosReducer } from './reducers/todos.reducer';
import { TodoX } from './components/todos.component';
import { DeletedTaskX } from './components/deleted-tasks.component';

import { Menu } from './menu';
import { Footer } from './footer';

import { LocalStorageMethods } from './lib/main-lib';

const defaultState = { todos: [] };

const preloadedState = LocalStorageMethods.retrieve('gToDos') || defaultState;

const store = createStore(todosReducer,
    preloadedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Root = ({ store }) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" render={({ match }) => (
                    <div>
                        <Menu matchPath={match.path} />
                        <TodoX />
                        <Footer/>
                    </div>
                )} />
                <Route path="/deleted" render={({ match }) => (
                    <div>
                        <Menu matchPath={match.path} />
                        <DeletedTaskX />
                        <Footer/>
                    </div>
                )} />
            </Switch>
        </BrowserRouter>
    </Provider>
)

render(
    <Root store={store} />,
    document.getElementById('root')
);
