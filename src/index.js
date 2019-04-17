import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import productReducer from './reducers/productReducers';
import userReducer from './reducers/userReducers';
// function reducer(state,action){
//     if(action.type==='changeState'){
//         return action.payload.newState;
//     }
//     return 'State'
// }



const allReducers = combineReducers({
    products: productReducer,
    user: userReducer
});

// const store = createStore(reducer);
const store = createStore(
    allReducers, {
        products: [{ name: 'iphone' }, { description: 'wak phone' }],
        user: 'Micheal'
    },
    
    window.devToolsExtension && window.devToolsExtension() 
    );

// const action = {
//     type: 'changeState',
//     payload:{
//         newState: 'My new state'
//     }
// }

//store.dispatch(action);
const updateUserAction = {
    type: 'updateUser',
    payload:{
        user:'Eric Tyler'
    }
}
store.dispatch(updateUserAction);
console.log(store.getState())
ReactDOM.render(<Provider store={store}><App aProps="Some kings props" /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
