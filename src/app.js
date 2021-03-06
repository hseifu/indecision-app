import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import initialize from'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


const jsx = (
        <AppRouter/>
);
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true;
    }
};


ReactDOM.render(jsx, document.getElementById('app'));

// firebase.auth().onAuthStateChanged((user) => {
//     if (user){
//         store.dispatch(login(user.uid)); 
//         renderApp();
//         if (history.location.pathname === '/'){
//             history.push('/dashboard');
//         }
//     }
//     else {
//         store.dispatch(logout());
//         renderApp();
//         history.push('/');
//     }
// })